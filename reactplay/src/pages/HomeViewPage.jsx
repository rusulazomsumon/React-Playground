import React from 'react';

function HomeViewPage() {
  return (
    <div className="home-page">
      <h1>{title}</h1>
      {image && <img src={image} alt={title} />}
      <p>{content}</p>
    </div>
  );
}

export default HomeViewPage;