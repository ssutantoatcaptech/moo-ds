import figma from "@figma/code-connect"
import BeerIcon from "./BeerIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6030-68",
  {
    props: {},
    example: () => <BeerIcon />,
  }
)
