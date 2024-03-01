import { vercelStegaCleanAll } from "@sanity/client/stega"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanStega(input: string | null) {
  if (input == null) return null
  return vercelStegaCleanAll(input)
}

export function formatDateTime(input: string | null) {
  if (input == null) return null

  let date = new Date(input)

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function shareOnFacebook(url: string): void {
  try {
    new URL(url)

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`
    window.open(
      facebookShareUrl,
      "fbShareWindow",
      "height=450, width=550, top=" +
        (window.innerHeight / 2 - 275) +
        ", left=" +
        (window.innerWidth / 2 - 225) +
        ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0",
    )
  } catch (e) {
    console.error("Invalid URL", e)
  }
}

export function shareOnTwitter(url: string, text: string): void {
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url,
  )}&text=${encodeURIComponent(text)}`
  window.open(
    twitterShareUrl,
    "twitterShareWindow",
    "height=450, width=550, top=" +
      (window.innerHeight / 2 - 275) +
      ", left=" +
      (window.innerWidth / 2 - 225) +
      ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0",
  )
}

export function copyLinkToClipboard(url: string): void {
  if (!navigator.clipboard) {
    return
  }

  navigator.clipboard.writeText(url)
}
