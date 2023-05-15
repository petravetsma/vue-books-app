<script lang="ts">
import store from "@/stores/BookPageStore";
import BookUpvote from "@/components/book/BookUpvote.vue";
import BookPageTitle from "@/components/book/BookTitle.vue";
import BookPageSynopsis from "@/components/book/BookSynopsis.vue";
import Loader from "@/components/Loader.vue";

export const BOOK_PAGE_PATH = '/books/:slug';

export default {
    name: 'BooksPage',
    components: {Loader, BookPageSynopsis, BookPageTitle, BookUpvote},

    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            store,
        }
    },
    created() {
        this.$watch(
            () => this.slug,
            () => {this.store.loadBook(this.slug)},
            { immediate: true }
        )
    },
}

</script>

<template>
  <div class="container book">
      <Loader :is-loading="store.isLoading()" :is-loaded="store.isLoaded()" :error="store.error()">
        <header>
            <BookPageTitle :title="store.book.title" :author="store.book.author"/>
            <BookUpvote class="upvote" :reverse-buttons="true"
                        :reverse-upvote="() => store.book.reverseUpvote()"
                        :upvotes="store.book.upvotes"
                        :upvote="store.book.upvote"/>
        </header>
        <img class="cover" :src="store.book.cover" :alt="store.book.title"/>
        <BookPageSynopsis :rating="this.store.getRating()" :synopsis="store.book.synopsis"/>
      </Loader>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/base.less';

.book {
  display: flex;
  width: 800px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
}
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
}
.cover {
  width: 320px;
  border-radius: 20px;
}
.synopsis-title {
  align-self: flex-start;
  font-size: 26px;
  font-weight: bold;
  margin: 10px 40px;
}
.synopsis {
  margin: 0 40px 20px 40px
}
.rating {
  align-self: flex-start;
  margin: 0 40px 30px 40px;
  font-weight: bold;
}

</style>
