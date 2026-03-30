import figma from "@figma/code-connect"
import InputLabel from "./InputLabel"

// Figma: Member Experience Design System — InputLabel
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      required: figma.boolean("Required"),
      info: figma.boolean("Info"),
    },
    example: (props) => (
      <InputLabel
        label="Input Label"
        required={props.required}
        info={props.info}
      />
    ),
  }
)
