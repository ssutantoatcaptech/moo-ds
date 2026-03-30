import figma from "@figma/code-connect"
import CommentOverlay from "./CommentOverlay"

// Figma: Member Experience Design System — CommentOverlay
// https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj?node-id=PLACEHOLDER
figma.connect(
  "https://www.figma.com/design/IE52Pd1nEcinhqOlSy4efj/Member-Experience-Design-System?node-id=PLACEHOLDER",
  {
    props: {
      commentMode: figma.boolean("Comment Mode"),
    },
    example: (props) => (
      <CommentOverlay
        screen="home"
        commentMode={props.commentMode}
        authorName="Jane Doe"
      />
    ),
  }
)
