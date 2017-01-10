// ------------------------------------
// Constants
// ------------------------------------
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'

// ------------------------------------
// Actions
// ------------------------------------
export function openSidebar (value = true) {
  return {
    type    : SIDEBAR_TOGGLE,
    payload : true
  }
}

export function closeSidebar (value = false) {
  return {
    type    : SIDEBAR_TOGGLE,
    payload : false
  }
}

export const actions = {
  openSidebar,
  closeSidebar
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIDEBAR_TOGGLE] : (state, action) => state = action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function sidebarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
