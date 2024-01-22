import {
  BarChart4,
  BookUser,
  CircleDollarSign,
  Gift,
  Layout,
  Network,
  RefreshCcwDot,
  Settings,
  ShieldCheck,
  ShoppingBasket,
  UserRoundCog,
} from "lucide-react";

export const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Network,
    label: "Marques",
    href: "/dashboard/marques",
  },
  {
    icon: UserRoundCog,
    label: "Admins",
    href: "/dashboard/ad-mins",
  },
];

export const adminRoutes = [
  {
    icon: Gift,
    label: "Produits",
    href: "/dashboard/admin/produits",
  },
  {
    icon: BookUser,
    label: "Revendeurs",
    href: "/dashboard/admin/revendeurs",
  },
  {
    icon: ShoppingBasket,
    label: "Commandes",
    href: "/dashboard/admin/commandes",
  },
  {
    icon: CircleDollarSign,
    label: "Factures",
    href: "/dashboard/admin/factures",
  },
  {
    icon: Settings,
    label: "Équipe",
    href: "/dashboard/admin/equipe",
  },
  {
    icon: RefreshCcwDot,
    label: "Rôles",
    href: "/dashboard/admin/roles",
  },
];
