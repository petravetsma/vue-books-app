<script lang="ts">

import {Book} from "@/models/Book";

export default {
    props: {
        book: {type:Book, required: true},
        index: Number,
        bookLink: String,
    },
    name: 'BookElementHeader',
    computed: {
        getTitle() {
            return `${this.index + 1}. ${this.book?.title}`;
        },
        getRating() {
            return `(${this.book?.rating}/10)`;
        }
    }
}
</script>

<template>
    <router-link :book="this.book" :to="this.bookLink">
        <h3 class="book-element-header">{{ this.getTitle }}</h3>
    </router-link>
    <span class="rating">{{ this.getRating }}</span>
</template>

<style scoped lang="less">
@import '@/assets/base.less';

.book-element-header {
    display: inline-block;
    font-size: 24px;
    margin-right: 10px;
    color: @main-color;

    + .rating {
        font-size: 16px;
        margin: 0 10px;
    }
}

</style>

