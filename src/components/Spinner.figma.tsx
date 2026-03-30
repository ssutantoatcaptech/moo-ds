import figma from "@figma/code-connect"
import Spinner from "./Spinner"

// Figma: Member Experience Design System — Spinner
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      size: figma.enum("Size", {
        Tiny: "tiny",
        "Extra Small": "extra-small",
        Small: "small",
        Medium: "medium",
        Large: "large",
        "Extra Large": "extra-large",
        Huge: "huge",
      }),
      labelPosition: figma.enum("Label Position", {
        Above: "above",
        Below: "below",
        Before: "before",
        After: "after",
      }),
    },
    example: (props) => (
      <Spinner
        size={props.size}
        label="Loading..."
        labelPosition={props.labelPosition}
      />
    ),
  }
)
