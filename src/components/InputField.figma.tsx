import figma from "@figma/code-connect"
import InputField from "./InputField"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8026-516",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "default",
        Selected: "selected",
        Disabled: "disabled",
        "No line / Default": "noLineDefault",
        "No line / Selected": "noLineSelected",
        "No line / Disabled": "noLineDisabled",
      }),
    },
    example: (props) => (
      <InputField
        label="Field Label"
        variant={props.variant}
        placeholder="Placeholder"
      />
    ),
  }
)
