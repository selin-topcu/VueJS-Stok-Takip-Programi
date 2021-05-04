<template>
  <div class="App">
    <div class="vertical-center">
      <div class="inner-block">
        <div class="vue-tempalte">
          <form>
            <h3>Giriş Yap</h3>

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                class="form-control form-control-lg"
                required="required"
              />
            </div>

            <div class="form-group">
              <label>Şifre</label>
              <input
                type="password"
                placeholder="Şifre"
                class="form-control form-control-lg"
                required="required"
              />
            </div>

            <button
              v-on:click="login()"
              type=""
              class="btn btn-grn btn-lg btn-block"
            >
              Giriş Yap
            </button>

            <p class="forgot-password text-right mt-2 mb-4">
              <router-link to="/forgot-password">Şifremi Unuttum</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login: function() {
      localStorage.setItem("user", true);
    },
    isLogged: () => {
      return localStorage.getItem("user") ? true : false;
    },
  },
  created() {
    if (this.isLogged()) this.$router.push({ name: "adminHomePage" });
  },
};
</script>
