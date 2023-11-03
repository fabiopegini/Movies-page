export function navigate(href) {
  window.history.pushState({}, '', href)
  const pushStateEvent = new Event('pushstate')
  window.dispatchEvent(pushStateEvent)
}