import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
}

export const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg group">
      <div className="col-span-4 md:col-span-3 row-span-2 relative overflow-hidden">
        <Image
          src={images[0]}
          alt="Luxury Villa"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="hidden md:block col-span-1 row-span-1 overflow-hidden relative">
        <Image
          src={images[1]}
          alt="Interior"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden">
        <Image
          src={images[2]}
          alt="Bedroom"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
          <span className="text-white font-label-md">+12 Photos</span>
        </div>
      </div>
    </div>
  );
};
