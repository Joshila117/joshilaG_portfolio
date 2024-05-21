import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";

const resumeURL = "https://drive.google.com/file/d/1qyIrantO0g8yh_IdaKtlkA0jv-OJ76XQ/view?usp=sharing";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom" >
      <h1 style={{ fontSize: "2.6rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Joshila, Frontend Developer at{" "}
            <span style={{ color: "#32CD30" }}>Wynbit Inc.</span>
            
          </p>
          <br />
          <p>
            I love working as a <span style={{ color: "#32CD30" }}>Frontend Developer</span> and My tech stack includes
            NodeJs, React, TypeScript, HTML, CSS. I am also familar with AWS and Docker, Kubernetes, Azure, Docker, Terraform.
          </p>
          <br />
          <p>
            I am also proficient in Java, HTML5 and love <span style={{ color: "#32CD30" }}>Building Web Pages</span> involving Java Technologies.
          </p>
          <br />
          <p>
            I love making side projects and learn about new{" "}
            <span style={{ color: "#32CD30" }}>technologies</span>.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>resume</span> to know more about me.{" "}
          </p>
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
      <div className="downloadPdf">
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<FiDownloadCloud />}
            style={{ marginBottom: "50px" }}
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomeBottomPage;
