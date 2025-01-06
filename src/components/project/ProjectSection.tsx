'use client';
import React, {useEffect, useState} from 'react';
import Category from "@/components/Category";
import ProjectCard from "@/components/project/ProjectCard";

interface ProjectData {
  imageSrc: string;
  imageAlt: string;
  link: string;
  title: string;
  description: string;
};


async function fetchProjects(): Promise<ProjectData[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${baseUrl}/data/projects.json`, {cache: 'no-store'});
  if (!res.ok) {
    throw new Error('Failed to fetch projects data');
  }
  return res.json();
}

const ProjectSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  // 프로젝트 배열에서 마지막 행의 시작 인덱스를 계산
  const lastRowStartIndex = Math.floor((projects.length - 1) / 3) * 3;

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="preview" id="project">
      <Category title="Project"/>
      <div className="work_wrapper common">
        {projects.map((project, index) => {
          // 마지막 줄 여부 확인
          const isLastRow = index >= lastRowStartIndex;

          return (
            <div
              key={index}
              className={`project ${isLastRow ? "no-bottom-border" : ""}`}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
