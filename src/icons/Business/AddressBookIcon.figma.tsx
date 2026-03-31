import figma from "@figma/code-connect"
import AddressBookIcon from "./AddressBookIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-1641",
  {
    props: {},
    example: () => <AddressBookIcon />,
  }
)
