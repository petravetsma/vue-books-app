<script lang="ts">
import store from "@/stores/BookListStore";
import BookListElement from "@/components/book/book-list-element/BookListElement.vue";
import Loader from "@/components/Loader.vue";

export const BOOK_LIST_PATH = '/books';

export default {
    name: 'BooksList',
    components: {Loader, BookListElement},

    data() {
        return {
            store,
        }
    },

    created() {
        store.loadBooksList()
    }
}

</script>

<template>
  <main class="books-list">
      <h1 class="main-header">Top books of all time</h1>
      <Loader :is-loading="store.isLoading()" :is-loaded="store.isLoaded()">
          <template v-for="(book, index) in store.books" :key="book.slug">
              <BookListElement :book="book" :index="index" />
          </template>
      </Loader>

  </main>
</template>

<style scoped lang="less">
@import '@/assets/base.less';

.books-list {
  margin: 0 auto;
  width: 700px;
}

.main-header {
  text-align: center;
  padding: 25px 0;
  color: @main-color;
}

</style>
