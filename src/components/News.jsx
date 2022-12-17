import React from "react";
import { Link } from "react-router-dom";
import "../styles/News.css";

const News = () => {
  return (
    <section className="news">
      <div className="news__container">
        <div className="overlay"></div>
        <div className="content">
          <div className="title">
            <h1 className="title__text">Aktualności</h1>
          </div>
          <div className="entries__wrapper">
            <div className="entry">
              <span className="entry__date">17-12-2022</span>
              <h3 className="entry__title">
                "Narodowy Socjalizm" - Andrzej Dębiec.
              </h3>
              <p className="entry__description">
                W zakładce{" "}
                <Link className="entry__link" to={"/czytelnia"}>
                  Czytelnia
                </Link>{" "}
                do pobrania PDF.
              </p>
            </div>
            <div className="entry">
              <span className="entry__date">12-12-2022</span>
              <h3 className="entry__title">Lorem ipsum dolor sit amet.</h3>
              <p className="entry__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa repellendus quasi explicabo mollitia nihil
                ratione molestias iure, reiciendis qui voluptas rerum non? Ad
                repudiandae odio voluptatibus in sint minima repellendus ipsum
                aut ab, cumque molestiae, facilis quas eligendi, sunt illum!
                Tempore ipsam quaerat voluptas ullam, quis numquam deleniti
                modi?
              </p>
            </div>
            <div className="entry">
              <span className="entry__date">10-12-2022</span>
              <h3 className="entry__title">Lorem, ipsum dolor.</h3>
              <p className="entry__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                assumenda in inventore. Eos eum sed tempora. Ullam blanditiis
                quis doloribus provident illo cum odit. Recusandae ullam quas
                enim unde, nesciunt magni odit tempora necessitatibus, dolor
                blanditiis id, pariatur tenetur quidem eum! Consequuntur
                reiciendis modi magnam blanditiis, mollitia veniam laudantium
                incidunt reprehenderit accusamus, veritatis vero eos ea,
                quisquam laborum saepe? Sed corrupti repellendus aut iste quasi
                quos incidunt beatae modi harum sit ex reiciendis, perspiciatis
                natus. Nisi placeat consectetur debitis recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
