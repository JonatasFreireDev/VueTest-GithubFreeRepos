<template>
  <div class="container-fluid">
    <div class="container">
      <div>
        <img class="img-fluid" alt="Vue logo" src="../assets/github-logo.svg" />
      </div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/favorite">Favorites</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  height: 70px;
  margin-bottom: 30px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  align-self: center;
  margin: 20px;
  font-weight: bold;
  color: #2c3e50;
}

img {
  width: 40px;
}
</style>
