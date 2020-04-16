<template>
  <div class="container">
    <form class="search col-12">
      <input type="text" placeholder="Pesquisar" />
      <button type="submit">
        <i class="material-icons">search</i>
      </button>
    </form>
    <div v-if="repos.length > 0" class="list">
      <div v-for="repo in repos" :key="repo.id" class="repositorie">
        <div class="details-repo">
          <span>{{repo.full_name}}</span>
          <p>{{repo.description}}</p>
        </div>
        <div class="footer-repo">
          <button type="button" @click="addRepo(repo)">
            <i class="material-icons">star_outline</i>
          </button>
          <i class="material-icons">
            <router-link :to="`/repo/${repo.id}`">navigate_next</router-link>
          </i>
        </div>
      </div>
    </div>
    <h3 v-else>Carregando...</h3>
  </div>
</template>

<script>
import api from '@/services/api';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      repos: [],
    };
  },

  async beforeCreate() {
    const resp = await api.get('repositories?since=364');

    const [...data] = [...resp.data];

    this.repos = data;

    console.log(this.repos);
  },

  methods: {
    ...mapActions(['addRepo']),
  },
};
</script>

<style scoped>
.container {
  background: white;
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 10px;
}

.search {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
}

button {
  text-align: center;
  position: absolute;
  outline: none;
  right: 15px;
  top: 0px;
  background: transparent;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

i {
  margin: 10px;
}

.list {
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
}

.repositorie {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  padding: 15px;
  margin: 20px;
  margin-top: 30px;
  width: 300px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.75);
}

.details-repo {
  width: 100%;
  height: 88%;
}

.details-repo span {
  word-wrap: break-word;
  width: 100%;
  font-weight: bold;
}

.details-repo p {
  word-wrap: break-word;
  margin-top: 10px;
}

.footer-repo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer-repo i {
  color: grey;
}

.footer-repo a {
  color: grey;
}

.footer-repo button {
  position: relative;
}
</style>
