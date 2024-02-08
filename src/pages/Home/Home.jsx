import React from 'react';
import Svg from '../../assets/images/svg.svg';
import Image from '../../assets/images/homePageImage.jpg';
import css from './Home.module.css'

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.homeTextPart}>
        <h1 className={css.homeh1}>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={css.homeP}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className={css.homeButtonGetStarted}>
          Get started
          <svg>
            <use href={`${Svg}#icon-Arrow-16`} />
          </svg>
        </button>
        <div className={css.mountOfPsycologists}>
        <svg>
          <use href={`${Svg}#icon-fe_check-converted`} />
        </svg>
        <div className={css.mountOfPsycologistsText}>
          <p className={css.mountOfPsycologistsTextT1}>Experienced psychologists</p>
          <p className={css.mountOfPsycologistsTextT2}>15,000</p>
        </div>
      </div>
      </div>
      <div className={css.imageHomeDiv}>
        <img src={Image} alt="Psychologists" />
      </div>
    </div>
  );
};

export default Home;
