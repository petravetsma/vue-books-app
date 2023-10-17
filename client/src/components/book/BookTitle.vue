<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "BookPageTitle",
    props: {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        }
    }
})
</script>

<template>
    <div class="book-info">
        <h2 class="title">{{ this.title }}</h2>
        <p class="author">{{ this.author }}</p>
    </div>
</template>

<style scoped lang="less">
@import '@/assets/base.less';

  .book-info {
    display: flex;
    flex-direction: column;

  .title {
    color: @main-color;
    font-size: 36px;
  }
  .author {
    font-style: italic;
  }
}
</style>