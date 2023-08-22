import React from 'react'
import data from "../../data/index.json";
import './Aboutpage.css'
import pdf from '../../assets/Rahultiwariresume.pdf';
const AboutPage = () => {
  return (
    <>
      <section className='about-page-container'>
        <div className='about-page-content'>
          <div className='about-page-leftside'>
            <p className='section--title about__subheading'>Hi i am <span> Rahul Tiwari</span></p>
            <h2 className='section--heading about__heading'>A Front-End Web Developer</h2>
            <div className='about__info'>
              <div className='para'>
                <p>I am from India. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.</p>
                <p>I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.</p>
                <p>My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
              </div>
            </div>
            <div className='button-wrapper'>
              <a href={pdf} target="_blank" className='button'>DownLoad CV</a>
            </div>
          </div>
          <div className='about-page-rightside'>
            <img src="./img/avatar.png" alt="itsme" />
          </div>
        </div>
      </section>
      <section className='about-info-container'>
        <div className='about-info-content'>
          <h2 className="section--heading">Education</h2>
          <div className='about-section-container'>
            <div className='info-data'>
            {data?.education?.map((item, index) => (
              <div key={index} className="info--section--card">
                <div className="info--section--img">
                  <img src={item.src} alt="Product Chain" />
                </div>
                <div className="info--section--card--content">
                  <h3 className="info--section--edutitle">{item.title}</h3>
                  <h4 className="info--section--education">{item.role}</h4>
                  <h4 className="info--section--date">{item.date}</h4>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className='about-info-content'>
          <h2 className="section--heading">Experiance</h2>
          <div className='about-section-container'>
            <div className='info-data'>
            {data?.experiance?.map((item, index) => (
              <div key={index} className="info--section--card">
                <div className="info--section--img">
                  <img src={item.src} alt="Product Chain" />
                </div>
                <div className="info--section--card--content">
                  <h4 className="info--section--role">{item.role}</h4>
                  <h3 className="info--section--title">{item.title}</h3>
                  <p className="info--section--date">{item.date}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage