import figma from "@figma/code-connect"
import RegisteredIcon from "./RegisteredIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-2315",
  {
    props: {},
    example: () => <RegisteredIcon />,
  }
)
