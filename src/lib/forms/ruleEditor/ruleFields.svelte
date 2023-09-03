<script lang="ts">
    import type { PairExpression } from "$lib/server/services/rules/rule";

    import When from "$lib/forms/ruleEditor/when.svelte";
    import Then from "$lib/forms/ruleEditor/then.svelte";

    export let when: { [key: string]: { [key: string]: PairExpression[] }[] };
    export let then: string[];
</script>

<div class="flex-1 lg:flex lg:flex-row">
    <div class="w-full lg:basis-1/2 lg:pr-2">   
        <When when={when}/>
    </div>
    <div class="w-full lg:basis-1/2 lg:pl-2">
        <Then then={then}/>
    </div>
</div>
