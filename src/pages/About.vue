<template>
  <section class="about">
    <router-link to="/" class="home-button">
      <i class="fas fa-arrow-left"></i>Home
    </router-link>
    <div class="container">
      <!-- Título com Efeito Neon -->
      <h2 class="title animate-pulse">Sobre Mim</h2>
      <p class="subtitle">
        Vinicius Vilar |
        <a
          href="https://www.instagram.com/vilar_dev"
          target="_blank"
          class="instagram-link"
          >@Vilar_dev</a
        >
      </p>

      <!-- Perfil e Descrição -->
      <div class="profile">
        <!-- Foto de Perfil com Efeito de Brilho -->
        <div class="profile-picture">
          <img
            src="@/assets/profile.jpg"
            alt="Profile Picture"
            class="profile-image"
          />
          <div class="overlay"></div>
        </div>

        <!-- Descrição -->
        <p class="description">
          Sou um desenvolvedor Full Stack apaixonado por tecnologia, com foco em
          criar soluções inovadoras e eficientes. Embora ainda não tenha
          experiência formal em empresas, dedico meu tempo a projetos pessoais e
          estudos intensivos nas áreas de
          <strong class="text-neon-pink">Front-end</strong>,
          <strong class="text-neon-blue">Back-end</strong> e
          <strong class="text-neon-purple">Cyber Segurança</strong>. Minha
          motivação é transformar ideias em realidade através da tecnologia,
          sempre buscando aprender e evoluir.
        </p>
      </div>

      <!-- Habilidades Organizadas por Área -->
      <div class="skills">
        <h3 class="skills-title">Habilidades</h3>
        <div class="skills-grid">
          <!-- Front-end -->
          <div class="skill-card frontend">
            <h4 class="skill-title">Front-end</h4>
            <ul class="skill-list">
              <li class="skill-item">
                <i class="fab fa-html5 icon"></i>
                HTML5 & CSS3
              </li>
              <li class="skill-item">
                <i class="fab fa-js-square icon"></i>
                JavaScript (ES6+)
              </li>
              <li class="skill-item">
                <i class="fab fa-vuejs icon"></i>
                Vue.js
              </li>
              <li class="skill-item">
                <i class="fab fa-react icon"></i>
                React.js
              </li>
            </ul>
          </div>

          <!-- Back-end -->
          <div class="skill-card backend">
            <h4 class="skill-title">Back-end</h4>
            <ul class="skill-list">
              <li class="skill-item">
                <i class="fab fa-node-js icon"></i>
                Node.js
              </li>
              <li class="skill-item">
                <i class="fas fa-database icon"></i>
                SQL & NoSQL
              </li>
              <li class="skill-item">
                <i class="fab fa-python icon"></i>
                Python
              </li>
              <li class="skill-item">
                <i class="fas fa-server icon"></i>
                APIs RESTful
              </li>
            </ul>
          </div>

          <!-- Cyber Segurança -->
          <div class="skill-card cybersecurity">
            <h4 class="skill-title">Cyber Segurança</h4>
            <ul class="skill-list">
              <li class="skill-item">
                <i class="fas fa-shield-alt icon"></i>
                Segurança de Redes
              </li>
              <li class="skill-item">
                <i class="fas fa-lock icon"></i>
                Criptografia
              </li>
              <li class="skill-item">
                <i class="fas fa-bug icon"></i>
                Testes de Penetração
              </li>
              <li class="skill-item">
                <i class="fas fa-user-secret icon"></i>
                Ethical Hacking
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Detalhamento das Habilidades -->
      <div class="skill-details">
        <h3 class="details-title">O Que Eu Faço</h3>
        <div class="details-grid">
          <!-- Front-end -->
          <div class="detail-card">
            <h4 class="detail-title">Front-end</h4>
            <p class="detail-description">
              No Front-end, crio interfaces modernas e responsivas, utilizando
              tecnologias como HTML5, CSS3, JavaScript (ES6+), Vue.js e
              React.js. Desenvolvo aplicações web interativas e dinâmicas,
              garantindo uma experiência de usuário fluida e agradável.
            </p>
          </div>

          <!-- Back-end -->
          <div class="detail-card">
            <h4 class="detail-title">Back-end</h4>
            <p class="detail-description">
              No Back-end, desenvolvo APIs robustas e automações utilizando
              Node.js, Python, SQL, NoSQL e APIs RESTful. Crio soluções
              escaláveis e seguras para processamento de dados e integração de
              sistemas.
            </p>
          </div>

          <!-- Cyber Segurança -->
          <div class="detail-card">
            <h4 class="detail-title">Cyber Segurança</h4>
            <p class="detail-description">
              Na área de Cyber Segurança, foco em identificar e corrigir
              vulnerabilidades em sistemas e redes. Utilizo técnicas como testes
              de penetração, criptografia e ethical hacking para fortalecer a
              segurança de aplicações e infraestruturas.
            </p>
          </div>
        </div>
      </div>

      <!-- Linha do Tempo -->
      <div class="timeline">
        <h3 class="timeline-title">Minha Jornada</h3>
        <div class="timeline-items">
          <div class="timeline-item">
            <h4 class="timeline-year">2021</h4>
            <p class="timeline-description">
              Início dos estudos em programação, com foco em HTML, CSS e
              JavaScript.
            </p>
          </div>
          <div class="timeline-item">
            <h4 class="timeline-year">2022</h4>
            <p class="timeline-description">
              Desenvolvimento dos primeiros projetos pessoais com Vue.js e
              Node.js.
            </p>
          </div>
          <div class="timeline-item">
            <h4 class="timeline-year">2023</h4>
            <p class="timeline-description">
              Foco em Cyber Segurança, com estudos em testes de penetração e
              automações com Python.
            </p>
          </div>
        </div>
      </div>

      <!-- Estatísticas com Carrossel -->
      <div class="stats">
        <h3 class="stats-title">Em Números</h3>
        <!-- Aviso para dispositivos móveis -->
        <p class="carousel-hint">Arraste para os lados para ver mais ➡️</p>
        <!-- Carrossel -->
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }"
          class="stats-carousel"
        >
          <swiper-slide v-for="(stat, index) in stats" :key="index">
            <div class="stat-card">
              <h4 class="stat-number">{{ stat.number }}</h4>
              <p class="stat-description">{{ stat.description }}</p>
            </div>
          </swiper-slide>
          <!-- Setas de navegação -->
          <!-- <div class="swiper-button-next"></div>  -->
          <!-- <div class="swiper-button-prev"></div> -->
        </swiper>
      </div>

      <!-- Rodapé com Instagram -->
      <footer class="footer">
        <p>
          Vinicius Vilar |
          <a
            href="https://www.instagram.com/vilar_dev"
            target="_blank"
            class="instagram-link"
            >@Vilar_dev</a
          >
        </p>
      </footer>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Instale os módulos de navegação e paginação
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "AboutPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      stats: [
        { number: "10+", description: "Projetos Concluídos" },
        { number: "5", description: "Linguagens Dominadas" },
        { number: "100+", description: "Horas de Estudo" },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos Gerais */
