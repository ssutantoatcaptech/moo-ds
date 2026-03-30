import figma from "@figma/code-connect"
import Select from "./Select"

// Figma: Member Experience Design System — Select
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Select
        label="Field Label"
        placeholder="Select an option"
        hint="Helper text"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        disabled={props.disabled}
      />
    ),
  }
)
