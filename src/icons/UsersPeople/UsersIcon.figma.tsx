import figma from "@figma/code-connect"
import UsersIcon from "./UsersIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-1697",
  {
    props: {},
    example: () => <UsersIcon />,
  }
)
