import { h } from "hyperapp"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import YouTubePlayer from "youtube-player"

export default ({url, loop, autoplay, videoId, type}) => {
    const id = `player-${videoId}`
    return <div data-observable={id} class={cxs({
							pointerEvents: "none",
							position: "relative",
							overflow: "hidden",
                            height: "85vh",
                            maxWidth: type === "cover" ? "100vw" : "65vw",
						    margin: "auto 0",
						    transform: "translateY(-1.75%)",
						})}>
						<div id={id} class={cxs({
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								marginTop: ds.get("spacing.video.ytWatermark"),
								":focus" : {
									outline: 0,
								}
                            })}
                            oncreate={() => {
								let player
								player = YouTubePlayer(id, {
                                    videoId,
									playerVars: {
										rel: 0,
										controls: 0,
										showinfo: 0,
										autoplay: autoplay === true ? "1" : "0",
										loop: loop === true ? "1" : "0",
										modestbranding: 0,
									},
								})

								player.on("stateChange", (e) => {
									if (e.data === 0) {
										player.playVideo() // when video ends, relaunch without reloading the video
									}
                                })

                                let observables = document.querySelectorAll(`[data-observable='${id}']`)
                                let observer = new IntersectionObserver((entries) => {
                                    entries.forEach((entry) => {
                                        const { isIntersecting, intersectionRatio } = entry
                                        intersectionRatio > 0.45 && isIntersecting === true
                                            ? player.playVideo()
                                            : player.pauseVideo()
                                    })
                                }, {

                                threshold: [0, 0.25, 0.5, 0.75, 1]
                                })
                                return observables.forEach((observable) => {
                                    observer.observe(observable)
                                })
							}} />
					</div>
}