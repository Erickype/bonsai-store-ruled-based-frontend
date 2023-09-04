<script lang="ts">
    const conditions: string[] = [
        "and",
        "or",
        "eq",
        "not",
        "gt",
        "gte",
        "lt",
        "lte",
        "bor",
        "band",
        "plus",
        "div",
        "minus",
        "mod",
        "mul",
    ];

    export let selected: string;

    $: {
        selected;
    }

    function UpdateSelected(e: Event) {
        const newValue = (e.target as HTMLSelectElement).value;
        selected = newValue;
    }
</script>

<select
    class="select"
    value={selected}
    name={selected}
    on:change={UpdateSelected}
>
    {#each conditions as condition}
        <option value={condition}>{condition.toLocaleUpperCase()}</option>
    {/each}
</select>
