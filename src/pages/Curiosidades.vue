<template>
  <div class="curiosidades-page">
    <h1>Curiosidades Tecnológicas</h1>
    <div class="robot-container">
      <div class="robot">
        <div class="robot-head">
          <div class="robot-eye left-eye"></div>
          <div class="robot-eye right-eye"></div>
        </div>
        <div class="robot-body">
          <div class="robot-message">
            {{ currentMessage }}
          </div>
        </div>
      </div>
    </div>
    <button v-if="showNextButton" @click="nextMessage" class="next-button">
      Próxima Curiosidade
    </button>
  </div>
</template>

<script>
export default {
  name: "CuriosidadesPage",
  data() {
    return {
      messages: [
        "Olá! Eu sou o TechBot. Vamos falar sobre tecnologia?",
        "Você sabia que o primeiro computador foi criado na década de 1940?",
        "A Internet surgiu nos anos 1960 como um projeto militar chamado ARPANET.",
        "O primeiro smartphone foi lançado em 1994 pela IBM, chamado Simon.",
        "A inteligência artificial já é usada em carros autônomos e assistentes virtuais!",
        "A revolução da computação quântica está apenas começando. O futuro é agora!",
        "Obrigado por conversar comigo! Foi incrível compartilhar essas curiosidades com você.",
        "Se ainda não viu, dê uma olhada nos meus <a href='/projetos' class='link'>projetos incríveis</a>! Eles mostram um pouco do que posso fazer.",
        "Ah, e não deixe de ler sobre mim na seção <a href='/sobre' class='link'>'Sobre'</a>. Lá você descobre mais sobre quem está por trás deste portfólio!",
        "Até a próxima!",
      ],
      currentMessageIndex: 0,
      showNextButton: true,
      synth: null, // Para a API de síntese de fala
    };
  },
  computed: {
    currentMessage() {
      return this.messages[this.currentMessageIndex];
    },
  },
  methods: {
    nextMessage() {
      if (this.currentMessageIndex < this.messages.length - 1) {
        this.currentMessageIndex++;
      } else {
        this.currentMessageIndex = 0; // Reinicia as mensagens
      }

      // Verifica se a mensagem atual é a última curiosidade
      if (this.currentMessageIndex === 5) {
        this.showNextButton = false; // Oculta o botão "Próxima Curiosidade"
        this.startAutoMessages(); // Inicia a passagem automática das mensagens de despedida
      }

      this.speakMessage(); // Fala a mensagem atual
    },
    speakMessage() {
      if (this.synth && this.synth.speaking) {
        this.synth.cancel(); // Cancela a fala atual
      }
      const utterance = new SpeechSynthesisUtterance(this.currentMessage);
      utterance.lang = "pt-BR"; // Define o idioma para português
      utterance.rate = 1; // Velocidade da fala
      utterance.pitch = 1; // Tom da voz
      this.synth.speak(utterance); // Inicia a fala
    },
    startAutoMessages() {
      let delay = 3000; // 3 segundos entre as mensagens
      for (let i = 6; i < this.messages.length; i++) {
        setTimeout(() => {
          this.currentMessageIndex = i;
          this.speakMessage();
        }, delay * (i - 5)); // Ajusta o tempo para cada mensagem
      }
    },
  },
  mounted() {
    this.synth = window.speechSynthesis; // Inicializa a API de síntese de fala
    this.speakMessage(); // Fala a primeira mensagem ao carregar a página
  },
};
</script>

<style scoped>
.curiosidades-page {
  text-align: center;
  padding: 2rem;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

h1 {
  font-family: "Fira Code", monospace;
  color: #39ff14;
  margin-bottom: 2rem;
}

.robot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.robot {
  width: 200px;
  height: 300px;
  background-color: #2c2c2c;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
  position: relative;
  animation: float 3s ease-in-out infinite;
}

.robot-head {
  width: 100%;
  height: 80px;
  background-color: #39ff14;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.robot-eye {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  animation: blink 2s infinite;
}

.robot-body {
  padding: 1rem;
  text-align: center;
}

.robot-message {
  font-family: "Roboto Mono", monospace;
  color: #39ff14;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.robot-message a.link {
  color: #00ffff;
  text-decoration: none;
}

.robot-message a.link:hover {
  text-decoration: underline;
}

.next-button {
  background-color: #39ff14;
  color: #1a1a1a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.next-button:hover {
  background-color: #00ffff;
}

/* Responsividade */
@media (max-width: 768px) {
  .robot {
    width: 150px;
    height: 250px;
  }

  .robot-head {
    height: 60px;
  }

  .robot-eye {
    width: 15px;
    height: 15px;
  }

  .robot-message {
    font-size: 1rem;
  }

  .next-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

/* Animações */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes blink {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Efeitos de fundo futurista */
.curiosidades-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(57, 255, 20, 0.1), transparent);
  z-index: -1;
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
</style>
