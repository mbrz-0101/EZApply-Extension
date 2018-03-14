document.getElementById("work-button").addEventListener('click', executeTheseFunctions);

function executeTheseFunctions(e) {

  // highlightInputFields
  chrome.tabs.executeScript(null,
    {
      code: "var inputs = document.getElementsByTagName('input'); for (var i = 0; i < inputs.length; i++) {inputs[i].style.border = 'cadetblue 4px solid'}"
    });
  chrome.tabs.executeScript(null,
    {
      code: "fillInForm();"
    })

  window.close();
}
