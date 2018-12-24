var CORGI_TYPES = ['choco', 'oreo', 'velvet'];

const codeMirror = CodeMirror.fromTextArea($('#code').get(0), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "text/javascript"
});

function corgis() {
	const $header = $('header');
	const $corgi = $('<div class="corgi">');
	const corgiType = CORGI_TYPES[getRandomInt(CORGI_TYPES.length)];
	$corgi.addClass(corgiType);

	const transitionDuration = getRandomInt(21) + 5;
	$corgi.css('transition-duration', transitionDuration + 's');

	const targetValue = $header.width() + 131 + 'px';
	const cssProperty = (corgiType === 'oreo') ? 'left' : 'right';
	$header.append($corgi);
	setTimeout(function() {
		$corgi.css(cssProperty, targetValue);
		setTimeout(function() {
			$corgi.remove();
		}, transitionDuration * 1000);
	}, 1);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

codeMirror.on('change', function() {
	if (getRandomInt(5) === 0) {
		corgis();
	}
	localStorage.setItem('code', codeMirror.getValue());
});

function initialize() {
	let code = localStorage.getItem('code') || corgis.toString();
	codeMirror.replaceSelection(code);
	codeMirror.focus();
	corgis();
}

initialize();
