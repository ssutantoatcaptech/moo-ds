import figma from "@figma/code-connect"
import Badge from "./Badge"

// Figma: Member Experience Design System — Badge
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      color: figma.enum("Color", {
        Brand: "brand",
        Success: "success",
        Warning: "warning",
        Danger: "danger",
        Informative: "informative",
        Subtle: "subtle",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      appearance: figma.enum("Appearance", {
        Filled: "filled",
        Ghost: "ghost",
        Outline: "outline",
        Tint: "tint",
      }),
      shape: figma.enum("Shape", {
        Rounded: "rounded",
        Circular: "circular",
        Square: "square",
      }),
    },
    example: (props) => (
      <Badge
        color={props.color}
        size={props.size}
        appearance={props.appearance}
        shape={props.shape}
      >
        Badge
      </Badge>
    ),
  }
)
