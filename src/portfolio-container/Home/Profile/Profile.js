import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          
            <div className="colz-icon">
              <a href="https://github.com/raji2004">
                <i className="fa fa-github" />
              </a>
              <a href="mailto:kingraj1344@gmail/com">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/muzzammil_raji/">
                <i className="fa fa-instagram" />
              </a>
              
              <a href="https://twitter.com/kingraj_1344">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Raji</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1
               
              >
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev😎",
                    1000,
                    "Full Stack Developer!💻",
                    1000,
                    "Nodejs Dev",
                    1000,
                    "Javascript Dev📱",
                    1000,
                    "React 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              love  to build applications with front and back end syntax.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="Raji-cv.docx" download="Raji-cv.docx">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
