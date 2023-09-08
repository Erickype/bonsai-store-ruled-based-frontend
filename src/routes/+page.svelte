<script lang="ts">
    import { IconArrowLeft } from "@tabler/icons-svelte";
    import { IconArrowRight } from "@tabler/icons-svelte";

    import Hero1 from "$lib/assets/hero/hero1.jpg";
    import Hero2 from "$lib/assets/hero/hero2.jpg";
    import Hero3 from "$lib/assets/hero/hero3.jpg";
    import Hero4 from "$lib/assets/hero/hero4.jpg";
    import Hero5 from "$lib/assets/hero/hero5.jpg";
5
    let elemCarousel: HTMLDivElement;
    const unsplashIds = [Hero1, Hero2, Hero3, Hero4, Hero5];

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

<div
    class="card grid grid-cols-[auto_1fr_auto] gap-4 items-center variant-ghost-primary"
>
    <!-- Button: Left -->
    <button
        type="button"
        class="btn-icon variant-filled"
        on:click={carouselLeft}
    >
        <IconArrowLeft />
    </button>
    <!-- Full Images -->
    <div
        bind:this={elemCarousel}
        class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto lg:w-modal-wide mr-auto ml-auto"
    >
        {#each unsplashIds as unsplashId}
            <img
                class="snap-center w-[100%] rounded-container-token"
                src={unsplashId}
                alt={unsplashId}
                loading="lazy"
            />
        {/each}
    </div>
    <!-- Button: Right -->
    <button
        type="button"
        class="btn-icon variant-filled"
        on:click={carouselRight}
    >
        <IconArrowRight />
    </button>
</div>
