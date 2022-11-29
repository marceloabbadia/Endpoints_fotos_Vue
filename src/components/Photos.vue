<template lang="pt-Br">
  <div>
    <button @click="back">Voltar</button>
  </div>
  <div>
    <h2>Photos</h2>
    <div v-for="image in photos">
      <img :src="image.thumbnailUrl" :alt="image.title">
      <p>{{image.title}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  name: "PhotosTest",
  methods: {
    back() {
      this.$router.back();
    },
  },
  setup(props) {
    const photos = ref(props.photos);
    onMounted(() => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums/${
            useRoute().params.id
          }/photos`
        )
        .then((res) => {
          photos.value = res.data;
        });
    });
    console.log(photos);
    return { photos };
  },
};
</script>
<style scoped>
img {
  cursor: pointer;
  border: 3px solid black;
}
</style>
