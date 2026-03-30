import figma from "@figma/code-connect"
import ActivityRow from "./ActivityRow"

// Figma: Member Experience Design System — ActivityRow
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      variant: figma.enum("Variant", {
        Information: "information",
        Pending: "pending",
        Success: "success",
        "Needs Attention": "needsAttention",
      }),
    },
    example: (props) => (
      <ActivityRow
        variant={props.variant}
        title="Activity Title"
        description="Activity description text"
        date="Jan 15, 2025"
        onClick={() => {}}
      />
    ),
  }
)
