import figma from "@figma/code-connect"
import HospitalIcon from "./HospitalIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6003-593",
  {
    props: {},
    example: () => <HospitalIcon />,
  }
)
