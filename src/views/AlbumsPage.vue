<template>
  <div class="albums">
    <div class="album-table">
      <div class="album-header">
        <span>Judul Album</span>
      </div>
      <div class="album-rows">
        <div v-for="album in albums" :key="album.id" class="album-row">
          <router-link :to="'/albums/' + album.id" class="album-link">{{ album.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useAlbumsStore } from '../stores/album';

export default defineComponent({
  setup() {
    const albums = ref([]);
    const albumsStore = useAlbumsStore();

    onMounted(async () => {
      await albumsStore.fetchAlbums();
      albums.value = albumsStore.albums;
    });

    return {
      albums,
    };
  },
});
</script>

<style scoped>
.albums {
  max-width: 75%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  background-color: #f5f5dc;
  border: 1px solid #8b7355;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #18181a;
  margin-top: 30px;
  margin-bottom: 30px;
}

.album-table {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: transparent !important;
}

.album-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-bottom: 2px solid #795548;
  background-color: #8b7355;
  color: #fff;
  padding: 15px;
}

.album-rows {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.album-row {
  width: calc(33.33% - 30px);
  margin: 15px;
  padding: 15px;
  border: 1px solid #795548;
  transition: background-color 0.3s, transform 0.3s;
  background-color: transparent;
  min-height: 50px;
}

.album-row .album-link {
  text-decoration: none;
  color: #795548;
  font-size: 1.1rem;
}

.album-link:hover {
  color: whitesmoke;
}

.album-row:hover {
  background-color: #8b7355;
  transform: translateY(-2px);
  border-color: #795548;
  color: whitesmoke !important;
}
</style>
