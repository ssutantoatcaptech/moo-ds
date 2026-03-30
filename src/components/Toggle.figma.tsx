import figma from "@figma/code-connect"
import Toggle from "./Toggle"

// Figma: Member Experience Design System — Toggle
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      labelPosition: figma.enum("Label Position", {
        Before: "before",
        After: "after",
      }),
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Toggle
        label="Toggle label"
        labelPosition={props.labelPosition}
        disabled={props.disabled}
      />
    ),
  }
)
