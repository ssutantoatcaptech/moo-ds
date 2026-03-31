import figma from "@figma/code-connect"
import BuildingIcon from "./BuildingIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-1915",
  {
    props: {},
    example: () => <BuildingIcon />,
  }
)
