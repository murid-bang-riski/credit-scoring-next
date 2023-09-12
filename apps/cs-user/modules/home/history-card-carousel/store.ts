import { atom } from "recoil";
import { TDataCardDashboard } from "./types";

export const cardDashboardData = atom<TDataCardDashboard[]>({
  key: "data-card-dashboard",
  default: [
    {
      icon: "/assets/dashboard/card1.svg",
      title: "AI Automation",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/dashboard/card2.svg",
      title: "AI Document Verification",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/card3.svg",
      title: "AI Location and Movement",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/card4.svg",
      title: "AI Capacity and Earning Power",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/card5.svg",
      title: "AI Capital Strength and Analysis",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/card6.svg",
      title: "AI Collateral and Guarantee",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/card7.svg",
      title: "AI Condition Analysis",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/card8.svg",
      title: "AI Digital Footprint",
      bgButton: "bg-purple-500",
    },
  ],
});
