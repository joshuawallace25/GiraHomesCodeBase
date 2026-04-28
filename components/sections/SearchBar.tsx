export const SearchBar = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-2xl max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
        <div className="flex items-center px-4 border-r border-gray-100">
          <span className="material-symbols-outlined text-primary mr-2">location_on</span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
            <input 
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-semibold placeholder:text-slate-400" 
              placeholder="Kigali, Rwanda" 
              type="text"
            />
          </div>
        </div>
        
        <div className="flex items-center px-4 border-r border-gray-100">
          <span className="material-symbols-outlined text-primary mr-2">home</span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Type</p>
            <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-semibold cursor-pointer">
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center px-4 border-r border-gray-100">
          <span className="material-symbols-outlined text-primary mr-2">payments</span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Price Range</p>
            <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-semibold cursor-pointer">
              <option>$50k - $200k</option>
              <option>$200k - $500k</option>
              <option>$500k+</option>
            </select>
          </div>
        </div>
        
        <button className="bg-secondary-container text-on-secondary-fixed font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-colors">
          <span className="material-symbols-outlined">search</span>
          Search
        </button>
      </div>
    </div>
  );
};
