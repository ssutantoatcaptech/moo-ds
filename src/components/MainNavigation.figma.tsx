import figma from "@figma/code-connect"
import MainNavigation from "./MainNavigation"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=6009-2717",
  {
    props: {
      notifications: figma.boolean("Notifications"),
    },
    example: (props) => (
      <MainNavigation
        activeTab="dashboard"
        showNotifications={props.notifications}
        userName="Name Here"
      />
    ),
  }
)
