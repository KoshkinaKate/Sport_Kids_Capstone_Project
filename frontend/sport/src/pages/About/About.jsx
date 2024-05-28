import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="section-container">
        <h1 className="title">About Us</h1>
        <p className="intro">
          Welcome to PlayFit where we believe in the fun and excitement of sports for <strong>kids</strong>! Our goal is to inspire kids to stay <strong>active</strong> and <strong>healthy</strong> by discovering the amazing world of sports.
        </p>
      </div>

      <div className="section-container">
        <h2 className="subtitle">Meet Our Founder</h2>
        <p className="content">
          <strong>Kate Koshkina</strong> is passionate about helping kids find joy in sports. With years of experience in child development and sports education, she knows how important sports can be for growing kids. Kate is here to help your child find the perfect sport that makes them smile and have fun.
        </p>
      </div>

      <div className="section-container">
        <h2 className="subtitle">Our Vision</h2>
        <p className="content">
          We want to create a fun and supportive place where <strong>kids</strong> can learn about different sports, understand their benefits, and pick the ones they love. We believe every child should have the chance to <strong>enjoy sports</strong>, no matter who they are.
        </p>
      </div>

      <div className="section-container">
        <h2 className="subtitle">What We Offer</h2>
        <ul className="content">
          <li className="list-item"><strong>Sports Guides:</strong> Discover all kinds of sports, their pros and cons, and what makes each one special.</li>
          <li className="list-item"><strong>Expert Advice:</strong> Get personalized tips to help your child find their favorite sport.</li>
          <li className="list-item"><strong>Free Activities:</strong> Check out our <a href="/events" className="link">Events Page</a> for fun, free activities and events where your child can try out different sports.</li>
        </ul>
      </div>

      <div className="section-container">
        <h2 className="subtitle">Join Us</h2>
        <p className="content">
          At PlayFit, we’re all about helping kids fall in love with sports. Join us on our mission to create a healthier, happier future for our kids through the joy of sports.
        </p>
        <p className="content">
          For more information or to get involved, please <a href="/forum" className="link">Contact Us</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
