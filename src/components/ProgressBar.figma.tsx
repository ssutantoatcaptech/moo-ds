import figma from "@figma/code-connect"
import ProgressBar from "./ProgressBar"

// Figma: Member Experience Design System — ProgressBar
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      thickness: figma.enum("Thickness", {
        Medium: "medium",
        Large: "large",
      }),
      color: figma.enum("Color", {
        Brand: "brand",
        Success: "success",
        Warning: "warning",
        Error: "error",
      }),
    },
    example: (props) => (
      <ProgressBar
        value={65}
        thickness={props.thickness}
        color={props.color}
        label="Progress"
        hint="65%"
      />
    ),
  }
)
