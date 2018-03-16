document.getElementById("work-button").addEventListener('click', executeTheseFunctions);

function executeTheseFunctions(e) {

  // highlightInputFields
  chrome.tabs.executeScript(null,
    {
      code: "var inputs = document.getElementsByTagName('input'); for (var i = 0; i < inputs.length; i++) {inputs[i].style.border = '#bd5d38 4px solid'; inputs[i].style.borderRadius = '5px'}"
    });
  chrome.tabs.executeScript(null,
    {
      code: "fillInForm();"
    })

  window.close();
}
