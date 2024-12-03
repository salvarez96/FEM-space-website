import { useEffect, useState } from "react"
import copies from '@copies'
import { transformToUrlString } from "@helpers"

type Copies = typeof copies
type CopiesKeys = keyof Copies
type ValidCopies = Exclude<CopiesKeys, 'homeCopies'>

interface Copy {
  "name": string,
  "mainContent": string,
  "image"?: string,
  "additionalFacts"?: {
    "averageDistance"?: string,
    "travelTime"?: string
  },
  "images"?: {
    "mobile"?: string,
    "desktop"?: string
  }
}

export function useCopyToRender(
  copyToRender: ValidCopies,
  urlPathname: string | undefined,
): [Copy, Copies[ValidCopies]] {

  const [copiesToRender, setCopiesToRender] = useState(copies[copyToRender][0])

  useEffect(() => {
    copies[copyToRender].find(copy => {
      if (transformToUrlString(copy.name).includes(urlPathname as string)) {
        setCopiesToRender(copy)
        return true
      }
    })

    if (!urlPathname) setCopiesToRender(copies[copyToRender][0])
  }, [urlPathname])

  return [copiesToRender, copies[copyToRender]]
}
