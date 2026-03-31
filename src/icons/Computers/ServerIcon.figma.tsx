import figma from "@figma/code-connect"
import ServerIcon from "./ServerIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-3682",
  {
    props: {},
    example: () => <ServerIcon />,
  }
)
