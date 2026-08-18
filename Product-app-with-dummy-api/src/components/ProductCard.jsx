import { Link } from "react-router-dom"

export default function ProductCard(props) {
    const post = props.post;

    return (
        <div className="card product-card-shadow h-100 border-0 rounded-0">
            <Link to={`/product/${post.id}`}>
                <img className="product-card-image w-100 rounded-0" src={post.image} alt={post.title} />
            </Link>
            <div className="card-body">
                <div className="d-block mb-3">

                    {/* links to another page currently not needed */}
                    <Link to={``} className="card-topic small">
                        {post.topic}
                    </Link>
                </div>
                {/* Title to details page link */}
                <Link to={`/product/${post.id}`} className="card-title product-card-title pink-hover-effect h4 fw-bolder d-block">
                    {post.title}
                </Link>
                <p className="card-text small fw-medium mt-3">{post.shortDescription}</p>
                <div className="d-flex justify-content-between gap-3 small mb-3">

                    {/* seller info */}
                    <span className="d-inline-flex align-items-center gap-1">
                        <i className="fa-solid fa-user icon-hover-effect"></i>
                        <a href="">{post.name}</a>
                    </span>
                    {/* publish date */}
                    <span className="d-inline-flex align-items-center gap-1">
                        <i className="fa-solid fa-star icon-hover-effect"></i>
                        <a href="">{post.rating}</a>
                    </span>
                </div>
            </div>
        </div>
    );
}