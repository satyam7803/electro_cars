// Add click event listener to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
	link.addEventListener('click', (event) => {
		// Prevent default link behavior
		event.preventDefault();
		// Get the target page URL
		const targetPage = event.target.getAttribute('href');
		// Redirect to target page
		window.location.href = targetPage;
	});
});