import figma from "@figma/code-connect"
import UserSecretIcon from "./UserSecretIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-3389",
  {
    props: {},
    example: () => <UserSecretIcon />,
  }
)
