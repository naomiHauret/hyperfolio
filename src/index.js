import { h, app } from "hyperapp"
import { location } from "@hyperapp/router"

import state from "app/state"
import actions from "app/actions"

import App from "app/views"
import "assets/styles/index.css"
const enhancedActions = Object.assign({}, { location: location.actions }, actions)

const view = (state, actions) => <App state={state} actions={actions} />
const main = app(state, enhancedActions, view, document.body)
const unsubscribe = location.subscribe(main.location)
