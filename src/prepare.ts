#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { videosWithSubLevelsSchema } from './validation'
import { ZodError } from 'zod'

main()

function main() {
  const currDir = process.cwd()
  const videoListFilePath = path.join(currDir, 'videos/list.json')

  const videos: Video[] = JSON.parse(readFileSync(videoListFilePath).toString())

  const videosWithSubLevels = videos.map((video) => {
    const videoDataFolderName = video.title
      .split(' ')
      .map((word) => word.toLowerCase())
      .join('_')

    const subLevelFilePath = path.join(currDir, `videos/${videoDataFolderName}/subLevels.json`)

    const subLevels: (Question | Exercise)[] = JSON.parse(readFileSync(subLevelFilePath).toString())

    const videoWithSubLevels: VideoWithSubLevels = { ...video, subLevels }
    return videoWithSubLevels
  })

  try {
    videosWithSubLevelsSchema.parse(videosWithSubLevels)

    const videosWithSubLevelsFilePath = path.join(currDir, 'videos/videosWithSubLevels.json')

    writeFileSync(videosWithSubLevelsFilePath, JSON.stringify(videosWithSubLevels))
  } catch (err) {
    if (err instanceof ZodError) {
      console.error(err)
    }
  }
}

function validateQuestion(q: Question) {}
