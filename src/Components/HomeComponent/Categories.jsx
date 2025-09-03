import { ArrowUpRight } from "lucide-react";

const capabilitiesData = [
  {
    id: "01/6",
    title: "UI/UX EXCELLENCE",
    desc: "Intuitive designs for seamless digital journeys.",
    children: ["Design Tools", "Layouts", "Components", "User Focus"],
  },
  {
    id: "02/6",
    title: "ENTERPRISE WEB SOLUTIONS",
    desc: "Custom-built, scalable platforms.",
    children: ["E-commerce", "Portals", "Dashboards"],
  },
  {
    id: "03/6",
    title: "CLOUD POWER",
    desc: "Transforming businesses with secure, scalable infrastructure.",
    children: ["AWS", "Azure", "Google Cloud"],
  },
];

export default function Categories() {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
      <div className="space-y-40">
        {capabilitiesData.map((cap, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Sticky Section (Title + Number) with gray background */}
            <div className="md:sticky md:top-20 h-fit bg-gray-300 p-6 rounded-lg">
              <div className="flex items-baseline gap-4">
                <div className="text-5xl md:text-6xl text-black/20 font-bold select-none">
                  {cap.id}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-wide text-black">
                    {cap.title}
                  </h3>
                  <p className="text-gray-800 mt-1 max-w-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Scrollable Child Cards with black background */}
            <div className="space-y-6">
              {cap.children.map((child, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-purple-600/70 cursor-pointer"
                >
                  {/* Top Black Card */}
                  <div className="bg-black border border-gray-700 p-6 flex justify-between items-center rounded-t-lg">
                    <span className="font-medium text-white">{child}</span>
                    <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center">
                      <ArrowUpRight className="text-black w-4 h-4" />
                    </div>
                  </div>

                  {/* Attached Grey Box */}
                  <div className="bg-gray-300 h-24 rounded-b-lg"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}