import figma from "@figma/code-connect"
import SidebarRow from "./SidebarRow"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8054-12239",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "default",
        Last: "last",
        Dropdown: "dropdown",
      }),
    },
    example: (props) => (
      <SidebarRow
        label="Quick Action Item"
        variant={props.variant}
      />
    ),
  }
)
