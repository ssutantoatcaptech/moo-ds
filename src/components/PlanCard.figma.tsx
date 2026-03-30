import figma from "@figma/code-connect"
import PlanCard from "./PlanCard"

// Figma: Member Experience Design System — PlanCard
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {},
    example: () => (
      <PlanCard
        planName="Health Plan"
        planSubtitle="PPO Gold"
        description="Your health insurance coverage details."
        progressLabel="Deductible"
        progressValue={750}
        progressMax={2000}
        infoRows={[
          { label: "Effective Date", value: "01/01/2025" },
          { label: "Group Number", value: "G-00001" },
        ]}
      />
    ),
  }
)
