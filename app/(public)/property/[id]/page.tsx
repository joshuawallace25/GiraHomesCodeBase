import Link from "next/link";
import { FEATURED_PROPERTIES } from "@/lib/constants";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { AgentCard } from "@/components/property/AgentCard";
import { ContactPanel } from "@/components/property/ContactPanel";
import { PropertyCard } from "@/components/property/PropertyCard";
import { notFound } from "next/navigation";

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = FEATURED_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumb & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-2 text-slate-500 font-caption">
          <span>Kigali</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Gasabo</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">Nyarutarama</span>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[20px]">share</span>
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors text-error">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            Saved
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Left Column (70%) */}
        <div className="lg:w-[70%] space-y-stack-lg">
          {/* Gallery */}
          <PropertyGallery images={[property.image, property.image, property.image]} />

          {/* Title & Price */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h1 className="font-display-lg text-display-lg text-primary mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-body-md">KG 278 St, {property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-caption inline-block mb-2 font-semibold">FOR SALE</div>
              <div className="font-headline-lg text-headline-lg text-secondary">
                ${property.price.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Features Row */}
          <div className="flex flex-wrap gap-8 py-6 border-y border-outline-variant">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">bed</span>
              </div>
              <div>
                <p className="font-caption text-on-surface-variant">Bedrooms</p>
                <p className="font-label-md">{property.beds} Rooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">bathtub</span>
              </div>
              <div>
                <p className="font-caption text-on-surface-variant">Bathrooms</p>
                <p className="font-label-md">{property.baths} Baths</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">square_foot</span>
              </div>
              <div>
                <p className="font-caption text-on-surface-variant">Living Space</p>
                <p className="font-label-md">{property.sqm} m²</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">garage</span>
              </div>
              <div>
                <p className="font-caption text-on-surface-variant">Parking</p>
                <p className="font-label-md">3 Spaces</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-primary">Description</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Experience contemporary living at its finest in this stunning {property.beds}-bedroom villa located in Kigali&apos;s most prestigious neighborhood, Nyarutarama. This architectural masterpiece features soaring high ceilings, expansive glass walls that invite natural light, and a seamless flow between indoor and outdoor living spaces. 
              <br /><br />
              The ground floor offers a gourmet kitchen with built-in European appliances, a spacious dining area, and a grand lounge overlooking the private infinity pool. All four bedrooms are en-suite, featuring custom cabinetry and premium fixtures. The property also includes a separate staff quarters, a backup power system, and advanced security features.
            </p>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-primary">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">pool</span>
                <span className="font-body-md">Infinity Pool</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">outdoor_garden</span>
                <span className="font-body-md">Lush Garden</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">ac_unit</span>
                <span className="font-body-md">Air Conditioning</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">security</span>
                <span className="font-body-md">24/7 Security</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">bolt</span>
                <span className="font-body-md">Power Backup</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">wifi</span>
                <span className="font-body-md">Fiber Internet</span>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-primary">Location</h2>
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-surface-container group">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
              </div>
              <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg font-label-md shadow-lg flex items-center gap-2 hover:bg-surface-container-low transition-colors z-20">
                <span className="material-symbols-outlined">open_in_new</span>
                Open in Maps
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (30%) */}
        <aside className="lg:w-[30%] space-y-stack-lg">
          <div className="sticky top-24 space-y-stack-lg">
            {/* Agent Card */}
            <AgentCard 
              agent={{
                name: "Wallace.",
                role: "Premium Agent at GiraHomes",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDswueJDDsooTR2FdSOlVvd-EtoWt77kvX-aFmH5EG-PchMCnMHv_9vazXmCoubt2G3yKq9KdH0nhjXMShiV8BDdF0CqhSSEO78CDpSbO6wB9NHhLL0xr8KppTeqMtAGBd2GsvKif0Hp-egBCZq-XMfzmF8Lb-JdSTgFS70o-mPvhc1N-9hCQvyVod-8-6LqOEslAOH7jlQzGAYchAYG1I-vY2tF7CNZ4kSwQM-AXVz2Mz9WasmEpPJtXRdhakpap5GPLBcreR9398",
                verified: true
              }}
            />

            {/* Schedule Visit Form */}
            <ContactPanel />

            {/* Market Insights */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 overflow-hidden relative group">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
              <h4 className="font-label-md text-primary mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                Market Analysis
              </h4>
              <p className="text-caption text-on-surface-variant leading-relaxed">
                Property values in Nyarutarama have grown by <span className="text-primary font-bold">12.4%</span> in the last 12 months. This is a high-yield investment opportunity.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar Properties Section */}
      <section className="mt-20 space-y-stack-lg">
        <div className="flex justify-between items-center">
          <h2 className="font-display-lg text-headline-lg text-primary">Similar Properties</h2>
          <Link href="#" className="text-primary font-label-md flex items-center gap-1 hover:gap-2 transition-all">
            View all
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.slice(0, 3).map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
