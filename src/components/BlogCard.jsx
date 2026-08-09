export default function BlogCard(props) {
    const post = props.post;

    return (
        <div className="card h-100 border-0 rounded-0 blog-card-shadow">
            <img className="card-img-top rounded-0" src={post.image} alt={post.title} />
            <div className="card-body">
                <div className="d-block mb-3">
                    <a href="" className="card-topic fw-medium small">
                        {post.topic}
                    </a>
                </div>
                <a href="" className="card-title pink-hover-effect h4">{post.title}</a>
                <p className="card-text small fw-medium mt-3">{post.description}</p>
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