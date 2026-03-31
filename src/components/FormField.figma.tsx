import figma from "@figma/code-connect"
import FormField from "./FormField"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8021-8813",
  {
    props: {
      fieldState: figma.enum("Property 1", {
        Default: "default",
        Hover: "hover",
        Disabled: "disabled",
        Error: "error",
      }),
    },
    example: (props) => (
      <FormField
        label="Field Label"
        fieldState={props.fieldState}
        placeholder="Search..."
        error="This field is required"
      />
    ),
  }
)
