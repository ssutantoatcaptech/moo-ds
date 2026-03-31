import figma from "@figma/code-connect"
import BrandHeader from "./BrandHeader"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8072-3147",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "default",
        "Co-Branded": "coBranded",
      }),
    },
    example: (props) => (
      <BrandHeader variant={props.variant} />
    ),
  }
)
