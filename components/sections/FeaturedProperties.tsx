import Link from "next/link";
import { PropertyCard } from "@/components/property/PropertyCard";
import { FEATURED_PROPERTIES } from "@/lib/constants";

export const FeaturedProperties = () => {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Featured Properties</h2>
          <p className="font-body-md text-slate-500">Hand-picked premium listings in the heart of the city.</p>
        </div>
        <Link 
          href="#" 
          className="text-primary font-bold flex items-center gap-1 hover:underline underline-offset-4"
        >
          View all listings <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURED_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};
