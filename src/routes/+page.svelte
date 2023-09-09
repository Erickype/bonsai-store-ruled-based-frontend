<script lang="ts">
    import { IconArrowLeft } from "@tabler/icons-svelte";
    import { IconArrowRight } from "@tabler/icons-svelte";

    import Hero1 from "$lib/assets/hero/hero1.jpg";
    import Hero2 from "$lib/assets/hero/hero2.jpg";
    import Hero3 from "$lib/assets/hero/hero3.jpg";
    import Hero4 from "$lib/assets/hero/hero4.jpg";
    import Hero5 from "$lib/assets/hero/hero5.jpg";

    let elemCarousel: HTMLDivElement;
    const images = [Hero1, Hero2, Hero3, Hero4, Hero5];

    function carouselLeft(): void {
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }

    function carouselRight(): void {
        const x =
            elemCarousel.scrollLeft ===
            elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }
</script>

<div class="card flex variant-soft-primary relative">
    <!-- Button: Left -->
    <button
        type="button"
        class="btn-icon variant-filled-tertiary absolute left-0 transform translate-x-1/2 top-1/2 -translate-y-1/2"
        on:click={carouselLeft}
    >
        <IconArrowLeft />
    </button>
    <!-- Full Images -->
    <div
        bind:this={elemCarousel}
        class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto lg:w-modal-wide mx-auto ml-auto"
    >
        {#each images as image}
            <img
                class="snap-center w-[100%] rounded-container-token"
                src={image}
                alt={image}
                loading="lazy"
            />
        {/each}
    </div>
    <!-- Button: Right -->
    <button
        type="button"
        class="btn-icon variant-filled-tertiary absolute right-0 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        on:click={carouselRight}
    >
        <IconArrowRight />
    </button>
</div>
