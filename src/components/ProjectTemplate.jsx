import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/index.json";

export default function ProjectTemplate() {
  const { slug } = useParams();
  const blogData = data.portfolio.filter((item) => item.slug === slug);
  console.log(blogData);
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        {blogData.length ? (
          <>
            <h1>{blogData[0].title} </h1>
            <h3>{blogData[0].id}</h3>
            <h4>{blogData[0].slug}</h4>
            <p>{blogData[0].description}</p>
            <a href={blogData[0].link} target="_blank">
              View Project
            </a>
          </>
        ) : (
          <div>404 Not Found</div>
        )}
      </div>
    </>
  );
}
