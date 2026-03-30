import figma from "@figma/code-connect"
import Input from "./Input"

// Figma: Member Experience Design System — Input
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Input
        label="Field Label"
        placeholder="Enter value"
        hint="Helper text"
        disabled={props.disabled}
      />
    ),
  }
)
