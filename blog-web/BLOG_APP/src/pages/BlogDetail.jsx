import { Link, useParams } from "react-router-dom";
import blogCardData from "../data/blogCardData";

export default function BlogDetail() {
  const params = useParams();

  // Convert URL ID to a number for comparison.
  const postId = Number(params.id);

  // Find the post matching the URL ID.
  const post = blogCardData.find((item) => {
    return item.id === postId;
  });

  // Format the post date for display.
  const dateParts = post.date.split(" ");
  const monthDay = dateParts[0].slice(0, 3) + " " + dateParts[1].replace(",", "");
  const year = dateParts[2];

  return (
    <div className="bg-light">
      <div className="detail-container py-5">
        <div className="bg-white p-2">
          <div className="detail-wrapper">

            {/* Post metadata */}
            <div className="detail-side-box">
              <div className="detail-date-box">
                <div className="detail-date-month">{monthDay}</div>
                <div className="detail-date-year">{year}</div>
              </div>
              <div className="detail-comment-box">
                <i className="fa-solid fa-comment detail-comment-icon"></i>
                <div className="detail-comment-count">0</div>
              </div>
            </div>
            <div className="position-relative mb-2">
              <div className="detail-title d-flex justify-content-between">
                <span>{post.title}</span>
              </div>
              <div className="position-relative mt-2">
                <img className="w-100" src={post.detailimage || post.image} alt={post.title} />
                <a className="detail-name-badge">{post.name}</a>
              </div>
            </div>

            {/* long description paragraph render */}
            {post.longDescription.split("\n").map((para, idx) => (
              <p key={idx} className="detail-description">
                {para}
              </p>
            ))}
            <div className="pt-3 mt-4">
              <p className="mb-1">
                <i className="fa-solid fa-folder me-2"></i>
                Category:{" "}
                {post.topic.map((t, idx) => (
                  <span key={idx}>
                    <Link to={``} className="hover-red-black-effect">
                      {t}
                    </Link>
                    {idx < post.topic.length - 1 && (
                      <span className="hover-red-black-effect">, </span>
                    )}
                  </span>
                ))}
              </p>

              {/* Render only when tags exist */}
              {post.tag && (
                <p>
                  <i className="fa-solid fa-bookmark me-2"></i>
                  Tag:{" "}
                  {post.tag.map((t, idx) => (
                    <span key={idx}>
                      <Link to={``} className="hover-red-black-effect">
                        {t}
                      </Link>
                      {idx < post.tag.length - 1 && (
                        <span className="hover-red-black-effect">, </span>
                      )}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>

          {/* designer info */}
          <div className="border rounded p-4">
            <div className="row align-items-center g-4">
              <div className="col-12 col-sm-4 text-center">
                <img src={post.designerImage} alt={post.name} className="designerImage" />
              </div>
              <div className="col-12 col-sm-8">
                <p className="designer-name text-center text-sm-start">
                  About <span className="hover-red-black-effect">{post.name}</span>
                </p>
                <p className="designer-description">{post.designerDescription}</p>
              </div>
            </div>
          </div>

          {/* Comment form */}
          <div className="comment-form-wrapper">
            <h5 className="form-head-title">Leave a Reply</h5>
            <p className="form-subtitle">
              Your email address will not be published.{" "}
              <span>Required fields are marked</span>{" "}
              <span className="required-star">*</span>
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label small">
                  Comment <span className="required-star">*</span>
                </label>
                <textarea
                  id="comment"
                  className="form-control comment-textarea"
                  rows="6"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label small">
                  Name <span className="required-star">*</span>
                </label>
                <input type="text" id="name" className="form-control comment-input" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label small">
                  Email <span className="required-star">*</span>
                </label>
                <input type="email" id="email" className="form-control comment-input" />
              </div>
              <div className="mb-3">
                <label htmlFor="website" className="form-label small">
                  Website
                </label>
                <input type="text" id="website" className="form-control comment-input" />
              </div>
              <div className="form-check mb-5">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label small">
                  Notify me via e-mail if anyone answers my comment.
                </label>
              </div>
              <button type="submit" className="btn comment-submit-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}