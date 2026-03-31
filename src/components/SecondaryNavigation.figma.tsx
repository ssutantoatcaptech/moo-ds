import figma from "@figma/code-connect"
import SecondaryNavigation from "./SecondaryNavigation"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=6009-2811",
  {
    props: {},
    example: () => (
      <SecondaryNavigation
        links={[
          { id: "link-1", label: "Link 1" },
          { id: "link-2", label: "Link 2" },
          { id: "link-3", label: "Link 3" },
        ]}
      />
    ),
  }
)
