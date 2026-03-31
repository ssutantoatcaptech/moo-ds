import figma from "@figma/code-connect"
import ShoppingCartIcon from "./ShoppingCartIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6012-1169",
  {
    props: {},
    example: () => <ShoppingCartIcon />,
  }
)
