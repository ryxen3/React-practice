import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const params = useParams();
  const postId = Number(params.id);

  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the specific product and its seller 
    Promise.all([
      fetch(`https://fakestoreapi.com/products/${postId}`).then((res) => {
        return res.json();
      }),
      fetch(`https://fakestoreapi.com/users/${postId}`).then((res) => {
        return res.json();
      })
    ])
      .then((results) => {
        const product = results[0];
        const user = results[1];

        setPost({
          id: product.id,
          topic: product.category,
          title: product.title,
          longDescription: product.description,
          name: user ? user.username : "Rafid",
          rating: product.rating.rate,
          ratingCount: product.rating.count,
          image: product.image
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [postId]); // fetch again whenever the URL id changes

  // Shouldn't access to any post before the API is loaded
  if (!post) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <div className="bg-light">
      <div className="detail-container py-5">
        <div className="bg-white p-2">
          <div className="detail-wrapper">

            {/* Post metadata */}
            <div className="detail-side-box">

              {/* rating part */}
              <div className="detail-rating-box">
                <div className="detail-rating"><i className="fa-solid fa-star"></i> {post.rating}</div>
                <div className="detail-rating-count">{post.ratingCount}</div>
              </div>

              {/* comment part */}
              <div className="detail-comment-box">
                <i className="fa-solid fa-comment detail-comment-icon"></i>
                <div className="detail-comment-count">0</div>
              </div>
            </div>
            <div className="position-relative mb-2">
              <div className="detail-title">
                <span>{post.title}</span>
              </div>
              <div className="position-relative mt-2">
                <img className="w-100" src={post.detailimage || post.image} alt={post.title} />
                <a className="detail-name-badge">{post.name}</a>
              </div>
            </div>

            {/* long description into paragraphs */}
            {post.longDescription.split("\n").map((paragraph, index) => (
              <p key={index} className="detail-description">
                {paragraph}
              </p>
            ))}
            <div className="pt-3 mt-4">
              <p className="mb-1">
                <i className="fa-solid fa-folder me-2"></i>
                Category:{" "}
                <Link to={``} className="hover-red-black-effect">
                  {post.topic}
                </Link>
              </p>
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