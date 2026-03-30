import figma from "@figma/code-connect"
import Checkbox from "./Checkbox"

// Figma: Member Experience Design System — Checkbox
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Checkbox
        label="Checkbox label"
        hint="Additional hint text"
        disabled={props.disabled}
      />
    ),
  }
)
