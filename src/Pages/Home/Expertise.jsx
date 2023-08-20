import data from "../../data/index.json";

export default function Myexpertise() {
  return (
    <section className="expertise--section" id="myexpertise">
      <div className="portfolio--container">
        {/* <p className="section--title">My expertise</p> */}
        <h2 className="section--heading">My Expertise</h2>
      </div>
      <div className="expertise--section--container">
        {data?.expertise?.map((item, index) => (
          <div key={index} className="expertise--section--card">
            <div className="expertise--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="expertise--section--card--content">
              <h3 className="expertise--section--title">{item.title}</h3>
              <p className="expertise--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
