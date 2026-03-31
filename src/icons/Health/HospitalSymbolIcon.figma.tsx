import figma from "@figma/code-connect"
import HospitalSymbolIcon from "./HospitalSymbolIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-600",
  {
    props: {},
    example: () => <HospitalSymbolIcon />,
  }
)
