import figma from "@figma/code-connect"
import TruckIcon from "./TruckIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-2755",
  {
    props: {},
    example: () => <TruckIcon />,
  }
)
