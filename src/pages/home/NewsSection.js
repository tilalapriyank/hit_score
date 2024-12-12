import React from 'react';

const NewsSection = ({ news }) => {
  return (
    <section className="news-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Latest News</h2>
        <div className="row">
          {news.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text">{item.description}</p>
                  <a href={item.link} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
