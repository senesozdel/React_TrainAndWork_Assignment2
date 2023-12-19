import { Link, useParams } from "react-router-dom";
function BlogDetail({ getBlogsBySlugs, comments }) {
  const { slug } = useParams();
  const blog = getBlogsBySlugs(slug)[0];

  return (
    <>
      <>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Blog Post</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">Blog Post</li>
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
                  <div className="blog-single-post-details-wrapper">
                    <h2 className="post-title">{blog.name}</h2>
                    <p className="post-meta">
                      By{" "}
                      <a href="#" className="post-author">
                        {blog.user}
                      </a>{" "}
                      <span className="separator">|</span>{" "}
                      <a href="#">{blog.date}</a>
                    </p>
                    <div className="post-thumbnail">
                      <img src={blog.image} className="img-fluid" alt="" />
                    </div>
                    <div className="post-text-content">
                      <p>
                        {blog.description}
                        {blog.description}
                        <br />
                        <br />
                        {blog.description}
                        {blog.description}
                        <br />
                        <br />
                        {blog.description}
                        {blog.description}
                        <br />
                        <br />
                        {blog.description}
                        {blog.description}
                        <br />
                        <br />
                        {blog.description}
                      </p>
                    </div>
                  </div>
                  <div className="blog-comments-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="blog-details-section-title">Comments</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="blog-comments-wrapper">
                          {comments.map((comment, index) => (
                            <div key={index} className="single-blog-comment">
                              <div className="single-blog-comment__image">
                                <img
                                  src="assets/img/review/one.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="single-blog-comment__content">
                                <div className="comment-time">
                                  <i className="fa fa-calendar" />
                                  {comment.date}
                                </div>
                                <p className="comment-text">
                                  {comment.content}
                                </p>
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
          </div>
        </div>
      </>
    </>
  );
}

export default BlogDetail;
