// ================================================================= libraries =============================================================
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, animateScroll as scroll } from 'react-scroll';

import styles from './styles.module.css';
import '@site/src/css/button.css';
import '@site/src/css/cardbar.css';

import logo from '@site/static/img/nixie.jpg';

// ================================================================= constants  =============================================================
import {
  HERO_CARD_TITLE,
  HERO_CARD_MESSAGES,
  HERO_SOCIAL_BUTTON,
} from '@site/config/hero.js';
// import Scrolldown from '../Misc/Scrolldown/Scrolldown';

// ================================================================= render component =============================================================
const HeroSection = () => (
  <div id="home" className={styles.hero_container}>
    <div className={styles.hero_content}>
      <div className={styles.hero_card}>
        {/* ------------------- Card Top Bar  ---------------------------- */}
        <div className="card_bar">
          <span className="dots" />
          <div className={'text text_center'}>Toh Jing Hua</div>
        </div>

        {/* ------------------- Card Container ---------------------------- */}
        <div className={styles.hero_card_container}>
          {/* ------------------- Profile Pic ---------------------------- */}
          <div className={styles.profile_pic_wrapper}>
            <img src={logo} alt="Toh Jing Hua" style={{ objectFit: 'cover' }} />
          </div>

          {/* ------------------- Card Content ---------------------------- */}
          <div className={styles.hero_card_content}>
            <div className={styles.hero_card_title}>{HERO_CARD_TITLE}</div>
            {HERO_CARD_MESSAGES.map((heroMessage) => (
              <div className={styles.hero_card_text} key={heroMessage}>
                <ReactMarkdown linkTarget="_blank">{heroMessage}</ReactMarkdown>
              </div>
            ))}

            {/* ------------------- Social Buttons ---------------------------- */}
            <div className={styles.button_wrapper}>
              {Object.keys(HERO_SOCIAL_BUTTON).map((buttonText) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  className="btn effect01"
                  key={buttonText}
                  onClick={() => {
                    window
                      .open(HERO_SOCIAL_BUTTON[buttonText], '_blank')
                      .focus();
                  }}
                >
                  <span>{buttonText}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link
      className={styles.scroll_wrapper}
      to="projects"
      smooth
      duration={500}
      spy
      exact="true"
    >
      {/* <Scrolldown /> */}
    </Link>
  </div>
);

export default HeroSection;
