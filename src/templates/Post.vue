<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <div class="post-author">
      <Author />
    </div>

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        {
          property: 'og:title',
          content: this.$static.metadata.siteName + ' - ' + this.$page.post.title,
        },
      ]
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  font-family: 'Norican', cursive;
  margin-top: calc(var(--space) * 2);
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &.content-box {
    padding: calc(var(--space) / 2);
  }

  &__header {
    width: calc(100% + var(--space));
    margin-left: calc(var(--space) * -.5);
    margin-top: calc(var(--space) * -.5);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}


.main {
  position: relative;
}

.post-author {
  display: flex;
  margin: calc(var(--space) / 2) auto;
}
.content-box {
  margin-bottom: calc(var(--space) * 2);
}
</style>
