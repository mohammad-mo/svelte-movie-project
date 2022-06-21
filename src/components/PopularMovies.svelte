<script>
	export let popular
	import MovieCard from './MovieCard.svelte'
</script>

<h3 class="text-4xl font-bold pb-5">Popular Movies</h3>
<div class="grid grid-cols-movies gap-x-4 gap-y-6">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>
