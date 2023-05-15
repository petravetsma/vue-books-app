<script lang="ts">

export default {
    name: 'BookUpvote',
    props: {
        upvote: {
            type: Boolean,
            required: true,
        },
        upvotes: {
            type: Number,
            required: true,
        },
        reverseUpvote: {
            type: Function,
            required: true,
        },
        reverseButtons: {
            type: Boolean,
            required: false,
        }

    },

    computed: {
        getUpvoteStatus() {
            return this.upvote ? 'Upvoted' : 'Upvote';
        },
        getUpvoteButtonType() {
            return this.upvote ? 'default' : 'primary';
        }
    },
}
</script>

<template>
    <div class="container" :class="reverseButtons && 'reverse'">
      <a-button :type="this.getUpvoteButtonType" class="upvote-btn" @click="this.reverseUpvote()">{{
          this.getUpvoteStatus
          }}
      </a-button>
      <span class="upvote-count"> Upvoted {{ this.upvotes }} times </span>
    </div>

</template>

<style scoped lang="less">

  .container {
    display: flex;
    align-items: center;
  }
  .reverse {
    flex-direction: row-reverse;
}

  .upvote-btn {
    width: 90px;
  }

  .upvote-count {
    margin: 0 5px;
  }

</style>
