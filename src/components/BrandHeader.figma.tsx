import figma from "@figma/code-connect"
import BrandHeader from "./BrandHeader"

// Figma: Member Experience Design System — BrandHeader
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        "Co-Branded": "coBranded",
      }),
    },
    example: (props) => (
      <BrandHeader variant={props.variant} />
    ),
  }
)
