let time = getElementById("timer");
let currentTime = new Date();
setInterval(
	function () {
		currentTime = new Date();
		time.innerHTML = currentTime.toLocaleString();
	},1000
)