<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "BookPageSynopsis",
    props: {
        synopsis: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        }
    }
})
</script>

<template>
    <h3 class="synopsis-title">Synopsis</h3>
    <p class="synopsis">{{ this.synopsis }}</p>
    <p class="rating">Rating: {{ this.rating }}</p>
</template>

<style scoped lang="less">

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