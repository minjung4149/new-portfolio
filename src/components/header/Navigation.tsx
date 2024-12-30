"use client";
import React, {useState} from "react";

interface NavigationProps {
  closeMenu?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({closeMenu}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ["About", "Skill", "Project", "Contact"];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({top, behavior: "smooth"});
    }
  };

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "on" : ""}
            onClick={() => {
              setActiveIndex(index);
              handleScroll(item.toLowerCase());
              if (closeMenu) closeMenu();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;