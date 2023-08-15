<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData
    const {rule} = data
    
</script>

<pre>
    {rule.id}
</pre>