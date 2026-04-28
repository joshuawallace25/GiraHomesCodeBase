import Image from "next/image";
import { SearchBar } from "./SearchBar";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRS5bUohnWp3Ro2GqbijM9I1G6U5LT1D2vLdR4XLeYEEBn_lQuziRSoLngk2GwKRSdECxOFAl0lYSLf0ueGwhk4zBgjO0rdIIwwYQrGcG7t_WsuSJRrDD3UZ56Nbj_KXXePA_1i18zD8pFuo6QJa3gfJn7SP1zYO5D5mAoqbjgY1ubJm_w_vliQTxDM_q0j9oWJS66H75YHUHRFwZeZgX0sZixVd_LqN3xaR11xawhl7y-sEKcky8tMVjqsDw2eYT-_YDTVMwz4Ks"
          alt="Luxury modern villa in Kigali"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 text-center text-white w-full">
        <h1 className="font-display-lg text-display-lg md:text-6xl mb-6">
          Find Your Dream Home in Kigali
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-12 max-w-2xl mx-auto">
          Buy, Rent, or Invest in Verified Properties with Rwanda&apos;s most trusted real estate platform.
        </p>
        <SearchBar />
      </div>
    </section>
  );
};
