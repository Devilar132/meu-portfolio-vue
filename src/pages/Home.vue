<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Desenvolvedor Full Stack</h1>
      <p class="hero-subtitle">
        <span class="typewriter">Bem-vindo ao meu portfólio</span>
      </p>
      <button class="hero-button" @click="scrollToAbout">Sobre Mim</button>
      <button class="hero-button" @click="scrollToProjects">
        Ver Projetos
      </button>
    </div>
    <div id="particles-js" class="particles"></div>
  </section>
</template>

<script>
import "particles.js";

export default {
  name: "HomePage",
  mounted() {
    this.initParticles();
  },
  methods: {
    scrollToAbout() {
      this.$router.push("/about");
    },
    scrollToProjects() {
      this.$router.push("/projects");
    },
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00ff88",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff88",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

.hero {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 2;
  padding: 0 20px; /* Adiciona padding para telas pequenas */
}

.hero-title {
  font-size: clamp(2rem, 8vw, 3.5rem); /* Responsivo */
  font-family: "Fira Code", monospace;
  color: #00ff88;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 4vw, 1.5rem); /* Responsivo */
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  margin-bottom: 2rem;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid #00ff88;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #00ff88;
  }
}

.hero-button {
  padding: 1rem 2rem;
  font-size: clamp(0.875rem, 3vw, 1rem); /* Responsivo */
  font-family: "Roboto Mono", monospace;
  color: #1a1a1a;
  background-color: #00ff88;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0.5rem; /* Adiciona margem entre os botões */
}

.hero-button:hover {
  background-color: #00cc66;
  transform: scale(1.05); /* Efeito de hover */
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem; /* Ajuste para telas menores */
  }

  .hero-subtitle {
    font-size: 1.25rem; /* Ajuste para telas menores */
  }

  .hero-button {
    padding: 0.75rem 1.5rem; /* Ajuste para telas menores */
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem; /* Ajuste para smartphones */
  }

  .hero-subtitle {
    font-size: 1rem; /* Ajuste para smartphones */
  }

  .hero-button {
    padding: 0.5rem 1rem; /* Ajuste para smartphones */
  }
}
</style>
