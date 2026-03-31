import figma from "@figma/code-connect"
import SpinnerIcon from "./SpinnerIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-1723",
  {
    props: {},
    example: () => <SpinnerIcon />,
  }
)
