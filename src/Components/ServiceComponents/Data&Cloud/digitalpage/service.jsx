import digi from "/src/assets/digiservics/marketingon.png"
import seo from "/src/assets/digiservics/seo.png"
import content from "/src/assets/digiservics/content.png"

function Service() {
    return (
        <>
            <div className="bg-black py-20">

                {/* Main Heading */}
                <div className="text-center mb-14">
                    <h1 
                        className="text-5xl text-white"
                        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
                    >
                        ThirdVizion <span className="text-yellow-400">Services</span>
                    </h1>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-10">
                    
                    <FlipCard 
                        image={content} 
                        label="Content Marketing"
                        title="Content Marketing"
                        desc="ThirdVizion provides powerful content marketing strategies to grow your brand visibility and engagement."
                    />

                    <FlipCard 
                        image={digi} 
                        label="Digital Marketing"
                        title="Digital Marketing"
                        desc="ThirdVizion delivers result-driven digital marketing services to increase traffic, leads, and conversions."
                    />

                    <FlipCard 
                        image={seo} 
                        label="SEO Marketing"
                        title="SEO Services"
                        desc="ThirdVizion offers advanced SEO optimization services to improve rankings and organic reach."
                    />

                </div>

                <style jsx>{`
                    .flip-card {
                        width: 300px;
                        height: 300px;
                        perspective: 1000px;
                    }

                    .flip-inner {
                        width: 100%;
                        height: 100%;
                        transition: transform 0.7s ease;
                        transform-style: preserve-3d;
                        position: relative;
                    }

                    .flip-card:hover .flip-inner {
                        transform: rotateY(180deg);
                    }

                    .flip-front, .flip-back {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        backface-visibility: hidden;
                        border-radius: 16px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .flip-front {
                        background: #000;
                    }

                    .flip-front img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    /* Image Label Overlay */
                    .image-label {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        padding: 12px;
                        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                        color: #fff;
                        font-size: 18px;
                        font-weight: 600;
                        text-align: center;
                        font-family: 'DeaconTest', sans-serif;
                    }

                    .flip-back {
                        background: #111;
                        transform: rotateY(180deg);
                        padding: 20px;
                        text-align: center;
                    }

                    .flip-title {
                        font-size: 24px;
                        font-weight: bold;
                        color: #fff;
                        margin-bottom: 10px;
                        font-family: 'DeaconTest', sans-serif;
                    }

                    .flip-desc {
                        font-size: 14px;
                        color: #ccc;
                        line-height: 1.5;
                        font-family: 'anta', sans-serif;
                    }
                `}</style>
            </div>
        </>
    );
}

function FlipCard({ image, title, desc, label }) {
    return (
        <div className="flip-card">
            <div className="flip-inner">

                {/* Front Side */}
                <div className="flip-front">
                    <img src={image} alt={title} />
                    <div className="image-label">{label}</div>
                </div>

                {/* Back Side */}
                <div className="flip-back">
                    <div>
                        <h3 className="flip-title">{title}</h3>
                        <p className="flip-desc">{desc}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Service;
