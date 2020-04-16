<template>
  <div class="container">
    <div v-if="repo.length > 0">
      <div v-for="rep in repo" :key="rep.id" class="repositorie">
        <div class="details-repo">
          <span>{{rep.full_name}}</span>
          <p>{{rep.description}}</p>
        </div>
      </div>
    </div>
    <h3 v-else>Carregando...</h3>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  props: ['id'],

  data() {
    return {
      repo: {},
    };
  },

  async beforeCreate() {
    const id = this.$options.propsData.id;

    const resp = await api.get(`repositories?since=364`);

    const [...data] = [...resp.data];

    this.repo = data.filter(repo => repo.id == id);

    console.log(this.repo);
  },
};
</script>

<style scoped>
.repositorie {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  background: white;
  padding: 15px;
  margin: 20px;
  margin-top: 30px;
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
