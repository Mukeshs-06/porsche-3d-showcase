export interface PaintColor {
  id: string;
  name: string;
  hex: string;
  category: "Metallic" | "Solid" | "Special";
}

export interface SpecItem {
  label: string;
  value: string;
  unit?: string;
  description: string;
}

export const PAINT_COLORS: PaintColor[] = [
  { id: "silver", name: "GT Silver Metallic", hex: "#d1d5db", category: "Metallic" },
  { id: "red", name: "Guards Red", hex: "#dc2626", category: "Solid" },
  { id: "black", name: "Jet Black Metallic", hex: "#18181b", category: "Metallic" },
  { id: "gold", name: "Liquid Metal Gold", hex: "#eab308", category: "Special" },
  { id: "yellow", name: "Racing Yellow", hex: "#facc15", category: "Solid" },
  { id: "blue", name: "Miami Blue", hex: "#0284c7", category: "Special" },
];

export const CALIPER_COLORS = [
  { id: "acid-green", name: "Acid Green (Hybrid)", hex: "#84cc16" },
  { id: "yellow", name: "PCCB Yellow", hex: "#eab308" },
  { id: "black", name: "Gloss Black", hex: "#09090b" },
  { id: "red", name: "Guards Red", hex: "#ef4444" },
];

export const PERFORMANCE_STATS: SpecItem[] = [
  { label: "Acceleration 0-100 km/h", value: "2.6", unit: "sec", description: "Weissach Package launch control" },
  { label: "Top Speed", value: "345", unit: "km/h", description: "Electronically limited track speed" },
  { label: "Max System Output", value: "887", unit: "hp", description: "4.6L V8 + Dual Electric Motors" },
  { label: "Max System Torque", value: "1,280", unit: "Nm", description: "Instant electric torque delivery" },
  { label: "Nürburgring Lap", value: "6:57", unit: "min", description: "First production car under 7 minutes" },
  { label: "Electric Range", value: "31", unit: "km", description: "Zero emission pure electric driving" },
];

export const GALLERY_ITEMS = [
  {
    id: "1",
    title: "Aerodynamic Active Rear Wing",
    category: "Aerodynamics",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-video",
  },
  {
    id: "2",
    title: "Top-Pipe Exhaust Architecture",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-square",
  },
  {
    id: "3",
    title: "Carbon Fiber Monocoque Chassis",
    category: "Structure",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-square",
  },
  {
    id: "4",
    title: "Cockpit & Monocoque Ergonomics",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-video",
  },
];
