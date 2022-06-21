<script>
	export let movie
</script>

<div class="flex flex-col justify-between p-4 shadow-md rounded-md">
	<img
		class="w-full h-[40vh] object-cover rounded-md"
		src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
		alt={movie.title}
	/>
	<div class="my-4 space-y-2">
		<h2 class="text-lg font-bold">{movie.title}</h2>
		<p>Rating: {movie.vote_average}</p>
	</div>
	<button
		class="w-full border border-gray-500 rounded-md py-1 hover:bg-black hover:text-white transition-all"
		><a sveltekit:prefetch href={`/movie/${movie.id}`}>Detail</a></button
	>
</div>
