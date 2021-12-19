<script lang="ts">
  import Navigation from "./_navigation.svelte";
  const links = [
    ['/about-programming', 'プログラミングのこと'],
    ['/about-part-time-instructor', '非常勤講師のこと'],
    ['/about-research-and-development', '研究・開発のこと']
  ]
</script>

<Navigation links={ links } />
<slot/>

<style lang="scss">
  
</style>