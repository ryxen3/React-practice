import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlogGrid from "./components/BlogGrid";
import BlogDetail from "./pages/BlogDetail";
import blogCardData from "./data/blogCardData";

export default function App() {
  return (
    <>
      <Header title="Famous Blog Template" />
      <Routes>
        <Route path="/" element={<BlogGrid posts={blogCardData} />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}