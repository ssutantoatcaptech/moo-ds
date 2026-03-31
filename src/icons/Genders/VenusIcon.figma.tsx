import figma from "@figma/code-connect"
import VenusIcon from "./VenusIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-3012",
  {
    props: {},
    example: () => <VenusIcon />,
  }
)
