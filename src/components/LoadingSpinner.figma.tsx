import figma from "@figma/code-connect"
import LoadingSpinner from "./LoadingSpinner"

// Figma: Member Experience Design System — LoadingSpinner
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
    },
    example: (props) => (
      <LoadingSpinner size={props.size} />
    ),
  }
)
