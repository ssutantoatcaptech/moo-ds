import figma from "@figma/code-connect"
import DesktopIcon from "./DesktopIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-3680",
  {
    props: {},
    example: () => <DesktopIcon />,
  }
)
