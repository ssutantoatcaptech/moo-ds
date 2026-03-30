import figma from "@figma/code-connect"
import GlobalNavigation from "./GlobalNavigation"

// Figma: Member Experience Design System — GlobalNavigation
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      activeTab: figma.enum("Active Tab", {
        Dashboard: "dashboard",
        "My Coverages": "coverages",
        Claims: "claims",
        Leave: "leave",
        Support: "support",
      }),
    },
    example: (props) => (
      <GlobalNavigation
        activeTab={props.activeTab}
        onTabChange={(tab) => console.log(tab)}
        userName="Sarah Johnson"
      />
    ),
  }
)
