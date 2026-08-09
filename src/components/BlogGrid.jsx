import BlogCard from "./BlogCard";

export default function BlogGrid(props) {
    const posts = props.posts;

    return (
        <div className="container py-5">
            <div className="row gx-4 gy-5">
                {posts.map(function (post) {
                    return (
                        <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                            <BlogCard post={post} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}