import { ADVANTAGES } from "@/lib/constants";

export const WhyChoose = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display-lg text-headline-lg text-primary mb-4">Why GiraHomes?</h2>
          <p className="font-body-md text-slate-500">We are committed to providing the most transparent and reliable real estate experience in Rwanda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ADVANTAGES.map((item) => (
            <div 
              key={item.title} 
              className="text-center p-8 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-3">{item.title}</h3>
              <p className="text-slate-500 font-body-md">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
