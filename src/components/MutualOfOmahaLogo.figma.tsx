import figma from "@figma/code-connect"
import MutualOfOmahaLogo from "./MutualOfOmahaLogo"

// Figma: Member Experience Design System — MutualOfOmahaLogo
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      variant: figma.enum("Variant", {
        Black: "black",
        Blue: "blue",
        White: "white",
      }),
    },
    example: (props) => (
      <MutualOfOmahaLogo variant={props.variant} />
    ),
  }
)
