import figma from "@figma/code-connect"
import FieldLabel from "./FieldLabel"

// Figma: Member Experience Design System — FieldLabel
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      bold: figma.boolean("Bold"),
      info: figma.boolean("Info"),
      required: figma.boolean("Required"),
    },
    example: (props) => (
      <FieldLabel
        label="Field Label"
        bold={props.bold}
        info={props.info}
        required={props.required}
      />
    ),
  }
)
