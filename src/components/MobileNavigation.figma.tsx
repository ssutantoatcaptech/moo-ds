import figma from "@figma/code-connect"
import MobileNavigation from "./MobileNavigation"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8030-9420",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "default",
        Menu: "menu",
        Coverage: "coverage",
        Leave: "leave",
        Dental: "dental",
      }),
    },
    example: (props) => (
      <MobileNavigation variant={props.variant} />
    ),
  }
)
