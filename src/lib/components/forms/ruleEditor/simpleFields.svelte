<script lang="ts">
    export let id: number;
    export let name: string;
    export let salience: number;
    export let desc: string;
</script>

<div class="flex space-x-2">
    <div class="flex-none w-14 h-14">
        <label class="label">
            <span>ID</span>
            <input
                class="input"
                type="text"
                placeholder="Input"
                readonly
                value={id}
                name="id"
            />
        </label>
    </div>

    <div class="flex-auto">
        <label class="label">
            <span>Name</span>
            <input
                class="input"
                type="text"
                placeholder="Input"
                value={name}
                name="name"
            />
        </label>
    </div>

    <div class="flex-auto">
        <label class="label">
            <span>Salience</span>
            <input
                class="input"
                type="number"
                placeholder="Input"
                value={salience}
                min="0"
                name="salience"
            />
        </label>
    </div>
</div>

<label class="label">
    <span>Description</span>
    <textarea
        class="textarea"
        rows="2"
        placeholder="Input"
        value={desc}
        name="desc"
    />
</label>
