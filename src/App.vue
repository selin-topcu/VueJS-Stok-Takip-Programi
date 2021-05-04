<template>
  <div class="vue-tempalte">
    <FirstNavbar v-if="!isLogged()" /><AdminNavbar
      v-if="isLogged()"
    /><router-view></router-view>
  </div>
</template>

<script>
import FirstNavbar from "./components/FirstNavbar.vue";
import AdminNavbar from "./components/admin/AdminNavbar.vue";

export default {
  components: {
    FirstNavbar,
    AdminNavbar,
  },
  methods: {
    isLogged: () => {
      return localStorage.getItem("user") ? true : false;
    },
  },
};
</script>
