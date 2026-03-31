import figma from "@figma/code-connect"
import LogoStacked from "./LogoStacked"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8065-2827",
  {
    props: {},
    example: () => <LogoStacked />,
  }
)
