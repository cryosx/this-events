//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navItems = document.getElementsByClassName('navi');

for (var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('click', function() {
		
		var navA = this.querySelector('.inner');
		// console.log(navA.style);
		if (navA.style.display === 'none' || navA.style.display === '') {
			navA.style.display = 'block';
		} else {
			navA.style.display = 'none';
		}
		// this.querySelector(".inner").style.display = "none";
	});
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restaurantNames = document.getElementsByClassName('name');

for (var i = 0; i < restaurantNames.length; i++) {
	restaurantNames[i].addEventListener('click', function() {
		
		var restaurantName = this.querySelector('.menu');
		// console.log(navA.style);
		if (restaurantName.style.display === 'none' || restaurantName.style.display === '') {
			restaurantName.style.display = 'block';
		} else {
			restaurantName.style.display = 'none';
		}
		// this.querySelector(".inner").style.display = "none";
	});
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/


var downVotes = document.getElementsByClassName('thumb');

for (var i = 0; i < downVotes.length; i++) {
	var counter = document.createElement('div');
	counter.setAttribute('class','downvotes');
	downVotes[i].appendChild(counter);
	downVotes[i].addEventListener('click', function() {
		
		var downVote = this.querySelector('.downvotes');
		var count;
		if (downVote.innerHTML === undefined) {
			count = 0;
		} else {
			count = downVote.innerHTML;
		}
		downVote.innerHTML = ++count;
	});
}