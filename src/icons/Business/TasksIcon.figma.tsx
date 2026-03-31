import figma from "@figma/code-connect"
import TasksIcon from "./TasksIcon"

figma.connect(
  "https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id=6002-2358",
  {
    props: {},
    example: () => <TasksIcon />,
  }
)
