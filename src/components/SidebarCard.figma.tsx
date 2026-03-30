import figma from "@figma/code-connect"
import SidebarCard from "./SidebarCard"

// Figma: Member Experience Design System — SidebarCard
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {},
    example: () => (
      <SidebarCard
        title="Navigation"
        items={[
          { label: "Overview", href: "#overview", active: true },
          { label: "Details", href: "#details" },
          { label: "Settings", href: "#settings" },
        ]}
      />
    ),
  }
)
