// Dependencies.
import { Link } from "react-scroll";
import React from 'react';

// Default Styles.
import './style.css';

// Responsive Styles.
import './media/phone-320.css'; // smartphones, iPhone, portrait 480x320 phones.
import './media/nook-482.css'; // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
import './media/tablet-642.css'; // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.
import './media/laptop-962.css'; // tablet, landscape iPad, lo-res laptops ands desktops. 
import './media/desktop-1026.css'; // big landscape tablets, laptops, and desktops.
import './media/highres-desktop-1282.css'; // hi-res laptops and desktops.

// Component app routing.
function About() {
  return (
    <div id="AboutMe">
      <div id="MyYoungProfile">
        {/* Young Shawn Profile Picture */}
      </div>
      {/* About Me Section */}
      <div class="card cardTransparency text-white">
        <div class="view p-3">
          {/* About Me Title */}
          <div class="flex-top text-center rgba-red-strong AboutMeContent">
            <h1 class="white-text font-weight-bold">
              - A Bit About Me -
            </h1>
          </div>
          <div class="card cardTransparency text-white">
            <div class="AboutContent">
              <div class="text-center rgba-blue-strong p-4">
                <h2 className="font-weight-bold">
                  How It All Started.
                </h2>
                <p class="lead white-text">
                  I was born in Delaware County Pennsylvania
                  and am currently a Full Stack Web Developer. I started programming at age twelve when I was
                  bored one night sitting on my family's Windows XP desktop. I looked up 'How to Make A Game
                  In 10 Minutes'. At the time, I didn't know much about programming, but I did get results
                  for a video called 'How to Make A Game In 15 Minutes', and it changed my life. It was a
                  tutorial for Batch, a Windows scripting language that allows you to talk to your computer,
                  giving it commands and enabling you to write quick programs that can easily automate
                  processes for you. I downloaded the file and played it. It was just a basic quiz
                  game that asked ten math problems. I followed the tutorial and re-created it. Once I
                  looked up how the different parts of the language worked, I created my own
                  quiz game, and it was the most proud and exciting moment in my life. Once
                  I learned some Batch, I went on to try Python, C#, VBS, and JavaScript.
                  For me, Batch was the gateway to learning other languages. It
                  inspired me to continue being curious.
               </p>
                <h2 className="font-weight-bold">
                  Where I Stand Today.
                </h2>
                <p class="lead white-text">
                  I graduated from the University of Pennsylvania's LPS Coding Boot Camp in 2019
                  and earned my certificate in Full Stack Development. I have two years of
                  experience mentoring with a developer working at a tax company where I
                  wrote UI for upcoming app features. I also took on my own project
                  after my mentor left the company, creating a repository to hold
                  and maintain our Excel Macros. I enjoy finding solutions to
                  problems, creating interfaces that are both easy to look at
                  and navigate. I am excited to utilize my skills as a Full Stack
                  Developer and contribute to teams and build quality
                  applications for the web.
               </p>
                {/* 'View My SKills' Button */}
                <Link className="nav-link hvr-grow text-white"
                  activeClass="active" to="MySkillsHeader"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  <button className="btn btn-danger">View My Skills</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Do export.
export default About;