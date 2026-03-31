import figma from "@figma/code-connect"
import UserPlusIcon from "./UserPlusIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-1705",
  {
    props: {},
    example: () => <UserPlusIcon />,
  }
)
