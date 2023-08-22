export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/avatar.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="section--heading">About Me</h1>
          <p className="section--title">Let Me Introduce Myself</p>
          <p className="hero--section-description">
            I am a Front-End developer from India. I create professional websites. I love art and always try to 
            show unique views to the audience through my design.
          </p>
          <div className="about--button">
            <a href='/project' className='button'>Works</a>
            <a href='/about' className='button'>Read More</a>
          </div>
        </div>        
      </div>
    </section>
  );
}
