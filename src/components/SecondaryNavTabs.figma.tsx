import figma from "@figma/code-connect"
import SecondaryNavTabs from "./SecondaryNavTabs"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=6009-2743",
  {
    props: {
      state: figma.enum("Property 1", {
        Default: "default",
        Hover: "hover",
        Selected: "selected",
      }),
    },
    example: (props) => (
      <SecondaryNavTabs
        label="Claims and Estimates"
        isActive={props.state === "selected"}
      />
    ),
  }
)
