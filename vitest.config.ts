/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["kata*/**/*.Test.*"],
    exclude: [
      "**/node_modules/**",
      "kata*/**/*.Test.coffee",
      "kata*/**/*.Test.swift",
      "kata*/**/*.Test.csharp",
    ],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
