import { useEffect, useState } from "react"
import copies from '@copies'
import { transformToUrlString } from "@helpers"

// create object type from all properties of copies.json
type Copies = typeof copies
// use keys of copies.json as literal types
type CopiesKeys = keyof Copies
// exclude "homeCopies" which won't be used in useCopyToRender
type CopyType = Exclude<CopiesKeys, 'homeCopies'>

interface Copy {
  "name": string,
  "mainContent": string,
  "position"?: string
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
  copyType: CopyType,
  urlPathname: string | undefined,
): [Copy, Copies[CopyType]] {

  const [copyToRender, setCopiesToRender] = useState(copies[copyType][0])

  useEffect(() => {
    if (urlPathname) {
      copies[copyType].find(copy => {
        if (transformToUrlString(copy.name).includes(urlPathname)) {
          setCopiesToRender(copy)
          return true
        }
      })
    } else {
      setCopiesToRender(copies[copyType][0])
    }
  }, [urlPathname])

  return [copyToRender, copies[copyType]]
}
