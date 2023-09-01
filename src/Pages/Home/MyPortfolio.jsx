import data from "../../data/index.json";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">My Portfolio</h2>
          <p className="section--title">Recent Projects</p>
        </div>
        <div>
          <a
            className="btn btn-github"
            href="https://github.com/TheRahulTiwari28"
          >
            <img src={github} />
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.topthree?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <Link
                className="text-sm portfolio--link"
                to={`/project/${item.slug}`}
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio--button">
        <a href="/project" className="button">
          View All Project
        </a>
      </div>
    </section>
  );
}
