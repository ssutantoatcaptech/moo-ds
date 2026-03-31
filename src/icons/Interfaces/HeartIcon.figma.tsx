import figma from "@figma/code-connect"
import HeartIcon from "./HeartIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6016-2122",
  {
    props: {},
    example: () => <HeartIcon />,
  }
)
