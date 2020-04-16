<template>
  <div class="container">
    <div v-if="favorites.length > 0" class="list">
      <div v-for="(favorite, index) in favorites" :key="favorite.id" class="repositorie">
        <div class="details-repo">
          <span>{{favorite.full_name}}</span>
          <p>{{favorite.description}}</p>
        </div>
        <div class="footer-repo">
          <button type="button" @click="removeRepo(index)">
            <i class="material-icons">star_outline</i>
          </button>
          <i class="material-icons">
            <router-link :to="`/repo/${favorite.id}`">navigate_next</router-link>
          </i>
        </div>
      </div>
    </div>
    <h3 v-else>Carregando...</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'Favorite',
  computed: {
    ...mapState({ favorites: state => state.favorites }),
  },
  methods: {
    ...mapActions(['removeRepo']),
  },
};
</script>

<style scoped>
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
  background: white;
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
</style>
