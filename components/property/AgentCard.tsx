import Image from "next/image";

interface AgentCardProps {
  agent: {
    name: string;
    role: string;
    image: string;
    verified: boolean;
  };
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16">
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="rounded-full object-cover border-2 border-primary-fixed"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-headline-md text-primary">{agent.name}</h3>
            {agent.verified && (
              <span className="material-symbols-outlined text-blue-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            )}
          </div>
          <p className="text-caption text-on-surface-variant">{agent.role}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <button className="w-full bg-[#25D366] text-white py-3 rounded-lg font-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
          <span className="material-symbols-outlined">chat</span>
          WhatsApp Agent
        </button>
        <button className="w-full border border-primary text-primary py-3 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-primary/5 active:scale-95 transition-all">
          <span className="material-symbols-outlined">call</span>
          Call Number
        </button>
      </div>
    </div>
  );
};
