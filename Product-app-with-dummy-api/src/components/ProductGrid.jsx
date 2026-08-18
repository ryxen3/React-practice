import ProductCard from "./ProductCard";
import useProductPosts from "../hooks/useProductPosts";

export default function ProductGrid() {
    const { posts } = useProductPosts();

    return (
        <div className="container py-5">

            {/* shows all Productcard posts in a grid */}
            <div className="grid-padding row gx-4 gy-5">
                {posts.map((post) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                            <ProductCard post={post} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}