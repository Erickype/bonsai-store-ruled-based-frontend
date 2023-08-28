<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
    const { rule } = data;
    console.log(rule);
</script>

<form method="POST" action="?/updateRule" use:enhance>
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">ID</div>
        <input
            class="input"
            type="text"
            placeholder="Input"
            readonly
            value={rule.id}
            name="id"
        />
    </div>

    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">Name</div>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={rule.name}
            name="name"
        />
    </div>

    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">Description</div>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={rule.desc}
            name="desc"
        />
    </div>

    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">Salience</div>
        <input
            class="input"
            type="number"
            placeholder="Input"
            value={rule.salience}
            min="0"
            name="salience"
        />
    </div>

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
