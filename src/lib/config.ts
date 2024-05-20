import Medusa from "@medusajs/medusa-js"

// git rm -r --cached .
// git add --all .
// git commit -a -m "Versioning untracked files"
// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = process.env.DATABASE_URL || "http://localhost:9000"

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const medusaClient = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})
