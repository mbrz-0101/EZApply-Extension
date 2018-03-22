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
  const endYearRegex;
  const fieldOfStudyRegex;
  const skillRegex;
  const certificateRegex;

  let $inputs = $("input");
  let $labels = $("label");

  let fName = localStorage.getItem('fname');
  let lName = localStorage.getItem('lname');
  let email = localStorage.getItem('email');
  let phoneNumber = localStorage.getItem('phonenumber');
  let streetAddress = localStorage.getItem('streetAddress');
  let city = localStorage.getItem('city');
  let state = localStorage.getItem('state');
  let zipCode = localStorage.getItem('zipcode');
  let companyName = localStorage.getItem('companyname');
  let companyAddress = localStorage.getItem('companyaddress');
  let companyPhone = localStorage.getItem('companyphone');
  let companyPosition = localStorage.getItem('companyposition');
  let schoolName = localStorage.getItem('schoolname');
  let schoolAddress = localStorage.getItem('schooladdress');
  let startYear = localStorage.getItem('startyear');
  let endYear = localStorage.getItem('endyear');
  let fieldOfStudy = localStorage.getItem('studyfield');
  let skill = localStorage.getItem('skill');
  let certificate = localStorage.getItem('certificate');


  console.log($inputs);
  console.log($labels);

  // loop through input elements
  for (elt in $inputs) {

    // ==============================
    // First we use Labels to test against our Regular Expressions as not every page has labels
    // ==============================
    for (label in $labels) {

      // Ensures the current label element has a for attribute
      if ($labels[label].attributes && $labels[label].attributes["for"]) {

        // If the for attribute matches the input element's id, check regex
        if ($labels[label].attributes["for"].nodeValue === $inputs[elt].id || $labels[label].attributes["for"].nodeValue === $inputs[elt].name) {

          $($inputs[elt]).val($labels[label].innerText);

          // ===========================
          // Use Regex to test labels and autofill
          // ===========================
          const labelText = $labels[label].innerText;
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
          } else if (companyNameRegex.test(labelText)) {
            input.val(companyName);
          } else if (companyAddressRegex.test(labelText)) {
            input.val(companyAddress);
          } else if (companyPhoneRegex.test(labelText)) {
            input.val(companyPhone);
          } else if (companyPositionRegex.test(labelText)) {
            input.val(companyPosition);
          } else if (schoolNameRegex.test(labelText)) {
            input.val(schoolName);
          } else if (schoolAddressRegex.test(labelText)) {
            input.val(schoolAddress);
          } else if (startYearRegex.test(labelText)) {
            input.val(startYear);
          } else if (endYearRegex.test(labelText)) {
            input.val(endYear);
          } else if (companyAddressRegex.test(labelText)) {
            input.val(companyAddress);
          } else if (fieldOfStudyRegex.test(labelText)) {
            input.val(fieldOfStudy);
          } else if (skillRegex.test(labelText)) {
            input.val(skill);
          } else if (certificateRegex.test(labelText)) {
            input.val(certificate);
          }
        }
      }
    }


    // ===============================
    // After we look for labels, we use input elements to look for identifying info
    // ===============================


    // First name
    if (fNameRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(fName);
    }

    // Last name
    if (lNameRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(lName);
    }

    // Email
    if (emailRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(email);
    }

    // Address
    if (addressRegex.test($inputs[elt].outerHTML) || streetRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(streetAddress);
    }

    // City
    if (cityRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(city);
    }

    // State
    if (stateRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(state);
    }

    // Zipcode
    if (zipRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(zipCode);
    }

    // Company Name
    if (companyNameRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(companyName);
    }

    // Company Address
    if (companyAddressRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(companyAddress);
    }

    // Company Phone
    if (companyPhoneRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(companyPhone);
    }

    // Company Position
    if (companyPosition.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(companyPosition);
    }

    // School Name
    if (schoolNameRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(schoolName);
    }

    // School Address
    if (schoolAddressRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(schoolAddress);
    }

    // Start Year
    if (startYearRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(startYear);
    }

    // End Year
    if (endYearRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(endYear);
    }

    // Field of Study
    if (fieldOfStudyRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(fieldOfStudy);
    }

    // Skill 
    if (skillRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(skill);
    }

    // Certification
    if (certificateRegex.test($inputs[elt].outerHTML)) {
      $($inputs[elt]).val(certificate);
    }
  }
}