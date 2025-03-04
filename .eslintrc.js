module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential", // Configurações essenciais do Vue
    "eslint:recommended", // Regras recomendadas do ESLint
    "plugin:prettier/recommended", // Integração do Prettier com ESLint
  ],
  parserOptions: {
    parser: "@babel/eslint-parser", // Usado para Vue 2 ou Vue 3
  },
  rules: {
    // Adicione regras personalizadas aqui, se necessário
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
        endOfLine: "auto",
      },
    ],
  },
};
