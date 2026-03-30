import figma from "@figma/code-connect"
import InlineMessage from "./InlineMessage"

// Figma: Member Experience Design System — Inline Message
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=8020-7613
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8020-7613",
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
      <InlineMessage variant={props.variant} title="You're All Caught Up" onDismiss={() => {}}>
        requests are up to date.
      </InlineMessage>
    ),
  }
)
