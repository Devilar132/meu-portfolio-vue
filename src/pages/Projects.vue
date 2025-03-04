<template>
  <section class="projects">
    <router-link to="/" class="home-button">
      <i class="fas fa-arrow-left"></i>Home
    </router-link>
    <h2>Projetos</h2>

    <!-- Categoria: Desenvolvimento Web -->
    <div class="category">
      <h3>Desenvolvimento Web</h3>
      <div class="project-gallery">
        <!-- Projeto 1: Sistema de Barbearia -->
        <div class="project-card">
          <h3 class="project-title">Sistema de Barbearia</h3>
          <p class="project-description">
            Sistema para gerenciar agendamentos, clientes e serviços de uma
            barbearia.
          </p>
          <div class="technologies">
            <span class="tech-icon">📅</span>
            <!-- Ícone representando agendamentos -->
            <span class="tech-icon">✂️</span>
            <!-- Ícone representando serviços -->
            <span class="tech-icon">👤</span>
            <!-- Ícone representando clientes -->
          </div>
          <button @click="toggleDetails(1)" class="details-button">
            {{ showDetails[1] ? "Ocultar Detalhes" : "Ver Detalhes" }}
          </button>
          <div v-if="showDetails[1]" class="project-details">
            <h4>Como Funciona:</h4>
            <p>
              Sistema desenvolvido para facilitar o agendamento de serviços,
              cadastro de clientes e gestão de horários em barbearias.
            </p>
            <video controls class="project-video">
              <source
                :src="require('@/assets/project1-demo.mp4')"
                type="video/mp4"
              />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        <!-- Projeto 2: Scanner de Rede -->
        <div class="project-card">
          <h3 class="project-title">Scanner de DNS</h3>
          <p class="project-description">
            Ferramenta de varredura de subdomínios que utiliza APIs públicas e
            consultas DNS para identificar e verificar subdomínios ativos.
          </p>
          <div class="technologies">
            <span class="tech-icon">🐍</span>
            <!-- Ícone representando Python -->
            <span class="tech-icon">🔍</span>
            <!-- Ícone representando varredura -->
            <span class="tech-icon">📄</span>
            <!-- Ícone representando relatórios -->
          </div>
          <button @click="toggleDetails(2)" class="details-button">
            {{ showDetails[2] ? "Ocultar Detalhes" : "Ver Detalhes" }}
          </button>
          <div v-if="showDetails[2]" class="project-details">
            <h4>Como Funciona:</h4>
            <p>
              Desenvolvida em Python, a ferramenta utiliza multithreading para
              maior eficiência, gera relatórios detalhados e suporta a análise
              de múltiplos domínios via arquivo de texto.
            </p>
            <video controls class="project-video">
              <source
                :src="require('@/assets/project2-demo.mp4')"
                type="video/mp4"
              />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        <!-- Projeto 3: Descobridor de Endpoints -->
        <div class="project-card">
          <h3 class="project-title">Explorador de Endpoints</h3>
          <p class="project-description">
            Ferramenta de descoberta de endpoints em websites, que utiliza
            técnicas de scraping e análise de HTML/JavaScript.
          </p>
          <div class="technologies">
            <span class="tech-icon">🐍</span>
            <!-- Ícone representando Python -->
            <span class="tech-icon">🌐</span>
            <!-- Ícone representando scraping -->
            <span class="tech-icon">🧵</span>
            <!-- Ícone representando multithreading -->
          </div>
          <button @click="toggleDetails(3)" class="details-button">
            {{ showDetails[3] ? "Ocultar Detalhes" : "Ver Detalhes" }}
          </button>
          <div v-if="showDetails[3]" class="project-details">
            <h4>Como Funciona:</h4>
            <p>
              A ferramenta analisa páginas web para encontrar links, formulários
              e iframes, extrai endpoints de arquivos JS e scripts inline, e
              verifica o status de cada endpoint usando multithreading.
            </p>
            <video controls class="project-video">
              <source
                :src="require('@/assets/project3-demo.mp4')"
                type="video/mp4"
              />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      showDetails: {
        1: false,
        2: false,
        3: false,
      },
    };
  },
  methods: {
    toggleDetails(projectId) {
      this.showDetails[projectId] = !this.showDetails[projectId];
    },
  },
};
</script>

<style scoped>
.projects {
  padding: 2rem;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: center;
}

.category {
  margin-bottom: 3rem;
}

.project-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.project-card {
  background-color: #2c2c2c;
  border-radius: 8px;
  overflow: hidden;
  width: calc(33.333% - 2rem);
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  padding: 1rem;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-title {
  font-family: "Fira Code", monospace;
  color: #00ff88;
  padding: 1rem;
}

.project-description {
  font-family: "Roboto Mono", monospace;
  padding: 0 1rem 1rem;
}

.technologies {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-icon {
  font-size: 1.5rem;
}

.details-button {
  background-color: #39ff14;
  color: #1a1a1a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #00ffff;
}

.project-details {
  padding: 1rem;
  background-color: #1a1a1a;
  border-top: 1px solid #39ff14;
}

.project-video {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin-top: 1rem;
}

/* Botão de Voltar para a Home */
.home-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #39ff14; /* Cor neon verde */
  color: #1a1a1a; /* Cor do texto */
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.home-button:hover {
  background-color: #00ffff; /* Cor neon azul ao passar o mouse */
  color: #1a1a1a;
  transform: scale(1.05);
}

.home-button i {
  font-size: 1.25rem;
}

/* Responsividade */
@media (max-width: 1024px) {
  .project-card {
    width: calc(50% - 2rem);
  }
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
    max-width: 100%;
  }
}
</style>
