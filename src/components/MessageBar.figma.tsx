import figma from "@figma/code-connect"
import MessageBar from "./MessageBar"

// Figma: Member Experience Design System — MessageBar
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      intent: figma.enum("Intent", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Error: "error",
      }),
      dismissible: figma.boolean("Dismissible"),
    },
    example: (props) => (
      <MessageBar
        intent={props.intent}
        title="Message Title"
        dismissible={props.dismissible}
      >
        This is a message bar description.
      </MessageBar>
    ),
  }
)
