import figma from "@figma/code-connect"
import BugIcon from "./BugIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-3386",
  {
    props: {},
    example: () => <BugIcon />,
  }
)
