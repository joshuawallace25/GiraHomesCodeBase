import Image from "next/image";
import Link from "next/link";
import { Property } from "@/features/property/property.types";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export const PropertyCard = ({ property, className }: PropertyCardProps) => {
  return (
    <Link 
      href={`/property/${property.id}`}
      className={cn(
        "group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:scale-[1.01] transition-all duration-300 block",
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image 
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-caption font-bold">
            Featured
          </div>
        )}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
        </button>
      </div>
      
      <div className="p-6">
        <p className="text-primary font-display-lg text-xl mb-1">
          ${property.price.toLocaleString()}
        </p>
        <h3 className="font-headline-md text-lg text-slate-900 mb-2 truncate">
          {property.title}
        </h3>
        <p className="flex items-center text-slate-400 text-caption mb-4">
          <span className="material-symbols-outlined text-sm mr-1">location_on</span> 
          {property.location}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1 text-slate-500 text-caption">
            <span className="material-symbols-outlined text-lg">bed</span> {property.beds}
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-caption">
            <span className="material-symbols-outlined text-lg">bathtub</span> {property.baths}
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-caption">
            <span className="material-symbols-outlined text-lg">square_foot</span> {property.sqm}m²
          </div>
        </div>
      </div>
    </Link>
  );
};
