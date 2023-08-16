<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
    const { rule } = data;
</script>

<form method="POST" action="?/updateRule" use:enhance>
    <label class="label">
        <span>ID</span>
        <input
            class="input"
            type="text"
            placeholder="Input"
            disabled
            value={rule.id}
            name="id"
        />
    </label>

    <label class="label">
        <span>Name</span>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={rule.name}
            name="name"
        />
    </label>

    <label class="label">
        <span>Description</span>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={rule.desc}
            name="desc"
        />
    </label>

    <label class="label">
        <span>Salience</span>
        <input
            class="input"
            type="number"
            placeholder="Input"
            value={rule.salience}
            min="0"
            name="salience"
        />
    </label>

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
