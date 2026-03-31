import figma from "@figma/code-connect"
import SidebarHeader from "./SidebarHeader"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8037-7014",
  {
    props: {},
    example: () => (
      <SidebarHeader
        title="Quick Actions"
        description="Shortcuts to common tasks"
      />
    ),
  }
)
