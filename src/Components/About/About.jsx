import React from "react";
import "./About.css";
import { Type } from "./Type";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hi, I am <span className="about__name">Ram kashyap</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Frontend Developer. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on react js since last 3 years and working
          5+ projects till now.
        </p>
        <div className="about__contact center">
          <a
            href="https://www.facebook.com/ram.kashyap.581187?mibextid=ZbWKwL"
            aria-label="facebook"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com/rampratapkashy6?s=09"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://youtube.com/@ramkashyap8512"
            aria-label="youtuber"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://instagram.com/ram.kashyap.581187?igshid=MzNlNGNkZWQ4Mg=="
            aria-label="instagram"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://wa.me/919795189922"
            );
          }}
        >
          Let's Chat
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
