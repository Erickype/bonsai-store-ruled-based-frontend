<script lang="ts">
    import Carrousel from "$lib/carrousel/carrousel.svelte";

    import Hero1 from "$lib/assets/hero/hero1.jpg";
    import Hero2 from "$lib/assets/hero/hero2.jpg";
    import Hero3 from "$lib/assets/hero/hero3.jpg";
    import Hero4 from "$lib/assets/hero/hero4.jpg";
    import Hero5 from "$lib/assets/hero/hero5.jpg";

    const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
</script>

<Carrousel {images} />
