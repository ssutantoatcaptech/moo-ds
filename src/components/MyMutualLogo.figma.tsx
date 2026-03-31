import figma from "@figma/code-connect"
import MyMutualLogo from "./MyMutualLogo"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8075-165",
  {
    props: {
      variant: figma.enum("Property 1", {
        black: "black",
        white: "white",
        "2color": "twoColor",
      }),
    },
    example: (props) => (
      <MyMutualLogo variant={props.variant} />
    ),
  }
)
