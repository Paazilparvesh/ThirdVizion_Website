import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function InnerBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs?populate=*`);
        const result = await response.json();
        
        // Find the specific blog by documentId
        const foundBlog = result.data.find((b) => b.documentId === id);
        
        if (foundBlog) {
          const transformedBlog = {
            id: foundBlog.documentId,
            title: foundBlog.blog_name,
            fullDescription: foundBlog.blog_desc,
            videoLink: foundBlog.video_link,
            HeroImage: `http://localhost:1337${foundBlog.blog_img.url}`,
            createdAt: foundBlog.createdAt,
          };
          setBlog(transformedBlog);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#FF700A] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center mt-10 text-gray-500">
          <p className="text-xl">Blog not found</p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    );
  }

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  // Item variants for individual elements
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10" style={{ fontFamily: "anta, sans-serif" }}>
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Hero Image - First */}
        <motion.div
          className="w-full mb-10"
          variants={itemVariants}
        >
          <img
            src={blog.HeroImage}
            alt={blog.title}
            className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover border-2 border-gray-800"
          />
        </motion.div>

        {/* 2. Blog Title - Second */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#FF700A] via-orange-400 to-yellow-400 bg-clip-text text-transparent px-4"
          style={{ fontFamily: "anta, sans-serif" }}
          variants={itemVariants}
        >
          {blog.title}
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-[#FF700A] to-orange-400 rounded-full mb-10"
          variants={itemVariants}
        />

        {/* 3. Full Description - Third */}
        <motion.div
          className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl"
          variants={itemVariants}
        >
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 whitespace-pre-line text-justify"
            style={{ fontFamily: "anta, sans-serif" }}
          >
            {blog.fullDescription}
          </p>
        </motion.div>

        {/* 4. Video Embed (if available) - Fourth */}
        {blog.videoLink && (
          <motion.div
            className="w-full max-w-4xl mt-12"
            variants={itemVariants}
          >
            <h2 
              className="text-2xl md:text-3xl font-bold text-orange-400 mb-6 text-center"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              Watch Video
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
              <iframe
                src={blog.videoLink.replace("youtube.com/shorts/", "youtube.com/embed/").replace("?si=", "?autoplay=0&si=")}
                title={blog.title}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
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
      </motion.div>

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
    </div>
  );
}

export default InnerBlog;
