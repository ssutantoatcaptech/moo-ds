import figma from "@figma/code-connect"
import Footer from "./Footer"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8043-15385",
  {
    props: {},
    example: () => <Footer />,
  }
)
