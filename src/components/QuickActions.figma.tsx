import figma from "@figma/code-connect"
import QuickActions from "./QuickActions"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8037-7078",
  {
    props: {},
    example: () => (
      <QuickActions
        title="Quick Actions"
        description="Shortcuts to common tasks"
        items={[
          { id: "1", label: "Find my ID card" },
          { id: "2", label: "View claims" },
          { id: "3", label: "View benefits" },
          { id: "4", label: "Find a provider" },
          { id: "5", label: "Contact support" },
          { id: "6", label: "View documents" },
          { id: "7", label: "Manage profile" },
        ]}
      />
    ),
  }
)
