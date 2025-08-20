import React from 'react';
import Image from "next/image";

interface AbilityItemProps {
  imageSrc: string;
  altText: string;
  description: string;
}

const AbilityItem: React.FC<AbilityItemProps> = ({imageSrc, altText, description}) => (
  <li className="animation">
    <div className="icon">
      <Image
        src={imageSrc}
        alt={altText}
        width={80}
        height={80}
      />
    </div>
    <p className="desc" dangerouslySetInnerHTML={{__html: description}}></p>
  </li>
);

export default AbilityItem;
