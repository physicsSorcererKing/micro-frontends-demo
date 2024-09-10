<script>

  import { IconBrandSvelte } from '@tabler/icons-svelte';
  export let name;
</script>

<section>
  <IconBrandSvelte size="36" />
  <p>Svelte Footer</p>
</section>

<style>
  section {
    background: #4A525A;
    color: white;
    display: flex;
    height: 52px;
    padding: 0 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 1.5rem;
    font-weight: 600;
  }
</style>
