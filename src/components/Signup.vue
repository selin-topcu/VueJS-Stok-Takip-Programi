<template>
<div class="App">
      <div class="vertical-center"  style="margin-top:40px;">
        <div class="inner-block" >
  <div class="vue-tempalte">
    <form>
      <h3>Kayıt Ol</h3>

      <div class="form-group">
        <label>İsim Soyisim</label>
        <input
          type="text" placeholder="İsim Soyisim"
          class="form-control form-control-lg"
          required="required"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email" placeholder="Email"
          class="form-control form-control-lg"
          required="required"
        />
      </div>

      <div class="form-group">
        <label>Şifre</label>
        <input
          type="password" placeholder="Şifre"
          class="form-control form-control-lg"
          required="required"
        />
      </div>
      <div class="form-group">
        <label>Şifrenizi Tekrar Giriniz</label>
        <input
          type="password" placeholder="Şifrenizi Tekrar Giriniz"
          class="form-control form-control-lg"
          required="required"
        />
      </div>
      <button type="submit" class="btn btn-grn ">
        Kayıt Ol
      </button>
<button type="submit" class="btn btn-danger float-right">
        Temizle
      </button>
      <p class="forgot-password text-right">
        Zaten Kayıtlı Mısınız ?
        <router-link :to="{ name: 'login' }">Giriş Yap</router-link>
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
};
</script>
