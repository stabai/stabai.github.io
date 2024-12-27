const codeMirror = CodeMirror.fromTextArea($('#code').get(0), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "text/javascript"
});

function checkBuffer(addToBuffer) {
  if (!addToBuffer || addToBuffer.length !== 1 || addToBuffer === buffer.substring(buffer.length - 1)) {
    // Ignore repeat characters or multiple characters pasted in at a time.
    return;
  }
  buffer += addToBuffer;
  buffer = buffer.substring(buffer.length - 4);
  if (buffer.toLowerCase() === 'yuni') {
    magicWord({'type': 'cat', 'imageUrl': 'cat-calico.gif'});
  } else if (buffer.toLowerCase() === 'coco') {
    magicWord({'type': 'cat', 'imageUrl': 'cat-midnight.gif'});
  }
}

codeMirror.on('change', function (instance, changeObj) {
  if (getRandomInt(3) === 0) {
    animals();
  }
  localStorage.setItem('code', codeMirror.getValue());
  checkBuffer(changeObj.text.join(''));
});

function initialize() {
  let code = localStorage.getItem('code') || animals.toString();
  codeMirror.replaceSelection(code);
  codeMirror.focus();
  animals();
}

initialize();
