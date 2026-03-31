import figma from "@figma/code-connect"
import CoffeeIcon from "./CoffeeIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-2000",
  {
    props: {},
    example: () => <CoffeeIcon />,
  }
)
