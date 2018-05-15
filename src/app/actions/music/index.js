export default {
	togglePlayMusic: () => (state) => ({
		isPlayingMusic: !state.isPlayingMusic,
		...state,
	}),
}
