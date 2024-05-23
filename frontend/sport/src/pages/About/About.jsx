import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        Welcome to PlayFit where we believe in the fun and excitement of sports for kids! Our goal is to inspire kids to stay active and healthy by discovering the amazing world of sports.
      </p>

      <h2 className="about-subtitle">Meet Our Founder: Kate Koshkina</h2>
      <p className="about-content">
        Kate Koshkina is passionate about helping kids find joy in sports. With years of experience in child development and sports education, she knows how important sports can be for growing kids. Kate is here to help your child find the perfect sport that makes them smile and have fun.
      </p>

      <h2 className="about-subtitle">Our Vision</h2>
      <p className="about-content">
        We want to create a fun and supportive place where kids can learn about different sports, understand their benefits, and pick the ones they love. We believe every child should have the chance to enjoy sports, no matter who they are.
      </p>

      <h2 className="about-subtitle">What We Offer</h2>
      <ul className="about-list">
        <li><strong>Sports Guides:</strong> Discover all kinds of sports, their pros and cons, and what makes each one special.</li>
        <li><strong>Expert Advice:</strong> Get personalized tips to help your child find their favorite sport.</li>
        <li><strong>Free Activities:</strong> Check out our <a href="/events" className="about-link">Events Page</a> for fun, free activities and events where your child can try out different sports.</li>
      </ul>

      <h2 className="about-subtitle">Join Us</h2>
      <p className="about-content">
        At PlayFit , we’re all about helping kids fall in love with sports. Join us on our mission to create a healthier, happier future for our kids through the joy of sports.
      </p>

      <p className="about-content">
        For more information or to get involved, please <a href="/forum" className="about-link">Contact Us</a>.
      </p>
    </div>
  );
};

export default About;

