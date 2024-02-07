import React from 'react'
import MyComponent from '../component/MyComponent';

function HomeViewPage() {
  return (
    <div>
      <h1>Wellcome to Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore impedit quas quod quasi accusantium facilis deleniti rerum reiciendis earum id tempora, voluptates quam natus quia! Iure quis tempore, voluptas mollitia eos dignissimos quos beatae sunt alias consequatur fugit earum libero, laudantium fuga dicta id delectus reiciendis sint ipsam quam molestiae!
      </p>
      <MyComponent title="About Us" content="Learn more about our company..." />
    </div>
  );
}

export default HomeViewPage;
