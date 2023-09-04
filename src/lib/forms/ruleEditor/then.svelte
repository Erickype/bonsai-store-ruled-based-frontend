<script lang="ts">
    import type { Then } from "$lib/server/services/rules/rule";

    export let then: Then[];
    console.log(then);
</script>

<span>Then</span>
<div class="card">
    <section class="p-4">
        <label for="">Set</label>
        {#each then as action}
            {#if action.call === undefined}
                <pre>
                    {action.set?.at(0)?.obj}
                </pre>
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
