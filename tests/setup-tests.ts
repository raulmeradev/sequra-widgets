import { afterAll, afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { server } from './domain/fixtures/server'

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

afterEach(() => {
  // Reset handlers after each test `important for test isolation`
  server.resetHandlers()
  // runs a cleanup after each test case (e.g. clearing jsdom)
  cleanup()
})
