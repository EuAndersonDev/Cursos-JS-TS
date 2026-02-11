import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
    },
    {
        // ...outras configurações...
        rules: {
            "no-undef": "off",
            // ...outras regras...
        },
    },
    pluginReact.configs.flat.recommended,
]);
