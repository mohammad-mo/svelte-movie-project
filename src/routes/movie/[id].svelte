<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
				import.meta.env.VITE_API_KEY
			}&language=en-US`,
		)
		const movieDetail = await res.json()
		if (movieDetail) {
			return {
				props: { movieDetail },
			}
		}

		return {
			status: 404,
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition'
	import { afterNavigate } from '$app/navigation'

	let previousPage
	afterNavigate((navigaton) => {
		previousPage = navigaton.from.pathname
	})

	export let movieDetail
</script>

<div
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
	class="p-5 shadow-md rounded-md"
>
        <a href={previousPage}>
	    <button
		    class="mb-5 border border-gray-500 px-3 py-1.5 rounded-md hover:bg-black hover:text-white transition-all shadow-md"
	    >
	            Go Back	
	    </button>
        </a>
	<div>
		<img
			class="w-full rounded-md"
			src={'https://image.tmdb.org/t/p/w1280' + movieDetail.backdrop_path}
			alt={movieDetail.title}
		/>
	</div>
	<div class="flex justify-between items-center space-x-4 my-4">
		<h1 class="text-4xl font-bold">{movieDetail.title}</h1>
	</div>
	<div class="space-y-2">
		<p class="text-lg">{movieDetail.overview}</p>
		<p>
			<span class="font-semibold text-lg">Status:</span>
			{movieDetail.status}
		</p>
		<p>
			<span class="font-semibold text-lg">Release Date:</span>
			{movieDetail.release_date}
		</p>
		{#if movieDetail.budget > 0}
			<p>
				<span class="font-semibold text-lg">Budget:</span>
				{movieDetail.budget}
			</p>
		{/if}
		<p>
			<span class="font-semibold text-lg"
				>Rating:
			</span>{movieDetail.vote_average}/10
		</p>
		<p>
			<span class="font-semibold text-lg">Time:</span>
			{movieDetail.runtime} minutes
		</p>
	</div>
</div>
