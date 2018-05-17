import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ leftWing, rightWing, body }) => (
  <div
    id="unicorn"
    class={cxs({
      position: "absolute",
      width:"240px",
      top: "50%",
			transform: "translate(-50%,-50%)",

    })}
  >
  	<img
      id="leftWing"
      src={leftWing}
      class={cxs({
        position: "absolute",
        top:"140px",
        left:"-50px",
        height:"100px",
      })}
    />
  	<img
      id="rightWing"
      src={rightWing}
      class={cxs({
        position: "absolute",
        top:"140px",
        left:"195px",
        height:"100px",
      })}
    />
  	<img
      src={body}
      class={cxs({
        position: "absolute",
        top:"0",
        left:"0",
        width:"240px",
      })}
    />
  </div>
)
