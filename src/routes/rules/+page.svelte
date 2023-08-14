<script lang="ts">
    import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
    import type { TableSource } from "@skeletonlabs/skeleton";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;

    const { rules } = data;

    const tableSimple: TableSource = {
        head: ["ID", "Name", "Description", "Salience", "When", "Then"],
        body: tableMapperValues(rules, [
            "id",
            "name",
            "desc",
            "salience",
            "when",
            "then",
        ]),
    };
</script>

<Table source={tableSimple} interactive={true} />
