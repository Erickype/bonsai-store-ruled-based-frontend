<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";
    import type { Then } from "$lib/server/services/rules/rule";

    import When from "$lib/forms/ruleEditor/when.svelte";
    import ThenC from "$lib/forms/ruleEditor/then.svelte";

    export let when: { [key: string]: { [key: string]: PairExpression[] }[] };
    export let then: Then[];
</script>

<div class="flex-1 lg:flex lg:flex-row">
    <div class="flex flex-col w-full lg:basis-1/2 lg:pr-2">
        <When {when} />
    </div>
    <div class="flex flex-col w-full lg:basis-1/2 lg:pl-2">
        <ThenC {then} />
    </div>
</div>
