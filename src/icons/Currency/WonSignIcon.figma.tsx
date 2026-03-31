import figma from "@figma/code-connect"
import WonSignIcon from "./WonSignIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-270",
  {
    props: {},
    example: () => <WonSignIcon />,
  }
)
