<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Loader",
    props: {
        isLoaded: {
            type: Boolean,
            required: true,
        },

        isLoading: {
            type: Boolean,
            required: true,

        },
        error: {
            type: Object,
            required: false,
        },
    }

})
</script>

<template>
    <div v-if="this.isLoading" class="loading">Loading...</div>

    <div v-if="this.error" class="error">{{ this.error }}</div>

    <template v-if="this.isLoaded">
      <slot></slot>
    </template>

</template>

<style scoped lang="less">

.loading, .error {
  width: 800px;
  margin: 20px auto 0 auto;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

</style>