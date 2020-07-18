<template>
  <Layout :show-logo="false">
    <TopHero />
    <LeadSection />
    <NameCardSection />
    <!-- List posts -->
    <div class="posts">
      <h4>もう少し詳しいこと</h4>
      <div class="posts__contanier">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import TopHero from '~/components/TopHero.vue'
import LeadSection from '~/components/LeadSection.vue'
import NameCardSection from '~/components/NameCardSection.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    LeadSection,
    TopHero,
    NameCardSection,
    PostCard
  },
  metaInfo: {
    title: 'Hello, World!!'
  }
}
</script>

<style lang="scss">
.posts {
  padding: var(--space);

  h4 {
    font-family: 'Noto Serif JP', serif;
    color: var(--body-color);
    text-align: center;
    margin-bottom: 3rem;
  }

  &__contanier {
    display: flex;
	  flex-wrap: wrap;
  }
}
</style>
