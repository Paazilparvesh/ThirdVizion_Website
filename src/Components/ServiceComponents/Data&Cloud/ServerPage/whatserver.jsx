
import MonitorIcon from "/src/assets/server/signal-monitor-3d-icon-png-download-13556848.png";
import LockIcon from "/src/assets/server/lock-3d-icon-png-download-4652394.png";
import HardDiskIcon from "/src/assets/server/harddisk-3d-icon-png-download-10896721.png";
import FiveXIcon from "/src/assets/server/5x_converted.png";

// ⭐ New image imports (Why It Matters section)
import UptimeIcon from "/src/assets/server/stacked-boxes-3d-icon-png-download-12030034.png";
import SecurityShieldIcon from "/src/assets/server/shield-3d-icon-png-download-7621436.png";
import CostIcon from "/src/assets/server/money-3d-icon-png-download-10033543.png";
import ScalabilityIcon from "/src/assets/server/clock-3d-icon-png-download-8988740.png";

function Whatserver() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Heading */}
                <h1 
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center mb-6 text-[#05df72]"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                >
                    Server Management Explained
                </h1>

                {/* Subheading */}
                <p 
                    className="text-xl md:text-2xl text-white/70 text-center mb-12 max-w-4xl mx-auto"
                    style={{ fontFamily: "anta, sans-serif" }}
                >
                    Professional server administration that ensures your infrastructure runs smoothly, securely, and efficiently 24/7
                </p>

                {/* Main Content */}
                <div className=" rounded-2xl border border-[#05df72]/30 p-8 md:p-12">

                    {/* Definition */}
                    <div className="text-center mb-10">
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed" style={{ fontFamily: "anta, sans-serif" }}>
                            <span className="font-bold text-[#05df72]">Server Management</span>{" "}
                            is the comprehensive monitoring, maintenance, and optimization of physical or virtual servers to ensure maximum uptime, security, and performance.
                        </p>
                    </div>

                    {/* ⭐ Key Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                        {/* Monitoring */}
                        <div className="group bg-[#05df72]/10 border border-[#05df72]/20 p-6 rounded-xl text-center">
                            <img src={MonitorIcon} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#05df72]" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                Server Monitoring
                            </h3>
                            <p className="text-white/70 text-sm" style={{ fontFamily: "anta, sans-serif" }}>
                                24/7 tracking of CPU, memory, disk space, and network performance
                            </p>
                        </div>

                        {/* Security */}
                        <div className="group bg-[#05df72]/10 border border-[#05df72]/20 p-6 rounded-xl text-center">
                            <img src={LockIcon} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#05df72]" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                Security Management
                            </h3>
                            <p className="text-white/70 text-sm" style={{ fontFamily: "anta, sans-serif" }}>
                                Firewall configuration, intrusion detection & patch updates
                            </p>
                        </div>

                        {/* Backup */}
                        <div className="group bg-[#05df72]/10 border border-[#05df72]/20 p-6 rounded-xl text-center">
                            <img src={HardDiskIcon} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#05df72]" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                Backup & Recovery
                            </h3>
                            <p className="text-white/70 text-sm" style={{ fontFamily: "anta, sans-serif" }}>
                                Automated backups and disaster recovery testing
                            </p>
                        </div>

                        {/* Performance */}
                        <div className="group bg-[#05df72]/10 border border-[#05df72]/20 p-6 rounded-xl text-center">
                            <img src={FiveXIcon} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#05df72]" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                Performance Tuning
                            </h3>
                            <p className="text-white/70 text-sm" style={{ fontFamily: "anta, sans-serif" }}>
                                Optimize server speed, load & resource allocation
                            </p>
                        </div>
                    </div>

                    {/* ⭐ Why It Matters */}
                    <div className="mt-16 pt-10 border-t border-[#05df72]/20">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-10 text-[#05df72]" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                            Why It Matters
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Uptime */}
                            <div className="flex items-start gap-4 bg-[#05df72]/10 p-5 rounded-lg">
                                <img src={UptimeIcon} className="w-12 h-12" />
                                <div>
                                    <h4 className="font-bold text-white text-lg" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                        Maximum Uptime
                                    </h4>
                                    <p className="text-white/70 text-sm">Proactive monitoring eliminates downtime</p>
                                </div>
                            </div>

                            {/* Security */}
                            <div className="flex items-start gap-4 bg-[#05df72]/10 p-5 rounded-lg">
                                <img src={SecurityShieldIcon} className="w-12 h-12" />
                                <div>
                                    <h4 className="font-bold text-white text-lg" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                        Enhanced Security
                                    </h4>
                                    <p className="text-white/70 text-sm">Protects against vulnerabilities & cyber threats</p>
                                </div>
                            </div>

                            {/* Cost */}
                            <div className="flex items-start gap-4 bg-[#05df72]/10 p-5 rounded-lg">
                                <img src={CostIcon} className="w-12 h-12" />
                                <div>
                                    <h4 className="font-bold text-white text-lg" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                        Cost Efficiency
                                    </h4>
                                    <p className="text-white/70 text-sm">Avoid expensive emergency fixes</p>
                                </div>
                            </div>

                            {/* Scalability */}
                            <div className="flex items-start gap-4 bg-[#05df72]/10 p-5 rounded-lg">
                                <img src={ScalabilityIcon} className="w-12 h-12" />
                                <div>
                                    <h4 className="font-bold text-white text-lg" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                        Scalability
                                    </h4>
                                    <p className="text-white/70 text-sm">Grow your infrastructure without issues</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Whatserver;
