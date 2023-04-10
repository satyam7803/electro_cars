// Add active class to current nav link
var navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
	if (link.href === window.location.href) {
		link.classList.add('active');
	}
});

// Toggle model info on click
var modelToggles = document.querySelectorAll('.model-info a');

modelToggles.forEach(function(toggle) {
	toggle.addEventListener('click', function(event) {
		event.preventDefault();
		var modelInfo = this.parentNode;
		modelInfo.classList.toggle('active');
	});
});
