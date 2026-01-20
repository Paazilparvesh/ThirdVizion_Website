import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VITE_API_URL = "https://thirdvizion.com/api/blogs";

function InnerBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch single blog by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${VITE_API_URL}/${id}?populate=*`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.data) {
          const blogData = data.data;
          // Transform API data
          const transformedBlog = {
            id: blogData.id,
            title: blogData.blog_name || 'Untitled Blog',
            description: blogData.blog_desc || 'No description available',
            heroImage: blogData.blog_img?.[0]?.url || '/placeholder-hero.jpg',
            sectionImages: blogData.blog_img?.slice(1).map(img => img.url) || [],
            innerContent: blogData.blog_desc || 'Content coming soon...',
            // Include all images for carousel
            allImages: blogData.blog_img?.map(img => img.url) || []
          };
          setBlog(transformedBlog);
        } else {
          setError('Blog not found');
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog. Please try again later.');
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const nextSlide = () => {
    if (blog?.allImages?.length) {
      setCurrentIndex((prev) => (prev + 1) % blog.allImages.length);
    }
  };

  const prevSlide = () => {
    if (blog?.allImages?.length) {
      setCurrentIndex((prev) =>
        prev === 0 ? blog.allImages.length - 1 : prev - 1
      );
    }
  };

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
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl mb-6"
        >
          😕
        </motion.div>
        <h1 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
          {error || 'Blog Not Found'}
        </h1>
        <p className="text-gray-300 text-center mb-8 max-w-md">
          The blog you're looking for doesn't exist or couldn't be loaded.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-[#FF700A] to-orange-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
        >
          ← Back to Blogs
        </motion.a>
      </div>
    );
  }


  /* ================= UI ================= */
  return (
    <motion.div 
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF700A]/10 to-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#FF700A]/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10" style={{ fontFamily: "Outfit, sans-serif" }}>
        {/* Back Button */}
        <motion.a
          href="/"
          whileHover={{ x: -5 }}
          className="inline-flex items-center text-[#FF700A] mb-8 hover:text-orange-400 transition-colors"
        >
          ← Back to all blogs
        </motion.a>

        {/* Blog Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF700A] via-orange-400 to-yellow-400 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {blog.title}
        </motion.h1>

        {/* Metadata */}
        <motion.div 
          className="flex items-center text-gray-400 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-[#FF700A] rounded-full mr-2" />
          <span>Blog ID: {blog.id}</span>
        </motion.div>

        {/* Carousel */}
        {blog.allImages && blog.allImages.length > 0 && (
          <motion.div 
            className="relative mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
              <motion.img
                key={currentIndex}
                src={blog.allImages[currentIndex]}
                alt={`${blog.title} - Image ${currentIndex + 1}`}
                className="w-full h-[400px] md:h-[500px] object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Carousel Controls */}
              {blog.allImages.length > 1 && (
                <>
                  <motion.button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm border border-gray-600/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous image"
                  >
                    ◀
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm border border-gray-600/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next image"
                  >
                    ▶
                  </motion.button>
                  
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {blog.allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'bg-[#FF700A] w-6' 
                            : 'bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-gray-600/50">
                    {currentIndex + 1} / {blog.allImages.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* 5. Metadata Section - Fifth */}
        <motion.div
          className="w-full max-w-4xl mt-12 flex flex-wrap items-center justify-between gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span style={{ fontFamily: "anta, sans-serif" }}>
              {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          
          <div className="flex gap-4">
            {/* Share buttons placeholder */}
            <button className="text-gray-400 hover:text-[#FF700A] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* 6. Back Button - Sixth */}
        <motion.div
          className="mt-16 mb-10"
          variants={itemVariants}
        >
          <a
            href="/blogs"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF700A] to-orange-400 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            style={{ fontFamily: "anta, sans-serif" }}
          >
            <svg 
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </a>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-[#FF700A] to-purple-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-[#FF700A] to-blue-600 rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
    
  );
}

export default InnerBlog;