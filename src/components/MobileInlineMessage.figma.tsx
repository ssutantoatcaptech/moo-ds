import figma from "@figma/code-connect"
import MobileInlineMessage from "./MobileInlineMessage"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8114-1059",
  {
    props: {
      variant: figma.enum("Property 1", {
        Success: "Success",
        Error: "Error",
        Warning: "Warning",
        Information: "Information",
      }),
    },
    example: (props) => (
      <MobileInlineMessage variant={props.variant} title="You're All Caught Up">
        requests are up to date.
      </MobileInlineMessage>
    ),
  }
)
