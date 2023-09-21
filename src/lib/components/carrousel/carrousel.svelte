<script lang="ts">
    import { IconArrowLeft } from "@tabler/icons-svelte";
    import { IconArrowRight } from "@tabler/icons-svelte";

    let elemCarousel: HTMLDivElement;
    export let images: string[];

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
