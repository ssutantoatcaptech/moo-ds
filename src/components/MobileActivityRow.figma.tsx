import figma from "@figma/code-connect"
import MobileActivityRow from "./MobileActivityRow"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8118-230",
  {
    props: {
      variant: figma.enum("Property 1", {
        Info: "information",
        Pending: "pending",
        Success: "success",
        "Needs Attention": "needsAttention",
      }),
    },
    example: (props) => (
      <MobileActivityRow
        variant={props.variant}
        title="Dental EOB Available"
        description="Your dental Explanation of Benefits from Dec 10, 2024 is now available."
        date="Jan 20, 2025"
      />
    ),
  }
)
