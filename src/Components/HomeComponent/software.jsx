import bew from "/src/assets/home/web.png"
import nop from "/src/assets/home/pon.png"
import mag from "/src/assets/home/gam.png"
function Software() {
  return (
    <div className="h-auto bg-black text-center py-16 px-6">
      {/* Title */}
     <h1 className="bg-black text-[#323232]  p-5 text-center text-4xl font-medium tracking-wider">
        SOFTWARE DEVLOPMENT 
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Website Card */}
        <div className="md:row-span-2 relative rounded-2xl overflow-hidden">
          <img
            src={bew}
            alt="Website"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="text-white text-2xl font-semibold">WEBSITE</h2>
          </div>
          
        </div>

        {/* Application Card */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={nop}
            alt="Application"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="text-white text-2xl font-semibold">APPLICATION</h2>
          </div>
        </div>

        {/* Game Card */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={mag}
            alt="Game"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="text-white text-2xl font-semibold">GAME</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;
