<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    import SimpleFields from "$lib/forms/ruleEditor/simpleFields.svelte";

    export let data: PageServerData;
    let { rule } = data;
    console.log(rule);
</script>

<div class="card p-4">
    <form method="POST" action="?/updateRule" use:enhance>
        <SimpleFields
            id={rule.id}
            name={rule.name}
            salience={rule.salience}
            desc={rule.desc}
        />

        <label class="label">
            <span>When</span>
            <input
                class="input"
                type="text"
                placeholder="Input"
                value={rule.when}
                name="when"
            />
        </label>

        <label class="label">
            <span>Then</span>
            <input
                class="input"
                type="text"
                placeholder="Input"
                value={rule.then}
                name="then"
            />
        </label>

        <button type="submit" class="btn variant-filled">Update</button>
    </form>
</div>
