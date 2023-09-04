<script lang="ts">
    import type {
        PairExpression,
        Set,
        Then,
    } from "$lib/server/services/rules/rule";
    import ConditionsSelect from "./conditionsSelect.svelte";

    export let then: Then[];

    function getSelected(set?: Set): string {
        if (set) {
            if (set.div) return "div";
            if (set.minus) return "minus";
            if (set.mod) return "mod";
            if (set.mul) return "mul";
            if (set.plus) return "plus";
        }
        return "";
    }
    function getSelectedObj(set?: Set): PairExpression[] {
        if (set) {
            if (set.div) return set.div;
            if (set.minus) return set.minus;
            if (set.mod) return set.mod;
            if (set.mul) return set.mul;
            if (set.plus) return set.plus;
        }
        return [];
    }
</script>

<span>Then</span>
<div class="card">
    <section class="p-4">
        <h4 class="h4">Set</h4>
        {#each then as action}
            {#if action.call === undefined}
                <div class="card mb-2">
                    <section class="p-4">
                        <div class="grid gap-4 grid-cols-2 grid-rows-1 pb-2">
                            <input
                                class="input"
                                type="text"
                                placeholder="Input"
                                value={action.set?.at(0)?.obj}
                            />
                            <ConditionsSelect
                                selected={getSelected(action.set?.at(1))}
                            />
                        </div>
                    </section>
                    <section class="p-4">
                        <div class="grid gap-4 grid-cols-2 grid-rows-1 pb-2">
                            {#each getSelectedObj(action.set?.at(1)) as expression}
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
                            {/each}
                        </div>
                    </section>
                </div>
            {/if}
        {/each}
    </section>
    <section class="p-4">
        <h4 class="h4">Call</h4>
        <div class="grid gap-4 grid-cols-2 grid-rows-1">
            {#each then as action}
                {#if action.set === undefined}
                    <label class="label">
                        <span>Command</span>
                        <input
                            class="input"
                            type="text"
                            placeholder="Input"
                            value={action.call?.at(0)}
                        />
                    </label>
                    <label class="label">
                        <span>Constant</span>
                        <input
                            class="input"
                            type="text"
                            placeholder="Input"
                            value={action.call?.at(1).const}
                        />
                    </label>
                {/if}
            {/each}
        </div>
    </section>
</div>
