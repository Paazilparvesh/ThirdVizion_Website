import digi from "/src/assets/digiservics/Digital_Marketing_Scene_Generation.mp4";

function Digilan() {
    return (
        <>
            {/* HERO SECTION */}
            <div className="bg-black text-white py-24">
                <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">
                        <h1
                            className="text-5xl leading-tight"
                            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
                        >
                            Bringing innovative <br />
                            <span style={{ color: "#EF00F3" }}>Digital Marketing</span> <br />
                            <span style={{ color: "#EF00F3" }}>solutions.</span>
                        </h1>

                        <p
                            className="text-gray-400 text-sm max-w-md"
                            style={{ fontFamily: "anta, sans-serif" }}
                        >
                            We specialize in turning businesses into digital success stories.
                            From SEO to social media management,
                            we provide strategies that deliver measurable growth.
                        </p>

                        <button
                            className="custom-button text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all"
                            style={{ fontFamily: "anta, sans-serif" }}
                        >
                            Get Started <span className="text-xl">→</span>
                        </button>

                        {/* Stats */}
                        <div className="flex gap-12 pt-8">
                            <div>
                                <h3
                                    className="text-5xl font-bold"
                                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                                >
                                    400+
                                </h3>
                                <p
                                    className="text-sm text-gray-400"
                                    style={{ fontFamily: "anta, sans-serif" }}
                                >
                                    Total Projects
                                </p>
                            </div>
                            <div>
                                <h3
                                    className="text-5xl font-bold"
                                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                                >
                                    100M+
                                </h3>
                                <p
                                    className="text-sm text-gray-400"
                                    style={{ fontFamily: "anta, sans-serif" }}
                                >
                                    Investment
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – VIDEO WITH MULTI-BORDER FRAME */}
                    <div className="flex justify-center">
                        <div className="frame-outer">
                            <div className="frame-mid">
                                <div className="frame-inner">
                                    <video
                                        src={digi}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="video-box"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
                .frame-outer {
                    padding: 10px;
                    border-radius: 24px;
                    background: linear-gradient(135deg, #ffffff, #444);
                }
                .frame-mid {
                    padding: 10px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #1e3a8a, #2563eb);
                }
                .frame-inner {
                    padding: 10px;
                    border-radius: 16px;
                    background: #000;
                }

                /* CUSTOM BUTTON WITH #EF00F3 COLOR */
                .custom-button {
                    background-color: #EF00F3;
                    border: none;
                    cursor: pointer;
                }

                .custom-button:hover {
                    background-color: #d000db;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(239, 0, 243, 0.3);
                }

                /* VIDEO SIZE CONTROL - INCREASED HEIGHT & WIDTH */
                .video-box {
                    width: 100%;
                    max-width: 600px;
                    height: 450px;
                    border-radius: 14px;
                    object-fit: cover;
                    display: block;
                }

                @media (max-width: 1024px) {
                    .video-box {
                        max-width: 500px;
                        height: 380px;
                    }
                }

                @media (max-width: 768px) {
                    .video-box {
                        max-width: 400px;
                        height: 320px;
                    }
                }

                @media (max-width: 480px) {
                    .video-box {
                        max-width: 340px;
                        height: 280px;
                    }
                }
            `}</style>
        </>
    );
}

export default Digilan;
