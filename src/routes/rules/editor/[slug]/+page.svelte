<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    import SimpleFields from "$lib/forms/ruleEditor/simpleFields.svelte";
    import RuleFields from "$lib/forms/ruleEditor/ruleFields.svelte";

    export let data: PageServerData;
    let { rule } = data;
</script>

<div class="card p-4 h-full variant-ghost-surface">
    <form
        class="h-full flex flex-col"
        method="POST"
        action="?/updateRule"
        use:enhance
    >
        <SimpleFields
            id={rule.id}
            name={rule.name}
            salience={rule.salience}
            desc={rule.desc}
        />
        <hr class="!border-t-2 mt-4 mb-2" />
        <RuleFields when={rule.when} then={rule.then} />

        <div class="pt-4 flex justify-center">
            <button type="submit" class="btn variant-filled">Update</button>
        </div>
    </form>
</div>
