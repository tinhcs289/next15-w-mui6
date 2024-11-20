import type { CustomMiddleware, NextMiddlewareFactory } from "@/types/middleware"
import type { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export default function stackMiddleware(
    functions: NextMiddlewareFactory[],
    index = 0
  ): CustomMiddleware {
    const current = functions[index]
  
    if (current) {
      const next = stackMiddleware(functions, index + 1)
      return current(next)
    }
  
    return (
      request: NextRequest,
      event: NextFetchEvent,
      response: NextResponse
    ) => {
      return response
    }
  }