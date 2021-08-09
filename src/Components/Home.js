import React from 'react';
    export default function Home() {
      return (
        <div className="main-container">
        <div className="top-container">
          <img className="top-person" src="https://media.giphy.com/media/1sMGC0XjA1Hk58wppo/giphy.gif" width="250px" height="250px" alt="person" />
          <div className="title-text">
            <h1>I'm Mobinul</h1>
            <h2>A Web Developer.</h2>
          </div>
        </div>
        
        <div className="middle-container">
          <div className="profile">
            <img className="profile-img" src="images/Mobinul.png" alt="mobinul-profile-img" />
            <h2>Hello.</h2>
            <p className="intro">A mixed engineering professional of both hardware &amp; software domains. I have worked for OEM company, which build new-age technology for the sensor. Right now pursuing PG in Internation business &amp; Finance</p>
          </div>
          <br/>
          <br/>
          <div className="skills">
            <h2>Experience</h2>
            <div className="skill-row">
              <img className="code-img" src="https://media.giphy.com/media/4psNhoyhcrf0Zdwn7O/giphy.gif" width="270px" height="170px" alt="code-img" />
              <h3>Hardware Design &amp; Development</h3>
              <p>I started developing electronics prototypes when I was in my graduation days. Completed Btech in Electronics engineering, joined as an Electronics engineer in a product manufacturing based company. I have added many feathers in design & development of many circuit board for interdisciplinary sectors. I have worked for Ministry of Defense &amp; HAL.</p>
            </div>
            <div className="skill-row">
              <img className="robot-img" src="https://media.giphy.com/media/iINsn3itkNfYmteX0z/giphy.gif" width="200px" height="200px" alt="robot-img" />
              <h3>Robotic Device Engineer</h3>
              <p>Robotics is what my passion is all about. Being an electronics engineer, I loved to build machines. I started my journey of robotics in my graduation days &amp; won awards. I was finalist for IIT-Delhi RoboTryst.</p>
            </div>
          </div>
          <div>
            <h4 className="click">Want to know more</h4>
          <a className="btn-cl" href="https://mirhoda.github.io/New-personel-website/">👉 CLICK ME 👈</a>
          </div>
          
          <hr />
          
          <div className="contact-me">
            <h2>Get In Touch</h2>
            <h3>If you love technology as much as I do.</h3>
            <h4 className="contact-message"> Chill 🔸 Code 🔸 Execute <br /></h4>
            <a className="btn" href="mailto:mobinulhoda@gmail.com">CONTACT ME</a>
          </div>
        </div>
    
        <div className="bottom-container">
          <a className="footer-link" href="https://www.linkedin.com/in/mobinul-hoda/">LinkedIn</a>
          <a className="footer-link" href="https://twitter.com/mobinulhoda">Twitter</a>
          <a className="footer-link" href="https://github.com/Mirhoda">GitHub</a>
          <p className="copyright">© 2021 Designed & Developed by Mobinul with 💗 </p>
        </div>
        </div>
      );
    }