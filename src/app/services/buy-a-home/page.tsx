import type { Metadata } from "next";
import PlanningPage from "@/components/PlanningPage";
export const metadata: Metadata = {
  title: "Plan Your Home Purchase",
  description:
    "Discuss a Maryland home purchase with Jack Deeds, CPA. Start with budget, condition, priorities, and timing.",
  alternates: { canonical: "/services/buy-a-home" },
};
export default function Buy() {
  return (
    <PlanningPage
      intent="Buy"
      eyebrow="Buying a home in Maryland"
      title="Look beyond the listing."
      intro="A home needs to fit your life and your finances. Talk through the purchase, the property's condition, and the work you might want to take on before deciding where to focus."
      image="/bethesdy.jpg"
      imageAlt="Homes and tree-lined neighborhoods in Maryland"
      steps={[
        {
          title: "Define the priorities",
          body: "Location, space, accessibility, timing, and the features that matter most. Separate essential needs from preferences.",
        },
        {
          title: "Consider the full cost",
          body: "Discuss the purchase budget alongside ongoing expenses, maintenance, and any planned improvements. Confirm financing with your lender.",
        },
        {
          title: "Choose the next step",
          body: "Discuss the search, property questions, and professional support needed for your specific location and purchase.",
        },
      ]}
      checklist={[
        "Preferred Maryland locations",
        "Your budget and financing progress",
        "Desired timing and flexibility",
        "Space and accessibility needs",
        "Condition and renovation preferences",
        "Questions about the buying process",
      ]}
    />
  );
}
