console.log("This content script is working");

function fillInForm() {
  const fNameRegex = /f(irst)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
  const lNameRegex = /l(ast)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
  const emailRegex = /e(\W)?mail/i;
  const phoneRegex = /phone/i;
  const addressRegex = /address/i;
  const streetRegex = /street/i;
  const cityRegex = /city/i;
  const stateRegex = /state/i;
  const zipRegex = /zip/i;
  const companyNameRegex;
  const companyAddressRegex;
  const companyPhoneRegex;
  const companyPositionRegex;
  const schoolNameRegex;
  const schoolAddressRegex;
  const startYearRegex;
  const fieldOfStudyRegex;
  const skillRegex;
  const certificateRegex;

  let $inputs = $("input");
  let $labels = $("label");

  let fName = JSON.parse(localStorage.getItem('fname'));
  let lName = JSON.parse(localStorage.getItem('lname'));
  let email = JSON.parse(localStorage.getItem('email'));
  let phoneNumber = JSON.parse(localStorage.getItem('phonenumber'));
  let streetAddress = JSON.parse(localStorage.getItem('streetAddress'));
  let city = JSON.parse(localStorage.getItem('city'));
  let state = JSON.parse(localStorage.getItem('state'));
  let zipCode = JSON.parse(localStorage.getItem('zipcode'));
  let companyName = JSON.parse(localStorage.getItem('companyname'));
  let companyAddress = JSON.parse(localStorage.getItem('companyaddress'));
  let companyPhone = JSON.parse(localStorage.getItem('companyphone'));
  let companyPosition = JSON.parse(localStorage.getItem('companyposition'));
  let schoolName = JSON.parse(localStorage.getItem('schoolname'));
  let schoolAddress = JSON.parse(localStorage.getItem('schooladdress'));
  let startYear = JSON.parse(localStorage.getItem('startyear'));
  let fieldOfStudy = JSON.parse(localStorage.getItem('studyfield'));
  let skill = JSON.parse(localStorage.getItem('skill'));
  let certificate = JSON.parse(localStorage.getItem('certificate'));


  console.log($inputs);
  console.log($labels);

  // loop through input elements
  for (elt in $inputs) {

    // loop through label elements
    for (label in $labels) {

      // Ensures the current label element has a for attribute
      if ($labels[label].attributes && $labels[label].attributes["for"]) {

        // If the for attribute matches the input element's id, check regex
        if ($labels[label].attributes["for"].nodeValue === $inputs[elt].id || $labels[label].attributes["for"].nodeValue === $inputs[elt].name) {

          $($inputs[elt]).val($labels[label].innerText);

          // ===========================
          // We will be using our Regular Expressions to search for things here
          // ===========================
          const labelText = $label[labels].innerText;
          const input = $($inputs[elt]);

          if (fNameRegex.test(labelText)) {
            input.val(fName);
          } else if (lNameRegex.test(labelText)) {
            input.val(lName);
          } else if (emailRegex.test(labelText)) {
            input.val(email)
          } else if (phoneRegex.test(labelText)) {
            input.val(phoneNumber);
          } else if (addressRegex.test(labelText) || streetRegex.test(labelText)) {
            input.val(streetAddress);
          } else if (cityRegex.test(labelText)) {
            input.val(city);
          } else if (stateRegex.test(labelText)) {
            input.val(state);
          } else if () {

          }







        }
      }
    }


    // ===============================
    // After we look for labels, we use input elements to look for identifying info
    // ===============================


    // First name
    if (fNameRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val("Matt");
    }

    // Middle name


    // Last name
    if (lNameRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val("Brzowski");
    }

    // Full name
    if ($inputs[elt].name && ($inputs[elt].name === "name")) {
      $($inputs[elt].val("Matt Brzowski"));

    }
    // Email
    if (emailRegex.test($inputs[elt].outerHTML)) {
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