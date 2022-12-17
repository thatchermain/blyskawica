import React from "react";
import "../styles/Reading.css";
import { Link } from "react-router-dom";

import { TbFileDownload } from "react-icons/tb";

const Reading = () => {
  return (
    <section>
      <div className="reading__container">
        <div className="overlay"></div>
        <div className="content">
          <div className="title">
            <h1 className="title__text">Czytelnia</h1>
          </div>
          <div className="download">
            <Link
              className="download__link"
              to="https://drive.google.com/file/d/15n_F0H8ZnWCqX2qHWz17tWfaWPO-ME8j/view?usp=share_link"
              target="_blank"
              download
            >
              <TbFileDownload className="download__icon" />
              <h2 className="download__text">Narodowy Socjalizm</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reading;
