import digi from "/src/assets/digiservics/marketingon.png"
import seo from "/src/assets/digiservics/seo.png"
import content from "/src/assets/digiservics/content.png"

function Service() {
    return (
        <>
            <div className="bg-gradient-to-br from-black to-slate-950 py-20 min-h-screen">
                {/* Main Heading */}
                <div className="text-center mb-16 px-4">
                    <h1 
                        className="text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight"
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        ThirdVizion <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">Digital Marketing Services</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light" style={{ fontFamily: "'anta', sans-serif" }}>
                        Transform your brand with cutting-edge digital strategies that drive results
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-8 lg:gap-12 px-4 max-w-7xl mx-auto">
                    
                    <FlipCard 
                        image={content} 
                        label="Content Marketing"
                        title="Strategic Content Marketing"
                        desc="Craft compelling narratives that captivate audiences, boost engagement, and establish your brand as the industry authority through data-driven content strategies."
                    />

                    <FlipCard 
                        image={digi} 
                        label="Digital Marketing"
                        title="Performance Digital Marketing"
                        desc="Execute high-ROI campaigns across multiple channels with precision targeting, real-time optimization, and conversion-focused strategies that scale your business."
                    />

                    <FlipCard 
                        image={seo} 
                        label="SEO Mastery"
                        title="Advanced SEO Solutions"
                        desc="Dominate search rankings with technical SEO, content optimization, and link-building strategies powered by proprietary algorithms and competitor intelligence."
                    />

                </div>
            </div>

            <style jsx>{`
                .flip-card {
                    width: 320px;
                    height: 360px;
                    perspective: 1200px;
                    margin: 0 auto;
                }

                .flip-inner {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transform-style: preserve-3d;
                    position: relative;
                    border-radius: 24px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
                }

                .flip-card:hover .flip-inner {
                    transform: rotateY(180deg);
                }

                .flip-front, .flip-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 24px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                }

                .flip-front {
                    background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
                    border: 1px solid rgba(239, 0, 243, 0.2);
                }

                .flip-front img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.85) contrast(1.1);
                }

                /* Image Label Overlay */
                .image-label {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 20px 16px 16px;
                    background: linear-gradient(transparent 0%, rgba(0,0,0,0.85) 30%);
                    color: #fff;
                    font-size: 20px;
                    font-weight: 700;
                    text-align: center;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
                    font-family: 'DeaconTest', sans-serif;
                    letter-spacing: -0.5px;
                }

                .flip-back {
                    background: linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 50%, #111 100%);
                    background-image: 
                        radial-gradient(circle at 20% 80%, rgba(239,0,243,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(168,85,247,0.1) 0%, transparent 50%);
                    transform: rotateY(180deg);
                    padding: 32px 24px;
                    text-align: center;
                    border: 1px solid rgba(239, 0, 243, 0.3);
                    backdrop-filter: blur(10px);
                }

                .flip-title {
                    font-size: 26px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #EF00F3 0%, #A855F7 50%, #6366F1 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 16px;
                    font-family: 'DeaconTest', sans-serif;
                    letter-spacing: -0.5px;
                    text-shadow: none;
                }

                .flip-desc {
                    font-size: 15px;
                    color: #d1d5db;
                    line-height: 1.65;
                    font-family: 'anta', sans-serif;
                    opacity: 0.95;
                }

                .flip-card:hover .flip-front {
                    filter: brightness(0.7);
                }

                @media (max-width: 640px) {
                    .flip-card {
                        width: 280px;
                        height: 320px;
                    }
                }
            `}</style>
        </>
    );
}

function FlipCard({ image, title, desc, label }) {
    return (
        <div className="flip-card">
            <div className="flip-inner">
                {/* Front Side */}
                <div className="flip-front">
                    <img src={image} alt={label} loading="lazy" />
                    <div className="image-label">{label}</div>
                </div>

                {/* Back Side */}
                <div className="flip-back">
                    <div className="flex flex-col h-full justify-center">
                        <h3 className="flip-title">{title}</h3>
                        <p className="flip-desc">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
