import { atom } from "recoil";
import { TDataCardDashboard } from "./types";

export const cardDashboardData = atom<TDataCardDashboard[]>({
  key: "data-card-dashboard",
  default: [
    {
      icon: "/assets/dashboard/feature-icon/ai-automation.svg",
      title: "AI Automation",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-document-verification.svg",
      title: "AI Document Verification",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-location-movement.svg",
      title: "AI Location and Movement",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-capacity-earning-power.svg",
      title: "AI Capacity and Earning Power",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-capital-strength-analysis.svg",
      title: "AI Capital Strength and Analysis",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-collateral-guarantee.svg",
      title: "AI Collateral and Guarantee",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-condition-analysis.svg",
      title: "AI Condition Analysis",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-digital-footprint.svg",
      title: "AI Digital Footprint",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-character-analysis.svg",
      title: "AI Character Analysis",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-identity-scoring.svg",
      title: "AI Identity Scoring",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-character-scoring.svg",
      title: "AI Character Scoring",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-capability-scoring.svg",
      title: "AI Capability Scoring",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-credit-scoring.svg",
      title: "AI Credit Scoring",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-constraint-analysis.svg",
      title: "AI Constraint Analysis",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-legal-permit-analysis.svg",
      title: "AI Legal and Permit Analysis",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/feature-icon/ai-credit-need-purpose.svg",
      title: "AI Credit Need and Purpose",
      bgButton: "bg-warning-300",
    },
  ],
});
