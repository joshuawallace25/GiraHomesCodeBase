import { NavItem, Area, Advantage } from "@/types";
import { Property, Development } from "@/features/property/property.types";

export const NAV_LINKS: NavItem[] = [
  { label: "Listings", href: "#", active: true },
  { label: "Agents", href: "#" },
  { label: "About", href: "#" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Listings", href: "#" },
  { label: "Agents", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies Policy", href: "#" },
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Hilltop Serenity Villa",
    price: 450000,
    location: "Nyarutarama, Kigali",
    type: "Villa",
    beds: 4,
    baths: 3,
    sqm: 320,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdXtxV6L1J3ggOQx-2snWrESUzP7DDrxsDEmozl9JaFhE3wAY1R-pN_f7GMUcPjXDfM_DG3_7xwW-0_igEQb9FOWfrlngC9Lu_cwZuV2q3BAS6QhaRSbQtkMoQVnpVU12mPm_ZfDbiA1lWdxVEXQS6kt570tcBjuXSC4cqe9nB7OiU8g4hSyxlJCgvEurCoR4AVIYHI6ObB4nrdAIX3TJmirmN6_1EZ_95fYcekVQVuLs-8XylbOVyhsMKvCxXzB8RAlJEsz2ZY9E",
    featured: true,
  },
  {
    id: "2",
    title: "The Emerald Heights",
    price: 280000,
    location: "Kacyiru, Kigali",
    type: "Apartment",
    beds: 2,
    baths: 2,
    sqm: 145,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4P8OUkaxT2SEQyFlo9COrtm8Hbu4uVKUSfKen2Hc4FpuIW3fzW_pX0f-Z8lTRpM-nEp5gBnNLjNzVD-f-aUdovJaEh4RRs3IY5Xh-yhK-yUK65WOFZMSQcWHQ5TxXAD5pVne7YQJP0JaUXdKRqIyFhCC72SGGVLjV0cl60qeWy0ePQFviXA7OX8bAXLJw8SLTGJk8_M8GVNvixLnPDp9-k646CcVkkOk1LiDev4cFO80EFA0MYPRsWitIKJbIQcCWQf1XhrKZ6TY",
    featured: true,
  },
  {
    id: "3",
    title: "Rebero Horizon Estate",
    price: 620000,
    location: "Rebero, Kigali",
    type: "Villa",
    beds: 5,
    baths: 4,
    sqm: 450,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoiPjpOf45uLu1PgzGBy7rbz24dnCUmpuRwNYzNlqv-o8rGgEK0PuVNqdb4Vem2_o6kCO22PlEGL_iK4jBHIkY5KOALpasGOvv9Sofu0jYqooOrTLzNLNAR-HFbWrg_CqJZDdTRluKD2_dPhvXTFd6WgqLN0IaM4rfFH0SK_tSHEut7BL1LqLjyqlJQNcHtpMkX2E6P0uNo-d06RSyA6OTlZNiHILtfhtzeMm1LKn51hRRS0Lvxv1RNky7mg8k6siB7atzzH6Vh2Q",
    featured: true,
  },
  {
    id: "4",
    title: "Urban Loft Living",
    price: 195000,
    location: "Kimihurura, Kigali",
    type: "Apartment",
    beds: 1,
    baths: 1,
    sqm: 85,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPCWuohHRw3ic9zIud69i1Ar-Y081dPz-mmdu3ADmQRH4XylyADTMLg0efGk_eiqQE-Lx0_BDeLXMlcN8K0glfxu65ME0t7Sz1ZPTd94VQi4zChSzvhefOvI99StcRjkNfgF0tTP0ofur5aYWiAPWYpopMfB0sDbvnoHwWZXoua740FFto5cUeMQxaxCddfCru1kVIUbcjmwVY7ry2tMCWSoYUU1nb_BMuISpI_G72K77n4zxLe5MA5p6f9I3OPtog43XAv22jcTo",
    featured: true,
  },
];

export const NEW_DEVELOPMENTS: Development[] = [
  {
    id: "dev-1",
    title: "Vision Towers II",
    status: "PRE-LAUNCH",
    description: "Ultra-luxury living in the heart of Kigali's business district with 360° city views.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKyRwRq3rCeP_CDJn8xxSTO5bMxys3iU2UhHYgvQsWU9iK0KpQvmqMsGfiQGDm9D3CuO9Ca6JzMmLzLLIi6qzGC62AW9f9eouOP8CA0rgyqNOIo8RZ06BJUMUrXevaRvymPrDtt3-zWpDxxTXU6D3_lftqhiDPMxYckJsiJ3PF1b-VxLOqyV-5wwyR6flDZHEVxHM87FAdZ-ftiBxqE8xbaAupMJySy4GZmQxRzYUzQ5Yzs-E0vVvNWzHaVuIN7PWVOGgnG7NIh3Y",
  },
  {
    id: "dev-2",
    title: "Gisenyi Shores",
    status: "CONSTRUCTION STARTED",
    description: "Exclusive waterfront villas at Lake Kivu designed for the ultimate relaxation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTMDc6AcVnrcP6CRaSAAqUWvpJlnOAPH0tg9uItMSsCJ12RuyMIwk0WThkOG6W0jfMLGDlIxwAKDqVrld5N58aQJbwBthmRqj9QdMN2ZK8KUEbvn6d38K6NQGSu9z_ej3-XxpHBLP429s7Fl0w65Ak_D0xEX9s2iZaGW1G83120t80VRpB3fAq-ICCUIyenyTKBiPFudq2hgVCE6F5kx2CgJzUPYylLF4Rh0lbeEKmfcgrJymbZ_t9uzXMUxgVNUMII1nP-hukbdQ",
  },
  {
    id: "dev-3",
    title: "Eco-Vista Village",
    status: "SELLING FAST",
    description: "Sustainable living community featuring green energy and shared community gardens.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeScaIbAFRjfHCvs1cVs6DCIEL_iNKHb3Eu6vhmcDw4tgeESh6YwriwCD15PnlVepGzH8k4N3GA1vVXyZFxODCzHQ3T5KJ2gbshwveAKcEpQA5AyUsTtWn-qEBjyRbkPE3YTsDoo56iNyqFd1jbiUWCI2WqtWR3lZXTNMn9CqG8JwwGygO5CBVGL2uq_gzKB4wu8ZT9t1dwGESAiO2jeI0Y9b74zvqfifGrUAeZHfsJ_GtZxgrdWyK6mYJu-8I5L-1lXUDDkNTR6s",
  },
];

export const AREAS: Area[] = [
  {
    name: "Nyarutarama",
    listingsCount: 120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxkaDzH3LBMQ8EGnrHecBZK_c6LPaGYNYBmfY9rVmqN2jrd524RwW5dqhOZs8r9TW8E3gW0elpS_1pSW2Juubeg7-U24NpElkTnEp4DhctqTbDM65vn1-eTKNQKz5fExvJRXCjeIe6DQZp8JJwVCfKd4ESt7GP7Nq9ZN_XT1TsUq5f8Ig6nSeD-1qwbqEUwKTtklyl4F2BwBOvmzg19oDeChrsZS5DkfuNMFVZgwi2RvuR1h0u10CYEJrXWnBYeRre6tFduAx8zTc",
  },
  {
    name: "Rebero",
    listingsCount: 85,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCetpxZr_wV-4JyBUJ2lrAUvhYmDmZD71Waj_yF5P8DtWYEEXBWf7z8-gIjCo2MS8RBQqHhHD2jRNx0o7W1DtqZ4WvSyd33qoASF_8Q6YrYQQbmZhAHahUdJ2o2TgtKWYACEdBklUks0jW-a6MBpVfn6Y3ahj816Sjb25nDQ4h6z-gGgT9khpNCJB44IzZr3roc2cmtNHckjnmKtfYBEWZMEdmTa3He11wPiQY1xnYdSleRzhqpdCYo4neR8kACGY7ilMnfEPVQIg0",
  },
  {
    name: "Kacyiru",
    listingsCount: 240,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMjMeAeSpoW9IjA9_z2ckNnC67qIzOuV3btgR4oDzx_MD8JXznx_1VbmFXICdyUsJF2DIVbVtZXX0m-38QZTtV4VMt9_gZs50kKS99aGg6Z-pd9W-Wu8iMK_6trBQ0kzIoRjHTISLvdrectNDGgPbOh0RZsLLDL0LLBbS9dZ7BR4MJ2f1ot235i4M8uI02TufV0XrPP4fIuYtMSe36MVxPXdaCeHWWRgWBgyFX4eqi6NIP3mgBmzgmVw_vwMkdNBeRQ0vnviQNw0A",
  },
  {
    name: "Kimihurura",
    listingsCount: 150,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX-MR7hYGUohM2Xh10AGejYql_cOM_0BU0DBtGk673BKTfHQl9Tr2zr3GR_3Y09InHPov4KeFOYDJ-2G9qCpIRxfbx_SrzKuIZwFwUfgofZsJrKOGRFnZOwzFdNAbIEExrIsXaA46ixb1NHjxUVuMORKqyWeTromkTfVl12FU3kkd-rfY52pvG8xCOSufqaoQm8Yszd7YA9QGYQkQzviClbyVLmW1Qdg7P6kArhp1QCK3RfbnEoVdThrDh-Bz7tyE7fBLRv6phM_I",
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    title: "Verified Listings",
    description: "Every property is physically inspected and document-verified by our specialized team.",
    icon: "verified",
  },
  {
    title: "Trusted Agents",
    description: "Connect with licensed real estate professionals who understand the local market dynamics.",
    icon: "person_pin",
  },
  {
    title: "Secure Transactions",
    description: "End-to-end encrypted communication and legal advisory for worry-free investments.",
    icon: "security",
  },
];
