import figma from "@figma/code-connect"
import IndustryIcon from "./IndustryIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-2286",
  {
    props: {},
    example: () => <IndustryIcon />,
  }
)
