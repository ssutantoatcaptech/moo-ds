import figma from "@figma/code-connect"
import RecentActivityMobile from "./RecentActivityMobile"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8118-370",
  {
    props: {},
    example: () => (
      <RecentActivityMobile
        activities={[
          { id: "1", title: "Claim Submitted", description: "Claim #12345 submitted for review", date: "Mar 15, 2026" },
          { id: "2", title: "Benefits Updated", description: "Your dental benefits have been updated", date: "Mar 14, 2026" },
        ]}
        onViewAll={() => {}}
      />
    ),
  }
)