.about {
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Título */
.title {
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: #39ff14;
  margin-bottom: 4rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Subtítulo com Instagram */
.subtitle {
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;
}

.instagram-link {
  color: #39ff14; /* Cor neon verde */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.instagram-link:hover {
  color: #00ffff; /* Cor neon azul ao passar o mouse */
}

/* Perfil e Descrição */
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-bottom: 4rem;
}

.profile-picture {
  width: 12rem;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.5); /* Efeito neon */
  height: 12rem;
  border-radius: 50%;
  border: 4px solid #39ff14;
  overflow: hidden;
  position: relative;
}

.profile-image {
  width: 100%;
  filter: brightness(1.1) contrast(1.1) saturate(1.1);
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.4;
}

.description {
  font-size: 1.125rem;
  text-align: center;
  color: white;
  max-width: 48rem;
  margin: 0 auto;
}

/* Habilidades */
.skills {
  margin-bottom: 4rem;
}

.skills-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: #39ff14;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skill-card {
  background-color: #2c2c2c;
  padding: 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: scale(1.05);
}

.frontend:hover {
  background-color: #ffffff;
  color: #1a1a1a;
}

.backend:hover {
  background-color: #ffffff;
  color: #1a1a1a;
}

.cybersecurity:hover {
  background-color: #ffffff;
  color: #1a1a1a;
}

.skill-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.frontend .skill-title {
  color: #ff00ff;
}

.backend .skill-title {
  color: #00ffff;
}

.cybersecurity .skill-title {
  color: #9400d3;
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
}

/* Detalhamento das Habilidades */
.skill-details {
  margin-bottom: 4rem;
}

.details-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: #39ff14;
  margin-bottom: 2rem;
  text-align: center;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
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

@media (min-width: 640px) {
  .details-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .details-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.detail-card {
  background-color: #2c2c2c;
  padding: 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.detail-card:hover {
  transform: scale(1.05);
}

.detail-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #39ff14;
}

.detail-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
}

/* Linha do Tempo */
.timeline {
  margin-bottom: 4rem;
}

.timeline-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: #39ff14;
  text-align: center;
  margin-bottom: 2rem;
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  background-color: #2c2c2c;
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.timeline-item:hover {
  transform: scale(1.05);
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: bold;
  color: #39ff14;
  margin-bottom: 0.5rem;
}

.timeline-description {
  font-size: 1rem;
  color: #ffffff;
}

/* Estatísticas com Carrossel */
.stats {
  margin-bottom: 4rem;
}

.stats-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: #39ff14;
  text-align: center;
  margin-bottom: 2rem;
}

.carousel-hint {
  text-align: center;
  color: #39ff14;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: none;
}

@media (max-width: 640px) {
  .carousel-hint {
    display: block;
  }
}

.stats-carousel {
  width: 100%;
  padding: 1rem;
  position: relative;
}

.stat-card {
  background-color: #2c2c2c;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #39ff14;
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 1rem;
  color: #ffffff;
}

/* Rodapé */
.footer {
  text-align: center;
  padding: 2rem 0;
  color: #ffffff;
  background-color: #2c2c2c;
  margin-top: 4rem;
}

.footer a {
  color: #39ff14;
  text-decoration: none;
  font-weight: bold;
}

.footer a:hover {
  color: #00ffff;
}

/* Estilos para a paginação do Swiper */
.swiper-pagination-bullet {
  background-color: #ffffff;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background-color: #39ff14;
  opacity: 1;
}

/* Estilos para as setas de navegação */
.swiper-button-next,
.swiper-button-prev {
  color: #39ff14;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #00ffff;
  background-color: rgba(0, 0, 0, 0.8);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.5rem;
}
</style>
