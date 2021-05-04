<template>
  <!-- Navigation -->
  <nav
    class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
  >
    <div class="container">
      <a class="navbar-brand float-left">
        <router-link to="/">LOGO</router-link>
      </a>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/login">Giriş Yap</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-grn" to="/signup">Kayıt Ol</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "FirstNavbar",
};
</script>