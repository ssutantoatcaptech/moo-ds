import figma from "@figma/code-connect"
import MobileSecondaryNav from "./MobileSecondaryNav"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8026-8566",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "default",
        Hover: "hover",
        Variant3: "selected",
      }),
    },
    example: (props) => (
      <MobileSecondaryNav
        label="Label"
        variant={props.variant}
      />
    ),
  }
)
