import figma from "@figma/code-connect"
import TtyIcon from "./TtyIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6001-10161",
  {
    props: {},
    example: () => <TtyIcon />,
  }
)
