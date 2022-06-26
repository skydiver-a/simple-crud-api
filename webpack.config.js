import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: "./index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    fallback: {
      "url": false,
      "http": false,
      "os": false,
      "path": false,
      "fs": false,
    }
  },
}