import { defineConfig } from "vitest/config"

import path from "path"

export default{
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
}