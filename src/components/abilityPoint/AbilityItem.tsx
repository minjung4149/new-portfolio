import React from 'react';

interface AbilityItemProps {
  imageSrc: string;
  altText: string;
  description: string;
}

const AbilityItem: React.FC<AbilityItemProps> = ({ imageSrc, altText, description }) => (
  <li className="animation">
    <div className="icon">
      <img src={imageSrc} alt={altText} />
    </div>
    <p className="desc" dangerouslySetInnerHTML={{ __html: description }}></p>
  </li>
);

export default AbilityItem;
