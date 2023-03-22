import React from "react";
import "./workHistory.css";

const WorkHistory = () => {
  return (
    <>
      <div className="resume-details-container">
        <div className="resume-detail-main resume-detail-main2">
          <div className="resume-college-info resume-college-info2">
            <h5>
              Full Stack Developer - <span>VCBay</span>
            </h5>
            <ul className="resume-exp-ul">
                <li>Designing and Developing Frontend Application using React js.</li>
                <li>With that company I worked on a variety of projects.</li>
                <li>Integrate Eslint with this project to avoid errors.</li>
                <li>Designed and created a Course Management system utilizing React js and Node js, which was then integrated with a project.</li>
                <li>Create your own component using Children props that can be reused everywhere.</li>
                <li>Collaborate closely with the Design Team to fully grasp the project&apos;s UI and UX so that I can design more responsive and user-friendly web pages.</li>
            </ul>
          </div>
          <div className="resume-clg-time resume-clg-time2">
            <div>Aug 2021 - Present</div>
          </div>
        </div>
        <div className="resume-detail-main resume-detail-main2">
          <div className="resume-college-info resume-college-info2">
            <h5>
              Web Developer - <span>Aczeron</span>{" "}
            </h5>
            <ul className="resume-exp-ul">
                <li>Developed dynamic and interactive web pages using javascript.</li>
                <li>Create responsive web pages using media query.</li>
                <li>Collaborated with developers and designers to develop responsive and user-friendly web pages.</li>
                <li>Conducted unit testing and debugging to ensure functionality of web applications.</li>
            </ul>
          </div>
          <div className="resume-clg-time resume-clg-time2">
            <div>July 2020 - OCT 2020</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkHistory;
