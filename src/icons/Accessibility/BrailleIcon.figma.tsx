import figma from "@figma/code-connect"
import BrailleIcon from "./BrailleIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6001-10151",
  {
    props: {},
    example: () => <BrailleIcon />,
  }
)
