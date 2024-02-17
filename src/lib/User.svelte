<script>
    import { createEventDispatcher } from "svelte";
    import { fly } from 'svelte/transition';

    export let User;

    const dispatch = createEventDispatcher()

    const remove = () => {
        dispatch('remove', User.userId)
    }
</script>

<div transition:fly={{duration: 300, x:200 }} class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center relative">
    <button on:click={remove} class="absolute right-0 top-0 -mt-3 rounded-full w-5 h-5 text-center bg-red-300 text-white text-sm hover:bg-red-600">X</button>
    <p class="w-10">{User.userId}</p>
    <img src={User.imag} alt="useravatar" class="rounded-full w-14 h-14" />
    <p class="mx-4 w-20">{User.userName}</p>
    <p class="mx-4 w-20">{User.userEmail}</p>
</div>
