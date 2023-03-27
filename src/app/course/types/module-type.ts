import { MediaType } from "./media-type"

export type ModuleType = {
  id: number
  name: string
  objective: string
  medias: MediaType[]
  isSelected: boolean
}
