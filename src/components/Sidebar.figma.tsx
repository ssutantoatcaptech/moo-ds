import figma from "@figma/code-connect"
import Sidebar from "./Sidebar"

// Figma: Member Experience Design System — Sidebar
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {},
    example: () => (
      <Sidebar
        activePage="overview"
        onNavigate={(page) => console.log(page)}
        tableCount={5}
      />
    ),
  }
)
