import figma from "@figma/code-connect"
import NavigationTabs from "./NavigationTabs"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=6008-11552",
  {
    props: {
      state: figma.enum("Property 1", {
        Default: "default",
        Hover: "hover",
        Selected: "selected",
      }),
      showChevron: figma.boolean("Show Chevron"),
    },
    example: (props) => (
      <NavigationTabs
        label="Support"
        isActive={props.state === "selected"}
        showChevron={props.showChevron}
      />
    ),
  }
)
