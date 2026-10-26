<script lang="ts">
  import Hero from "./_hero.svelte";
  import Lead from "./_lead.svelte";
  import Paper from "./_paper.svelte";
  import Posts from "./_posts.svelte";
  import Footer from "./_footer.svelte";
  import { SITE_TITLE } from "../site";

  $: document.title = SITE_TITLE;

</script>

<main>
  <Hero />
  <Lead />
  <Paper />
  <Posts />
  
</main>
<Footer />

<style lang="scss">
</style>
