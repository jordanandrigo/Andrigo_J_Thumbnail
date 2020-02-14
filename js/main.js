(() => {
	//variable stack frist
	const keys = Array.from(document.querySelectorAll('.key'));
	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

	function removePlayingClass(event) {
		//remove css rules applied on keypress -> make it look unselected agains
		event.target.classList.remove('playing');
	}

	function playSound(event) {
		//even tis the event object that gets generated when you push any key
		//it contains all kinds of infoemation abou the event -> the tartget, what called it,
		//where it happened in the app etc
		const audio = document.querrySelector(`audio[data-key="${event.keyCode}"]`),
			key = document.querrySelector(`div[data-key="${event.keyCode}"]`);


		//the ! is a test for inequallity -> if this expression is NOT true, the do somehting also called a bang operator
		if (!audio) { return } // a return is a way to stop function execution


		audio.currentTime = 0;
		audio.play();

		key.classList.add('playing');
	}

	//listen for the keyboard event, and then do something with it 
	window.addEventListener('keydown', playSound);


})();