import { Link } from "react-router-dom";
function Blog({ blogs, getComments }) {
  const handleComments = (blogId) => {
    getComments(blogId);
  };
  return (
    <>
      <>
        <>
          <div className="breadcrumb-area section-space--breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="breadcrumb-wrapper">
                    <h2 className="page-title">Blog</h2>
                    <ul className="breadcrumb-list">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="active">Blog</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content-wrapper">
            <div className="blog-page-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 order-1">
                    <div className="blog-post-wrapper">
                      <div className="row">
                        {blogs.map((blog, index) => (
                          <div key={index} className="col-md-6">
                            <div className="single-blog-post">
                              <div className="single-blog-post__image">
                                <Link to={`/blog-detail/${blog.slug}`}>
                                  <img
                                    src={blog.image}
                                    className="img-fluid"
                                    alt=""
                                    onClick={() => handleComments(blog.id)}
                                  />
                                </Link>
                              </div>
                              <div className="single-blog-post__content">
                                <h3 className="post-title">
                                  <Link
                                    to={`/blog-detail/${blog.slug}`}
                                    onClick={() => handleComments(blog.id)}
                                  >
                                    {blog.name}
                                  </Link>
                                </h3>
                                <p className="post-meta">
                                  By <a className="post-author">{blog.user}</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a>{blog.date}</a>
                                </p>
                                <p className="post-excerpt">
                                  {blog.description}
                                </p>
                                <Link
                                  to={`/blog-detail/${blog.slug}`}
                                  onClick={() => handleComments(blog.id)}
                                  className="blog-readmore-link"
                                >
                                  Read more <i className="fa fa-caret-right" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    </>
  );
}

export default Blog;
