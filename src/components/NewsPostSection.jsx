import React from 'react';
import blogImg1 from '../assets/img/blog/blog-1.jpg';
import blogImg2 from '../assets/img/blog/blog-2.jpg';
import blogImg3 from '../assets/img/blog/blog-3.jpg';

const blogPosts = [
  {
    id: 1,
    image: `${blogImg1}`,
    
    tags: ['Travel', 'Videos'],
    title: 'Internet Banner Advertising Most Reliable',
    date: '19th March, 2019',
    author: 'John Smith',
    videoUrl: 'https://www.youtube.com/watch?v=8EJ3zbKTWQ8',
  },
  {
    id: 2,
    image: `${blogImg2}`,
    tags: ['Travel', 'Restaurant'],
    title: 'Internet Banner Advertising Most Reliable',
    date: '19th March, 2019',
    author: 'John Smith',
    videoUrl: null,
  },
  {
    id: 3,
    image: `${blogImg3}`,
    tags: ['Travel', 'Restaurant'],
    title: 'Internet Banner Advertising Most Reliable',
    date: '19th March, 2019',
    author: 'John Smith',
    videoUrl: null,
  },
];



const NewsPostSection = () => {
  return (
    
    <section className="news-post spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>News Post</h2>
              <p>Checkout Latest News And Articles From Our Blog</p>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  {post.videoUrl && (
                    <a
                      href={post.videoUrl}
                      className="play-btn video-popup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  )}
                </div>

                <div className="blog__item__text">
                  <ul className="blog__item__tags">
                    {post.tags.map((tag, i) => (
                      <li key={i}>
                        {i === 0 && <i className="fa fa-tags"></i>} {tag}
                      </li>
                    ))}
                  </ul>

                  <h5>
                    <a href="#">{post.title}</a>
                  </h5>

                  <ul className="blog__item__widget">
                    <li>
                      <i className="fa fa-clock-o"></i> {post.date}
                    </li>
                    <li>
                      <i className="fa fa-user"></i> {post.author}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPostSection;
