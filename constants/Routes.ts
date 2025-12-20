import Ionicons from "@expo/vector-icons/Ionicons";

interface MenuRoute {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}
export const menuRoutes: MenuRoute[] = [
  {
    title: "Pull to refresh",
    icon: "refresh-outline",
    name: "pull-to-refresh/index",
  },
  {
    title: "Section List",
    icon: "list-outline",
    name: "section-list/index",
  },
  {
    title: "Modal",
    icon: "copy-outline",
    name: "modal",
  },
  {
    title: "InfiniteScroll",
    icon: "download-outline",
    name: "infinite-scroll/index",
  },
  {
    title: "Slides",
    icon: "flower-outline",
    name: "slides/index",
  },
  {
    title: "Carousel",
    icon: "flask-outline",
    name: "carousel/index",
  },
];

export const uiMenuRoutes: MenuRoute[] = [
  {
    title: "Buttons",
    icon: "radio-button-on-outline",
    name: "button/index",
  },
  {
    title: "Pills",
    icon: "pin-outline",
    name: "pills/index",
  },
  {
    title: "Switches",
    icon: "toggle-outline",
    name: "switches/index",
  },
  {
    title: "Alerts",
    icon: "alert-circle-outline",
    name: "alerts/index",
  },
  {
    title: "TextInputs",
    icon: "document-text-outline",
    name: "text-inputs/index",
  },
  {
    title: "Charts",
    icon: "pie-chart-outline",
    name: "charts/index",
  },
];

export const animationMenuRoutes: MenuRoute[] = [
  {
    title: "Animation 101",
    icon: "albums-outline",
    name: "animation-101/index",
  },
  {
    title: "Animation 102",
    icon: "albums-outline",
    name: "animation-102/index",
  },
  {
    title: "Animation 103",
    icon: "albums-outline",
    name: "animation-103/index",
  },
];

export const authRoutes: MenuRoute[] = [
  {
    title: "auth 101",
    icon: "folder-open-outline",
    name: "auth-101/index",
  },
  {
    title: "auth 102",
    icon: "log-in-outline",
    name: "auth-102/index",
  },
  {
    title: "auth 103",
    icon: "send-outline",
    name: "auth-103/index",
  },
];

export const allRoutes = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
  ...authRoutes,
];
