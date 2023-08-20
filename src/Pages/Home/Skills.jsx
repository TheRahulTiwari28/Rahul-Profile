import React from 'react'
import data from "../../data/index.json";

const Skills = () => {
  return (
    <>
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="section--heading">My Skills</h2>
        <p className="section--title">Languages & Tools that all I know!</p>
      </div>
      <div className="skills--section--container">
        <div className='skills--section-content'>
        <h3 className="section--conetnt--heading">Languages</h3>
            <div className='skills-data'>
            {data?.languages?.map((item, index) => (
            <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
        <div className='skills--section-content'>
        <h3 className="section--conetnt--heading">Framework</h3>
            <div className='skills-data'>
            {data?.framework?.map((item, index) => (
            <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
        <div className='skills--section-content'>
        <h3 className="section--conetnt--heading">Libraries</h3>
            <div className='skills-data'>
            {data?.libraries?.map((item, index) => (
            <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
        <div className='skills--section-content'>
        <h3 className="section--conetnt--heading">Tools</h3>
            <div className='skills-data'>
            {data?.tools?.map((item, index) => (
            <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
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

export default Skills