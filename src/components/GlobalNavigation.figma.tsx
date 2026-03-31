import figma from "@figma/code-connect"
import GlobalNavigation from "./GlobalNavigation"

// Figma: Member Experience Design System — Global Navigation
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=8012-9508
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8012-9508",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "default",
        Claims: "claims",
        Support: "support",
        Coverages: "coverages",
        "Coverages Hover": "coveragesHover",
        Dental: "dental",
        Leave: "leave",
      }),
    },
    example: (props) => (
      <GlobalNavigation
        variant={props.variant}
        userName="Sarah Johnson"
      />
    ),
  }
)
