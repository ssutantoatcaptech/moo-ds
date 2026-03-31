import figma from "@figma/code-connect"
import MobilePrimaryNav from "./MobilePrimaryNav"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8026-8409",
  {
    props: {},
    example: () => (
      <MobilePrimaryNav label="Label" />
    ),
  }
)
