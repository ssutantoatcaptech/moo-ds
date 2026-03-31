import figma from "@figma/code-connect"
import UserIcon from "./UserIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-1699",
  {
    props: {},
    example: () => <UserIcon />,
  }
)
