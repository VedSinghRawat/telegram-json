import { z } from 'zod'

export const videosWithSubLevelsSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    youtube_id: z.string(),
    subLevels: z.array(
      z.union([
        z.object({
          id: z.number(),
          question_text: z.string().max(300),
          options: z.array(z.object({ value: z.string().max(100), key: z.string(), reason: z.optional(z.string()) })),
          answer: z.string(),
          reason: z.union([z.string(), z.null()]),
        }),
        z.object({
          id: z.number(),
          problem_statement: z.string(),
          link: z.string(),
        }),
      ])
    ),
  })
)
