import Image from "next/image";
import { NEW_DEVELOPMENTS } from "@/lib/constants";

export const NewDevelopments = () => {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-display-lg text-headline-lg text-white mb-2">New Developments</h2>
            <p className="font-body-md text-white/60">Upcoming high-end architectural projects in Rwanda.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-8 pb-8 hide-scrollbar">
          {NEW_DEVELOPMENTS.map((dev) => (
            <div 
              key={dev.id} 
              className="flex-none w-[350px] md:w-[450px] bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 group"
            >
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-secondary-fixed text-caption font-bold uppercase tracking-widest">
                  {dev.status}
                </span>
                <h3 className="text-white font-headline-lg text-2xl mt-2 mb-4">{dev.title}</h3>
                <p className="text-white/60 text-body-md line-clamp-2">{dev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
