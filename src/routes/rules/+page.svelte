<script lang="ts">
    import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
    import type { TableSource } from "@skeletonlabs/skeleton";
    import type { PageServerData } from "./$types";
    import { goto } from "$app/navigation";

    export let data: PageServerData;

    const { rules } = data;

    const tableSimple: TableSource = {
        head: ["ID", "Name", "Description", "Salience"],
        body: tableMapperValues(rules, [
            "id",
            "name",
            "desc",
            "salience"
        ]),
    };

    function redirectEditor(event: Event) {
        const e = event as CustomEvent<String>;
        const data = e.detail;
        goto("rules/editor/" + data[0]);
    }
</script>

<Table source={tableSimple} interactive={true} on:selected={redirectEditor} />
