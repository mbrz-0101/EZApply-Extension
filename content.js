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
  let fnameCounter = 0;
  let lnameCounter = 0;
  console.log($inputs);

  for (elt in $inputs) {

    // First name
    if ($inputs[elt].name && ($inputs[elt].name === "firstName" || $inputs[elt].name.includes("firstName") || $inputs[elt].name.includes("FirstName"))) {
      $($inputs[elt]).val("Matt");
      fnameCounter++;
    }

    // Last name
    if ($inputs[elt].name && ($inputs[elt].name === "lastName")) {
      $($inputs[elt]).val("Brzowski");
      lnameCounter++;
    }

    // Full name
    if ($inputs[elt].name && fnameCounter === 0 && lnameCounter === 0  && ($inputs[elt].name === "name")) {
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