import figma from "@figma/code-connect"
import Button from "./Button"

// Figma: Member Experience Design System — Button
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Default: "default",
        Outline: "outline",
        Subtle: "subtle",
        Transparent: "transparent",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      iconPosition: figma.enum("Icon Position", {
        Before: "before",
        After: "after",
      }),
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        iconPosition={props.iconPosition}
        disabled={props.disabled}
      >
        Button Label
      </Button>
    ),
  }
)
