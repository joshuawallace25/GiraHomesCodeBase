export const ContactPanel = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 space-y-4">
      <h3 className="font-headline-md text-primary">Schedule a Visit</h3>
      <form className="space-y-4">
        <div>
          <label className="font-caption text-on-surface-variant mb-1 block">Your Name</label>
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-body-md" 
            placeholder="John Doe" 
            type="text" 
          />
        </div>
        <div>
          <label className="font-caption text-on-surface-variant mb-1 block">Preferred Date</label>
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-body-md" 
            type="date" 
          />
        </div>
        <div>
          <label className="font-caption text-on-surface-variant mb-1 block">Message (Optional)</label>
          <textarea 
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-body-md h-24" 
            placeholder="I'm interested in viewing this property..."
          ></textarea>
        </div>
        <button className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-label-md hover:bg-secondary/90 active:scale-95 transition-all shadow-md shadow-secondary/20">
          Send Inquiry
        </button>
      </form>
      <p className="text-center font-caption text-on-surface-variant px-4">
        By clicking &quot;Send Inquiry&quot;, you agree to our Terms of Use and Privacy Policy.
      </p>
    </div>
  );
};
