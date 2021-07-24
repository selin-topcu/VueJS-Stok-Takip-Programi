<template>
  <div class="container">
    <div class="col md-12">
      <div style="margin-top:30px">
        <b-table
          striped
          hover
          :items="items"
          :fields="fields"
          head-variant="dark"
          table-variant="dark"
        ></b-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adminHomePage",
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["first_name", "last_name", "age", "modal"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
    isLogged: () => {
      return localStorage.getItem("user") ? true : false;
    },
  },
  created() {
    if (!this.isLogged()) this.$router.push({ name: "login" });
  },
};
</script>
