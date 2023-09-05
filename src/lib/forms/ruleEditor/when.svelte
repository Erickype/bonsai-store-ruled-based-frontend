<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";
    import ConditionsSelect from "./conditionsSelect.svelte";

    export let when: { [key: string]: { [key: string]: PairExpression[] }[] };
</script>

<span>When</span>
<div class="card flex-1">
    {#each Object.entries(when) as [condition, compoundConditions]}
        <section class="p-4">
            <ConditionsSelect selected={condition} />
            {#each compoundConditions as compoundCondition}
                {#each Object.entries(compoundCondition) as [operator, expressions]}
                    <section class="p-4">
                        <ConditionsSelect selected={operator} />
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
                    </section>
                {/each}
            {/each}
        </section>
    {/each}
</div>
