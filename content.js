console.log("This content script is working");


// ========================================
// 
// BIG QUESTION!
// Should we write a function that will check the 'type' of the input, and return a string with something like 'email', 'job exp 1', 'job exp 2', etc.?
// e.g. function inputType() {}
// 
// ========================================

function fillInForm() {
  let $inputs = $("input");
  let $labels = $("label");
  console.log($inputs);
  console.log($labels);
  debugger;

  for (elt in $inputs) {
    
    for (label in $labels) {
      if ($labels[label].attributes && $labels[label].attributes["for"]) {
        if ($labels[label].attributes["for"].nodeValue === $inputs[elt].id || $labels[label].attributes["for"].nodeValue === $inputs[elt].name) {
          $($inputs[elt]).val($labels[label].innerText);

          // ===========================
          // We will be using our Regular Expressions to search for things here
          // ===========================









        }
      }
    }


    // ===============================
    // After we look for labels, we use input elements' names and more to look for identifying info
    // ===============================


    // First name
    if ($inputs[elt].name && ($inputs[elt].name === "firstName" || $inputs[elt].name.includes("firstName") || $inputs[elt].name.includes("FirstName"))) {
      $($inputs[elt]).val("Matt");
    }

    // Middle name


    // Last name
    if ($inputs[elt].name && ($inputs[elt].name === "lastName")) {
      $($inputs[elt]).val("Brzowski");
    }

    // Full name
    if ($inputs[elt].name && ($inputs[elt].name === "name")) {
      $($inputs[elt].val("Matt Brzowski"));
    }
    // Email
    if ($inputs[elt].name && ($inputs[elt].name === "email")) {
      $($inputs[elt]).val("my@email.online");
    }
    
    // Address

    // Address 2

    // City

    // State

    // Zipcode


    // Job Title 1

    // Job Company 1

    // Job Duties 1

    // Job Phone 1
    
    // Job Supervisor 1 

    // Job Address 1
    
    // Job Address 2

    // Job City 1

    // Job State 1

    // Job Zip 1


    // School Name 1

    // Degree 

    // Major

    // GPA


    // Certification Title 1
    
    // Certification Detail 1



    // Request additional fields button?
  }

}



$(document).on('click', '#add-job', addnewJob);