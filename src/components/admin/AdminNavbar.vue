<template>
  <!-- Navigation -->
  <nav
    class="navbar shadow bg-dark rounded justify-content-between flex-nowrap flex-row fixed-top"
  >
    <div class="container">
      <a class="navbar-brand float-left">
        <div>
          <b-button v-b-toggle.sidebar-variant variant="dark">
            <b-icon icon="three-dots" animation="cylon" font-scale="2"></b-icon>
          </b-button>
          <b-sidebar
            id="sidebar-variant"
            backdrop-variant="dark"
            title="Admin Paneli"
            bg-variant="dark"
            text-variant="light"
            backdrop
            shadow
          >
            <div class="px-3 py-2">
              <nav class="mb-3">
                <b-nav vertical>
                  <ul>
                    <li>
                      <b-nav-item active @click="hide">Menü</b-nav-item>
                    </li>
                    <ul>
                      <li>
                        <b-nav-item href="/categories" @click="hide"
                          >Kategoriler</b-nav-item
                        >
                      </li>
                    </ul>
                  </ul>
                </b-nav>
              </nav>
            </div>
          </b-sidebar>
        </div>
      </a>

      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <div>
            <b-dropdown id="dropdown-1" text="" class="m-md-2" variant="dark">
              <template #button-content>
                <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Ayarlar
              </template>
              <b-dropdown-item v-on:click="logout()">Çıkış Yap</b-dropdown-item>
            </b-dropdown>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AdminNavbar",
  methods: {
    logout: () => {
      localStorage.removeItem("user");
      window.location.reload();
    },
  },
};
</script>
