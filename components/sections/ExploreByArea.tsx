import Image from "next/image";
import { AREAS } from "@/lib/constants";

export const ExploreByArea = () => {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-4 md:px-8">
      <h2 className="font-display-lg text-headline-lg text-primary text-center mb-16">
        Explore Kigali’s Best Neighborhoods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {AREAS.map((area) => (
          <div 
            key={area.name} 
            className="relative group cursor-pointer h-80 rounded-3xl overflow-hidden"
          >
            <Image 
              src={area.image}
              alt={area.name}
              fill
              className="absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute bottom-6 left-6">
              <h4 className="text-white font-headline-lg text-xl">{area.name}</h4>
              <p className="text-white/80 text-caption">{area.listingsCount}+ Listings</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
