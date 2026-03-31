import figma from "@figma/code-connect"
import Button from "./Button"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8035-6444",
  {
    props: {},
    example: () => (
      <Button variant="primary">Label</Button>
    ),
  }
)
