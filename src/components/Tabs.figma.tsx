import figma from "@figma/code-connect"
import Tabs from "./Tabs"

// Figma: Member Experience Design System — Tabs
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
    },
    example: (props) => (
      <Tabs
        size={props.size}
        tabs={[
          { id: "tab1", label: "Tab 1", content: "Tab 1 content" },
          { id: "tab2", label: "Tab 2", content: "Tab 2 content" },
        ]}
      />
    ),
  }
)
