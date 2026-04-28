export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Area {
  name: string;
  listingsCount: number;
  image: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: string;
}
