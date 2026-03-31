import figma from "@figma/code-connect"
import UtilityLinks from "./UtilityLinks"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8011-7564",
  {
    props: {
      variant: figma.enum("Property 1", {
        Default: "findIdCard",
        Hover: "findIdCard",
        Profile: "profile",
        "Sign In": "signIn",
        Notification: "notification",
      }),
      notification: figma.boolean("Notification"),
    },
    example: (props) => (
      <UtilityLinks
        variant={props.variant}
        showNotificationDot={props.notification}
        userName="Name Here"
      />
    ),
  }
)
