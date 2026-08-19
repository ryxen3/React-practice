export function formatPost(product, user) {
  return {
    id: product.id,
    topic: product.category,
    title: product.title,
    shortDescription: product.description.slice(0, 100) + "...",
    longDescription: product.description,
    name: user ? user.username : "Rafid",
    rating: product.rating.rate,
    ratingCount: product.rating.count,
    image: product.image
  };
}