import figma from "@figma/code-connect"
import MobileNavigationBack from "./MobileNavigationBack"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8027-8679",
  {
    props: {},
    example: () => <MobileNavigationBack />,
  }
)
