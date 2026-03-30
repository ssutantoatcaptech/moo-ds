import figma from "@figma/code-connect"
import CalloutCard from "./CalloutCard"

// Figma: Member Experience Design System — CalloutCard
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=8089-1607
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8089-1607",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        "Quick Actions": "quickActions",
      }),
    },
    example: (props) => (
      <CalloutCard
        variant={props.variant}
        title="Callout Title"
        description="Callout description text goes here."
      />
    ),
  }
)
