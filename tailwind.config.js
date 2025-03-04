module.exports = {
  content: [
    "./index.html", // Adicione o caminho para o arquivo HTML principal
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Certifique-se de que o Tailwind escaneia seus arquivos Vue/JS/TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
