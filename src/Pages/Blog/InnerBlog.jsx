import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const API_URL = "https://thirdvizion.com/api/blogs";
const STRAPI_BASE_URL = "https://thirdvizion.com";

function InnerBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        // ✅ CORRECT STRAPI QUERY (FILTER BY ID)
        const response = await fetch(
          `${API_URL}?filters[id][$eq]=${id}&populate=*`
        );

        if (!response.ok) {
          throw new Error("API error");
        }

        const result = await response.json();
        console.log("STRAPI RESPONSE 👉", result);

        // ✅ data is ARRAY
        if (result.data && result.data.length > 0) {
          const blogData = result.data[0];

          const formattedBlog = {
            id: blogData.id,
            title: blogData.blog_name || "Untitled Blog",
            content: blogData.blog_desc || "Content coming soon...",
            images:
              blogData.blog_img?.map(
                (img) => `${STRAPI_BASE_URL}${img.url}`
              ) || [],
          };

          setBlog(formattedBlog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl text-orange-500 mb-4">
          {error || "Blog not found"}
        </h1>
        <Link to="/" className="text-orange-400 underline">
          ← Back to blogs
        </Link>
      </div>
    );
  }

  /* ================= SLIDER CONTROLS ================= */
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === blog.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? blog.images.length - 1 : prev - 1
    );
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">

        <Link to="/" className="text-orange-400 mb-6 inline-block">
          ← Back to all blogs
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-orange-500">
          {blog.title}
        </h1>

        {/* IMAGE SLIDER */}
        {blog.images.length > 0 && (
          <div className="relative mb-10">
            <img
              src={blog.images[currentIndex]}
              alt="blog"
              className="w-full h-[450px] object-cover rounded-xl"
              onError={(e) => {
                e.target.src = "/placeholder-hero.jpg";
              }}
            />

            {blog.images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
                >
                  ◀
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
                >
                  ▶
                </button>
              </>
            )}
          </div>
        )}

        {/* BLOG CONTENT */}
        <div className="bg-gray-900/50 p-6 rounded-xl">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>

      </div>
    </div>
  );
}

export default InnerBlog;
