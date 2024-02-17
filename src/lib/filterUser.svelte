<script>
    import { createEventDispatcher } from 'svelte'


    let dispatch = createEventDispatcher()

    const userFilter = (e) => {
        dispatch('userFilter', e.target.value)
    }

</script>

<div class="mt-4">
    <label for="user-filter">Filter User</label>
    <select on:change={userFilter} name="user-filter" id="user-filter" class="border rounded-lg px-4 py-2 ml-4">
        <option value="null">All</option>
        <option value={true}>Active</option>
        <option value={false}>Inactive</option>
    </select>
</div>
