import figma from "@figma/code-connect"
import FlaskIcon from "./FlaskIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6033-348",
  {
    props: {},
    example: () => <FlaskIcon />,
  }
)
