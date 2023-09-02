<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";

    import ConditionsSelect from "$lib/forms/ruleEditor/conditionsSelect.svelte";

    export let when: { [key: string]: { [key: string]: PairExpression[] }[] };
    export let then: string[];
</script>

<div class="flex-1 lg:flex lg:flex-row">
    <div class="w-full lg:basis-1/2 lg:pr-2">   
        <span>When</span>
        <div class="card">
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
    </div>
    <div class="w-full lg:basis-1/2 lg:pl-2">
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
</div>
