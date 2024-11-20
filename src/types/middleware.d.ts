import { NextMiddlewareResult } from 'next/dist/server/web/types'
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>

export type NextMiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware