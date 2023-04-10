// Show/hide incentives list items
var incentivesItems = document.querySelectorAll('#incentives li');
var incentivesButton = document.getElementById('incentives-button');
var incentivesExpanded = false;

incentivesItems.forEach(function(item) {
	item.style.display = 'none';
});

incentivesButton.addEventListener('click', function() {
	if (incentivesExpanded) {
		incentivesItems.forEach(function(item) {
			item.style.display = 'none';
		});
		incentivesButton.innerHTML = 'Show More';
		incentivesExpanded = false;
	} else {
		incentivesItems.forEach(function(item) {
			item.style.display = 'block';
		});
		incentivesButton.innerHTML = 'Show Less';
		incentivesExpanded = true;
	}
});
