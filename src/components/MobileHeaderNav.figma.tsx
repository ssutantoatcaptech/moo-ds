import figma from "@figma/code-connect"
import MobileHeaderNav from "./MobileHeaderNav"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8026-8629",
  {
    props: {},
    example: () => <MobileHeaderNav title="Header" />,
  }
)
