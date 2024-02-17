<script>
    import {tweened} from 'svelte/motion'
    import { onMount } from 'svelte';
    import { cubicIn, quintOut } from 'svelte/easing';

    import FilterUser from "./filterUser.svelte";
    import User from "./User.svelte";
    import NewUser from "./newUser.svelte";

    import {users, remove, add} from '../store'
    import { flip } from 'svelte/animate';

    $: filteredUsers = $users;

    const userFilter = ({detail}) => {
        console.log(detail)
        if (detail === 'null') {
            filteredUsers = $users;
            return;
        }
        const active = detail === "true";
        filteredUsers = $users.filter(user => user.active === active);
    }

    const progress = tweened(0, {
        duration: 500,
        easing: cubicIn
    });

    onMount(() => {
        progress.set(filteredUsers.length);
    })
</script>

<div>
    <h1 class="text-2xl text-center mt-10">List of Users</h1>

    <div class="flex justify-between mx-4 items-center">
        <FilterUser on:userFilter={userFilter} />
        <NewUser on:newUser={add} />
    </div>

    <progress max=10 value={$progress} class="w-full mx-4"></progress>

    {#each filteredUsers as user, i (user.userId)}
        <div animate:flip={{ delay: 250, duration: 400, easing: quintOut }}>
            <User on:remove={remove} User={user}/>
        </div>
    {:else}
        <p>No users found</p>
    {/each}

</div>
