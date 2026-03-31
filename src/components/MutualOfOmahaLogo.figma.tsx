import figma from "@figma/code-connect"
import MutualOfOmahaLogo from "./MutualOfOmahaLogo"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8010-6",
  {
    props: {
      variant: figma.enum("Property 1", {
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
