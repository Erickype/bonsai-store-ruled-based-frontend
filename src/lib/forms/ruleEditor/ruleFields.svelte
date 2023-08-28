<script lang="ts">
    export let when: any;
    export let then: any;
</script>

<div class="columns-2">
    <label class="label">
        <span>When</span>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={when}
            name="when"
        />
    </label>

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
