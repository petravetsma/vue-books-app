<script lang="ts">
import {Book} from "@/models/Book";
import BookElementHeader from "@/components/book/book-list-element/BookElementHeader.vue";
import BookUpvote from "@/components/book/BookUpvote.vue";

export default {
    name: 'BookElement',
    components: {BookUpvote, BookElementHeader},
    props: {
        book: {
            type: Book,
            required: true,
        },
        index: Number,
    },

    computed: {
        getSynopsis() {
            return this.book.synopsis.slice(0, 200) + "...";
        },
        getBookLink() {
            return `/books/${this.book.slug}`
        }
    },
}




</script>

<template>
    <div class="book-element">
        <div class="info">
            <BookElementHeader :index="this.index" :book="this.book" :book-link="this.getBookLink"/>

            <p class="author">{{ this.book.author }}</p>
            <p class="synopsis">{{ this.getSynopsis }}</p>

            <BookUpvote :upvote="this.book.upvote" :upvotes="this.book.upvotes" :reverse-upvote="() => this.book.reverseUpvote()"/>
        </div>
        <RouterLink :to="this.getBookLink">
            <img class="cover" :src="this.book.cover" :alt="this.book.title"/>
        </RouterLink>
    </div>
</template>

<style scoped lang="less">
@import '@/assets/base.less';

  .book-element {
    display: flex;
    padding: 20px;
  }

  .author {
    font-style: italic;
  }

  .synopsis {
    padding: 20px 0;
  }

  .cover {
    width: 150px;
    border-radius: 10px;
  }

</style>
