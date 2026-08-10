import Header from "./components/Header";
import BlogGrid from "./components/BlogGrid";
import blogCardData from "./data/blogCardData";

export default function App() {
  return (
    <>
      <Header title="Famous Blog Template" />
      <BlogGrid posts={blogCardData} />
    </>
  );
}