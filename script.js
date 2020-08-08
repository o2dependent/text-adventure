// - DOM Variables
let text = document.querySelector('#text');
let input = document.querySelector('#input');
let start = document.querySelector('#start');
let container = document.querySelector('#container');
let options = document.querySelector('#options');

// - Variables
let curRoom = 1,
	firstEntrance = true,
	userName = 'I am here for all',
	gameActive = false,
	isTyping = false,
	idInterval;

// - Event Listeners
start.addEventListener('click', (e) => {
	rooms[`room${curRoom}`]();
	container.style = 'display: flex';
	start.style = 'display: none';
	input.addEventListener('keypress', (e) => {
		if (e.key === 'Enter' && !isTyping) {
			let userInput = Number(input.value);
			input.value = '';
			rooms[`room${curRoom}`](userInput);
		}
	});
});

// - Rooms Object Functions
let rooms = {
	roomPrint: () => {
		// Will type the room entrance text to screen if it is a valid room number (edit conditional if room about changes)
		if (curRoom >= 1 && curRoom < 5) {
			typing(story[`room${curRoom}`].entrance);
			options.innerHTML = story[`room${curRoom}`].options;
			input.placeholder = '';
		}
	},
	room1: (num) => {
		input.placeholder = '';
		// Check if user input is an option and change rooms
		if (num === 1) {
			curRoom = 2;
		} else if (num === 2) {
			curRoom = 3;
		} else {
			input.placeholder = 'Please enter a valid option';
		}
		// Print room data if not the same room
		if (curRoom != 1 || firstEntrance) {
			rooms.roomPrint();
			firstEntrance = false;
		}
	},
	room2: (num) => {
		input.placeholder = '';
		// Check if user input is an option and change rooms
		if (num === 1) {
			curRoom = 1;
		} else {
			input.placeholder = 'Please enter a valid option';
		}
		// Print room data if not the same room
		if (curRoom != 2) {
			rooms.roomPrint();
		}
	},
	room3: (num) => {
		input.placeholder = '';
		// Check if user input is an option and change rooms
		if (num === 1) {
			curRoom = 1;
		} else {
			input.placeholder = 'Please enter a valid option';
		}
		// Print room data if not the same room
		if (curRoom != 3) {
			rooms.roomPrint();
		}
	},
};

// - Functions
function typing(string) {
	isTyping = true;
	input.placeholder = '';
	text.innerHTML = '';
	arr = string.split('');
	let i = 0;
	idInterval = setInterval(() => {
		text.innerHTML = text.innerHTML + arr[i];
		if (i === arr.length - 1) {
			clearInterval(idInterval);
			isTyping = false;
		} else {
			i++;
		}
	}, 50);
}
