import Image from "next/image";

export const CTASection = () => {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="relative bg-primary rounded-[40px] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-V_snytjmtm1GOc57fAxKfzQUa0wCk8sgXCmXlVfQLeQi_wSTjtz6xfz5VduElkckSlb_VUX8Y4XIx01I0qAAtLwzCjIzs7vU1UmvmoDElVtV8UdJNHrV8BYHf8joYGC-jZtetVLoppWSTRMrVy-p2x8VQNSktg97pVLKjxGx7BPQYRM4nRmW69Uogl-bGenDdsPQlLjYx00VLmPT7tX5qx1HHs6n55VenzarGZuzq9-KeROUCBLOxj0sHHBODW5P_HzHT0k4HWM"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-xl text-white">
          <h2 className="font-display-lg text-4xl mb-4">List Your Property Today</h2>
          <p className="text-white/70 text-lg mb-8">Reach thousands of potential buyers and renters looking for their next home in Kigali. Professional photography included.</p>
          <button className="bg-secondary-container text-on-secondary-fixed font-bold px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all text-lg">
            Post a Listing
          </button>
        </div>
        
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-white">
            <p className="text-3xl font-bold mb-1">5k+</p>
            <p className="text-white/60 text-caption">Monthly Visitors</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-white">
            <p className="text-3xl font-bold mb-1">100+</p>
            <p className="text-white/60 text-caption">Homes Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
};
