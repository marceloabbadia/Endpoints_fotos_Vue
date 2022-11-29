<template lang="pt-Br">
  <div class="listagem" v-for="item in albuns">
    <div>
      <router-link :to="{name:'photos', params:{id: item.id}}">
        Usuário: {{item.userId}} Título: {{ item.title}}
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "AlbumsTest",
  setup(props) {
    const albuns = ref(props.album);

    onMounted(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
        albuns.value = res.data;
      });
    });

    return { albuns };
  },
};
</script>
<style scoped>
.listagem {
  display: flex;
  text-align: left;
  border: 1px solid black;
  padding: 10px;
}
</style>
