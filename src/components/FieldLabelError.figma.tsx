import figma from "@figma/code-connect"
import FieldLabelError from "./FieldLabelError"

// Figma: Member Experience Design System — FieldLabelError
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {},
    example: () => (
      <FieldLabelError message="This field is required." />
    ),
  }
)
