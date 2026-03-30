import figma from "@figma/code-connect"
import Tag from "./Tag"

// Figma: Member Experience Design System — Tag
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      appearance: figma.enum("Appearance", {
        Filled: "filled",
        Outline: "outline",
        Brand: "brand",
      }),
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Tag
        size={props.size}
        appearance={props.appearance}
        disabled={props.disabled}
        onDismiss={() => {}}
      >
        Tag Label
      </Tag>
    ),
  }
)
