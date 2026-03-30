import figma from "@figma/code-connect"
import Avatar from "./Avatar"

// Figma: Member Experience Design System — Avatar
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      size: figma.enum("Size", {
        "20": 20,
        "24": 24,
        "28": 28,
        "32": 32,
        "36": 36,
        "40": 40,
        "48": 48,
        "56": 56,
        "64": 64,
        "72": 72,
        "96": 96,
        "120": 120,
      }),
      shape: figma.enum("Shape", {
        Circular: "circular",
        Square: "square",
      }),
      color: figma.enum("Color", {
        Brand: "brand",
        Auto: "auto",
      }),
    },
    example: (props) => (
      <Avatar
        name="Jane Doe"
        size={props.size}
        shape={props.shape}
        color={props.color}
      />
    ),
  }
)
