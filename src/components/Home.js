import React from "react";
import "../styles/Home.css";
import Cat from './Cat'
const Home = () => {
   
  return (
    <div>
      {/* slider */}
      <header className="cont-slider">
        <section className="slider">
          <article className="slide one">
            <span></span>
          </article>
          <article className="slide two">
            <span> </span>
          </article>
          <article className="slide three">
            <span> </span>
          </article>
          <article className="slide four">
            <span> </span>
          </article>

          <article className="slide five">
            <span> </span>
          </article>
        </section>
      </header>


      <Cat />
    </div>

    
  );
};

export default Home;
