<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${
				import.meta.env.VITE_API_KEY
			}&language=en-US&query=${params.name}&page=1&include_adult=false`,
		)
		const data = await res.json()
		if (data) {
			return {
				props: { searchedMovie: data.results },
			}
		}

		return {
			status: 404,
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition'
	import MovieCard from '../../components/MovieCard.svelte'
	export let searchedMovie
</script>

<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<button
		class="mb-5 border border-gray-500 px-3 py-1.5 rounded-md hover:bg-black hover:text-white transition-all shadow-md"
	>
		<a href="/">Go Back</a>
	</button>
	<div class="grid grid-cols-movies gap-x-4 gap-y-6">
		{#each searchedMovie as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>
