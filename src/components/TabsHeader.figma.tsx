import figma from "@figma/code-connect"
import TabsHeader from "./TabsHeader"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8081-2371",
  {
    props: {},
    example: () => (
      <TabsHeader
        tabs={[
          { id: "medical", label: "Medical" },
          { id: "dental", label: "Dental" },
          { id: "vision", label: "Vision" },
          { id: "life", label: "Life" },
          { id: "disability", label: "Disability" },
          { id: "leave", label: "Leave" },
          { id: "other", label: "Other" },
        ]}
        activeTab="medical"
      />
    ),
  }
)
