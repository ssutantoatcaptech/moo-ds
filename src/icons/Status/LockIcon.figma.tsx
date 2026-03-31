import figma from "@figma/code-connect"
import LockIcon from "./LockIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6012-1021",
  {
    props: {},
    example: () => <LockIcon />,
  }
)
