export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/avatar.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Let Me Introduce Myself</p>
          <h1 className="section--heading">About Me</h1>
          <p className="hero--section-description">
          {/* I am a Front-End developer from India. I create professional websites. I love art and always try to  */}
          {/* show unique views to the audience through my design. */}
          Hi there! I'm Rahul Tiwari, a self-taught front-end web developer from India with a strong 
          background in HTML, CSS, and JavaScript. I'm also skilled in a variety of front-end frameworks, 
          such as React. I'm passionate about building beautiful, user-friendly interfaces that provide real 
          value and interest to the end user. I've completed several creative and user-friendly front-end 
          projects, and I'm always looking for new challenges.I'm currently working as a front-end developer 
          at Tunicalabs Media, where I'm responsible for building and maintaining the company's website. 
          </p>
          {/* <p className="hero--section-description">
          I'm also available for freelance work, and I'm always looking for new opportunities to learn and 
          grow. If you have a project that you think I'd be a good fit for, please don't hesitate to contact 
          me.
          </p> */}
          {/* <button className="btn btn-primary">Work</button>
          <button className="btn btn-primary">Read More</button> */}
        </div>
      </div>
    </section>
  );
}
