import figma from "@figma/code-connect"
import StatCard from "./StatCard"

// Figma: Member Experience Design System — StatCard
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      accent: figma.enum("Accent", {
        Blue: "blue",
        Green: "green",
        Purple: "purple",
        Orange: "orange",
      }),
    },
    example: (props) => (
      <StatCard
        title="Stat Title"
        value="1,234"
        subtitle="Additional context"
        accent={props.accent}
      />
    ),
  }
)
