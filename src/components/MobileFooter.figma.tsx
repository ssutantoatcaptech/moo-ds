import figma from "@figma/code-connect"
import MobileFooter from "./MobileFooter"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8047-3336",
  {
    props: {},
    example: () => <MobileFooter />,
  }
)
