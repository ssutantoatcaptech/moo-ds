import figma from "@figma/code-connect"
import BatteryEmptyIcon from "./BatteryEmptyIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6012-1012",
  {
    props: {},
    example: () => <BatteryEmptyIcon />,
  }
)
