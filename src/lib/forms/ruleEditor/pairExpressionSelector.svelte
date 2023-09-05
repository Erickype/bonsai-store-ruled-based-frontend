<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";

    export let expressions: PairExpression[];
</script>

{#each expressions as expression}
    <section class="p-2">
        {#if expression.const == undefined}
            <input
                class="input"
                type="text"
                value={expression.obj}
                name="obj"
            />
        {:else}
            <input
                class="input"
                type="text"
                value={expression.const}
                name="const"
            />
        {/if}
    </section>
{/each}
