<script>
	let inputValue = ''
	let active = false
	import { goto } from '$app/navigation'
	import { fly } from 'svelte/transition'

	const cancelInactive = () => {
		inputValue ? (active = true) : (active = false)
	}

	const submitSearch = () => {
		goto('/search/' + inputValue)
	}
</script>

<form
	on:submit|preventDefault={submitSearch}
	class="relative w-[80%] sm:w-1/2 mb-4"
>
	{#if !active}
		<label
			in:fly={{ y: -10, duration: 500 }}
			out:fly={{ y: -10, duration: 500 }}
			class="absolute text-sm top-1/4 left-14 -translate-x-1/2 pointer-events-none px-4"
			for="search-movie">Search Movie</label
		>
	{/if}
	<input
		class={`w-full border border-black text-sm outline-none py-2 px-4 transition-all ease-in-out font-semibold rounded-md ${
			active ? 'bg-slate-50' : ''
		}`}
		on:blur={cancelInactive}
		on:focus={() => (active = true)}
		bind:value={inputValue}
		type="text"
		id="search-movie"
	/>
	{#if inputValue}
		<button
			in:fly={{ x: 0, duration: 500 }}
			out:fly={{ x: 20, duration: 500 }}
			class="text-sm px-4 bg-black text-white font-semibold border border-black absolute bottom-1/5 right-10 translate-x-1/2 h-full rounded-r-md cursor-pointer"
			>Search
		</button>
	{/if}
</form>
