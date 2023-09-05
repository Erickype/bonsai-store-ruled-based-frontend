<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";
    import ConditionsSelect from "./conditionsSelect.svelte";
    import PairExpressionSelector from "./pairExpressionSelector.svelte";

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
                        <PairExpressionSelector {expressions} />
                    </section>
                {/each}
            {/each}
        </section>
    {/each}
</div>
