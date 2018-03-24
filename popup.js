let el = document.getElementById('work-button');
if (el) {
  document.getElementById('work-button').addEventListener('click', runAutofill);
}

function runAutofill(e) {

  chrome.tabs.executeScript(null,
    {
      code: "fillInForm();"
    })

  window.close();
}

// chrome.tabs.executeScript(null,
//   {
//     code: "var inputs = document.getElementsByTagName('input'); for (var i = 0; i < inputs.length; i++) {inputs[i].style.border = '#bd5d38 4px solid'; inputs[i].style.borderRadius = '5px'}"

//     $($inputs[elt]).css('border', '#bd5d38 4px solid');
//     $($inputs[elt]).css('borderRadius', '5px');
    
//   });