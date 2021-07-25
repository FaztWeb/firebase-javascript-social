export const dashboard = () => {

	const dashboard = document.createElement('div')

	dashboard.innerHTML = `
		<h1>Dashboard</h1>
		<button id="logout">logout</button>
	`

	const button = dashboard.querySelector('#logout')
	button.addEventListener('click', e => {
		alert('clicked')
	})

	return dashboard
}