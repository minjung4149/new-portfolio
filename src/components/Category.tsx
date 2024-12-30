import React from 'react';

interface CategoryProps {
  title: string;
}

const Category: React.FC<CategoryProps> = ({title}) => {
  return (
    <div className="category_bar">
      <div className="container">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Category;
