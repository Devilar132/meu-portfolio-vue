<template>
  <section class="contact">
    <h2>Contato</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Lógica para enviar o formulário
      console.log("Formulário enviado:", this.form);
      // Limpar o formulário após o envio
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 2rem;
  background-color: #1a1a1a;
  color: #ffffff;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-family: "Fira Code", monospace;
  color: #00ff88;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  font-family: "Roboto Mono", monospace;
  border: 1px solid #00ff88;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #ffffff;
}

button {
  padding: 0.75rem 1.5rem;
  font-family: "Roboto Mono", monospace;
  color: #1a1a1a;
  background-color: #00ff88;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #00cc66;
  transform: scale(1.05);
}
</style>
