type Video = {
  title: string
  id: number
  youtube_id: string
}

type QuestionOption = {
  value: string
  key: string
  reason?: string
}
type Question = {
  id: number
  question_text: string
  options: QuestionOption[]
  answer: string
  reason: string | null
}

type Exercise = {
  id: number
  problem_statement: string
}

type VideoWithSubLevels = Video & { subLevels: (Question | Exercise)[] }
