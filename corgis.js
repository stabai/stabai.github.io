var ANIMALS = [
	{ 'type': 'cat', 'imageUrl': 'cat-calico.gif' },
	{ 'type': 'cat', 'imageUrl': 'cat-midnight.gif' },
	{ 'type': 'cat', 'imageUrl': 'cat-noogler.gif' },
	{ 'type': 'cat', 'imageUrl': 'cat-orange.gif' },
	{ 'type': 'cat', 'imageUrl': 'cat-siamese.gif' },
	{ 'type': 'cat', 'imageUrl': 'cat-stripes.gif' },
	{ 'type': 'corgi', 'imageUrl': 'corgi-choco-xmas.gif' },
	{ 'type': 'corgi', 'imageUrl': 'corgi-choco.gif' },
	{ 'type': 'corgi', 'imageUrl': 'corgi-oreo-xmas.gif' },
	{ 'type': 'corgi', 'imageUrl': 'corgi-oreo.gif' },
	{ 'type': 'corgi', 'imageUrl': 'corgi-velvet-xmas.gif' },
	{ 'type': 'corgi', 'imageUrl': 'corgi-velvet.gif' },
];

const codeMirror = CodeMirror.fromTextArea($('#code').get(0), {
	lineNumbers: true,
	matchBrackets: true,
	mode: "text/javascript"
});

function animals() {
	const $header = $('header');
	const $animal = $('<div class="animal">');
	const animal = ANIMALS[getRandomInt(ANIMALS.length)];

	$animal.addClass(animal.type);
	$animal.css('background-image', `url(${animal.imageUrl})`);

	const flipped = getRandomInt(2) === 1;
	const cssProperty = flipped ? 'left' : 'right';
	if (flipped) {
		$animal.addClass('flipped');
	}

	const transitionDuration = getRandomInt(21) + 5;
	$animal.css('transition-duration', transitionDuration + 's');

	const targetValue = $header.width() + 131 + 'px';

	$header.append($animal);
	setTimeout(function () {
		$animal.css(cssProperty, targetValue);
		setTimeout(function () {
			$animal.remove();
		}, transitionDuration * 1000);
	}, 1);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

codeMirror.on('change', function () {
	if (getRandomInt(3) === 0) {
		animals();
	}
	localStorage.setItem('code', codeMirror.getValue());
});

function initialize() {
	let code = localStorage.getItem('code') || animals.toString();
	codeMirror.replaceSelection(code);
	codeMirror.focus();
	animals();
}

initialize();
