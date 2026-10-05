import type { Metadata } from "next";
import PlanningPage from "@/components/PlanningPage";
export const metadata: Metadata = {
  title: "Plan Your Home Sale",
  description:
    "Plan a Maryland home sale with Jack Deeds, CPA. Discuss your goals, property condition, presentation, and preparation priorities.",
  alternates: { canonical: "/services/sell-a-home" },
};
export default function Sell() {
  return (
    <PlanningPage
      intent="Sell"
      eyebrow="Selling a home in Maryland"
      title="Prepare for the right next chapter."
      intro="Start with what you want the sale to accomplish. Then work through condition, presentation, timing, and preparation costs so the decisions fit your goals."
      image="/Image.jpg"
      imageAlt="Living room with natural light and uncluttered furnishings"
      steps={[
        {
          title: "Understand the starting point",
          body: "Discuss your property, your timing, and the condition of the home. Identify questions that need a closer look.",
        },
        {
          title: "Prioritize preparation",
          body: "Decide which repairs, presentation changes, and improvements deserve attention. Compare scope and quotes before committing.",
        },
        {
          title: "Plan the market approach",
          body: "Discuss pricing, presentation, and the steps involved in a Maryland sale. Keep the plan connected to your goals and circumstances.",
        },
      ]}
      checklist={[
        "Property address and type",
        "Your preferred timing",
        "Known repairs and improvements",
        "Photos or a walkthrough",
        "Your preparation budget",
        "Plans for your next home",
      ]}
    />
  );
}
