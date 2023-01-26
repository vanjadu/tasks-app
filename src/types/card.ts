export default interface Card {
  title: string
  dueDate: string | null
  messages: number | null
  subtasks: number | null
  avatars: string[] | null
  labels: boolean
  priority: boolean
  toDo: boolean
  inProgress: boolean
  forReview: boolean
  testing: boolean
  done: boolean
}
