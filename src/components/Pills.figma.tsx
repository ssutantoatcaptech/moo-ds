import figma from "@figma/code-connect"
import Pills from "./Pills"

figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=8051-7601",
  {
    props: {
      pillStyle: figma.enum("Property 1", {
        Solid: "solid",
        Outline: "outline",
      }),
      status: figma.enum("Property 2", {
        Alert: "alert",
        Error: "error",
        Information: "information",
        Pending: "pending",
        Success: "success",
        Tab: "tab",
      }),
    },
    example: (props) => (
      <Pills
        label="Label"
        status={props.status}
        pillStyle={props.pillStyle}
      />
    ),
  }
)
