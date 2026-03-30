import figma from "@figma/code-connect"
import DataTable from "./DataTable"

// Figma: Member Experience Design System — DataTable
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      compact: figma.boolean("Compact"),
    },
    example: (props) => (
      <DataTable
        compact={props.compact}
        columns={["Name", "Status", "Date"]}
        rows={[
          { Name: "Row 1", Status: "Active", Date: "2025-01-01" },
          { Name: "Row 2", Status: "Inactive", Date: "2025-02-01" },
        ]}
      />
    ),
  }
)
