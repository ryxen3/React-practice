import { Link } from "react-router-dom"

export default function BlogCard(props) {
    const post = props.post;

    return (
        <div className="card blog-card-shadow h-100 border-0 rounded-0">
            <Link to={`/blog/${post.id}`}>
                <img className="w-100 rounded-0" src={post.image} alt={post.title} />
            </Link>
            <div className="card-body">
                <div className="d-block mb-3">
                    {post.topic.map((t, idx) => (
                        <span key={idx}>
                            <Link to={``} className="card-topic small">
                                {t}
                            </Link>
                            {idx < post.topic.length - 1 && <span className="color-pink">, </span>}
                        </span>
                    ))}
                </div>
                {/* Title to details page link */}
                <Link to={`/blog/${post.id}`} className="card-title pink-hover-effect h4 fw-bolder d-block">
                    {post.title}
                </Link>
                <p className="card-text small fw-medium mt-3">{post.shortDescription}</p>
                <div className="d-flex gap-3 small mb-3">
                    <span className="d-inline-flex align-items-center gap-1">
                        <i className="fa-solid fa-user icon-hover-effect"></i>
                        <a href="">{post.name}</a>
                    </span>
                    <span className="d-inline-flex align-items-center gap-1">
                        <i className="fa-regular fa-clock icon-hover-effect"></i>
                        <a href="">{post.date}</a>
                    </span>
                </div>
            </div>
        </div>
    );
}