import figma from "@figma/code-connect"
import UserCircleIcon from "./UserCircleIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-1703",
  {
    props: {},
    example: () => <UserCircleIcon />,
  }
)
