import figma from "@figma/code-connect"
import InsuranceCard from "./InsuranceCard"

// Figma: Member Experience Design System — InsuranceCard
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      variant: figma.enum("Variant", {
        Front: "front",
        Back: "back",
      }),
    },
    example: (props) => (
      <InsuranceCard
        variant={props.variant}
        memberName="John Doe"
        memberNumber="123456789"
        groupNumber="G-00001"
        planType="PPO"
        groupName="Acme Corporation"
      />
    ),
  }
)
