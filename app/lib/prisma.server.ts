import { PrismaClient } from "@prisma/client"

let prismaClient: PrismaClient

declare global {
  var prismaClient: PrismaClient | undefined
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient()
  prismaClient.$connect()
} else {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient()
    global.prismaClient.$connect()
  }

  prismaClient = global.prismaClient
}

export { prismaClient }
