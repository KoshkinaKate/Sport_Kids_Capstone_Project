import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  // Access the environment variable
  const googleDriveUrl = import.meta.env.VITE_GOOGLE_DRIVE_URL;

  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Discover the Joy of Play</h1>
      </div>
      <div className="video-section">
        <iframe
          src={googleDriveUrl}
          width="880"
          height="495"
          allow="autoplay"
          title="Google Drive Video"
        ></iframe>
      </div>
      <div className="content-section">
        <p>Every child has their unique journey in sports.</p>
        <p>We’re here to support you and your child in exploring and finding the perfect fit.</p>
        <p>Together, let's find the sport that makes them shine!</p>
      </div>
      <div className="facts-section">
        <div className="fact-container">
          <img src="https://www.shutterstock.com/image-photo/children-playing-tug-war-park-600nw-459100483.jpg" alt="Kids playing" />
          <h2>Benefits of Sports</h2>
          <p>
            Sports help kids develop physical skills, get exercise, make friends, have fun, learn teamwork, and improve self-esteem.
            {showMore1 && (
              <span>
                Sports participation can help kids build self-esteem and confidence. They also help in developing social skills and can improve academic performance.
              </span>
            )}
          </p>
          <button onClick={() => setShowMore1(!showMore1)}>
            {showMore1 ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="fact-container">
          <img src="https://media.istockphoto.com/id/638620778/photo/group-of-small-kids-having-fun-while-playing-in-nature.jpg?s=612x612&w=0&k=20&c=mDMSWo948u5fheX_SS3uMtCMDnnoM_LbS1jUkeSBjQE=" alt="Kids playing" />
          <h2>Best Age to Start</h2>
          <p>
            The best age for kids to start playing sports is around 6-7 years. It's important to focus on fun and skill development rather than competition.
            {showMore2 && (
              <span>
                Starting early allows children to develop fundamental skills and a love for physical activity. It's crucial to encourage play and enjoyment over competitiveness.
              </span>
            )}
          </p>
          <button onClick={() => setShowMore2(!showMore2)}>
            {showMore2 ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="fact-container">
          <img src="https://media.licdn.com/dms/image/C4D12AQGEgdFN0esCgA/article-cover_image-shrink_720_1280/0/1609133839871?e=2147483647&v=beta&t=45zUt6Hj9mu7cBJtNAeBtnPpuK6v_0xPNRZvqE31taE" alt="Kids playing" />
          <h2>Playing with Kids</h2>
          <p>
            Engaging in sports with your kids can be a great way to bond and teach them new skills. Always focus on encouragement and fun.
            {showMore3 && (
              <span>
                Playing sports together can improve your relationship with your children and help them develop a positive attitude towards physical activity. Encourage them and celebrate their efforts.
              </span>
            )}
          </p>
          <button onClick={() => setShowMore3(!showMore3)}>
            {showMore3 ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


