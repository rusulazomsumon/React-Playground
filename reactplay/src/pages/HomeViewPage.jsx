import React from 'react';

function ContactViewPage() {
  // Replace placeholders with actual contact information
  const name = 'Samsung Mobile';
  const description = 'New Samsung Mobile';
  const price = '10';

  return (
    <div>
      <h2>This is Home Page</h2>
      <p><strong>Product Title:</strong> {name}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Buy Now</strong></p>
      {/* You can add other relevant contact information here */}
    </div>
  );
}

export default HomeViewPage;