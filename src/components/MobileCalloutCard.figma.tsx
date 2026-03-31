import figma from "@figma/code-connect"
import MobileCalloutCard from "./MobileCalloutCard"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8115-1294",
  {
    props: {},
    example: () => (
      <MobileCalloutCard
        title="Missing a Benefit?"
        description="We're still setting up your benefits information with your employer. Some coverages may take a little longer to appear. Please check back soon."
        buttonLabel="Get Support"
      />
    ),
  }
)
