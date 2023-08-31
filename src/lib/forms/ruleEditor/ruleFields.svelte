<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";

    export let when: { [key: string]: { [key: string]: PairExpression[] }[] };
    export let then: string[];

</script>

<div class="columns-2">
    <span>When</span>
    {#each Object.entries(when) as [condition, compoundConditions]}
        <p>{condition}</p>
        {#each compoundConditions as compoundCondition}
            {#each Object.entries(compoundCondition) as [operator, expressions]}
                <p>{operator}</p>
                {#each expressions as expression}
                    {#if expression.const == undefined}
                        <p>{expression.obj}</p>
                    {:else}
                        <p>{expression.const}</p>
                    {/if}
                {/each}
            {/each}
        {/each}
    {/each}

    <label class="label">
        <span>Then</span>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={then}
            name="then"
        />
    </label>
</div>
