<script lang="ts">
    export let id: number;
    export let name: string;
    export let salience: number;
    export let desc: string;
</script>

<div class="columns-3">
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">ID</div>
        <input
            class="input w-min"
            type="text"
            placeholder="Input"
            readonly
            value={id}
            name="id"
        />
    </div>

    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">Name</div>
        <input
            class="input"
            type="text"
            placeholder="Input"
            value={name}
            name="name"
        />
    </div>

    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">Salience</div>
        <input
            class="input"
            type="number"
            placeholder="Input"
            value={salience}
            min="0"
            name="salience"
        />
    </div>
</div>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim">Description</div>
    <input
        class="input"
        type="text"
        placeholder="Input"
        value={desc}
        name="desc"
    />
</div>
