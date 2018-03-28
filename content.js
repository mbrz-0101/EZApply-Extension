console.log("This content script is working");

function fillInForm() {
  var fNameRegex = /f(irst)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
  var lNameRegex = /l(ast)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
  var emailRegex = /e(\W)?mail/i;
  var phoneRegex = /phone/i;
  var addressRegex = /address/i;
  var streetRegex = /street/i;
  var cityRegex = /city/i;
  var stateRegex = /state/i;
  var zipRegex = /zip/i;
  var employerRegex = /employer/i;
  var companyNameRegex = /PLACEHOLDERXX/;
  var companyAddressRegex = /PLACEHOLDERXX/;
  var companyPhoneRegex = /PLACEHOLDERXX/;
  var companyPositionRegex = /PLACEHOLDERXX/;
  var schoolNameRegex = /PLACEHOLDERXX/;
  var schoolAddressRegex = /PLACEHOLDERXX/;
  var startYearRegex = /PLACEHOLDERXX/;
  var endYearRegex = /PLACEHOLDERXX/;
  var fieldOfStudyRegex = /PLACEHOLDERXX/;
  var skillRegex = /PLACEHOLDERXX/;
  var certificateRegex = /PLACEHOLDERXX/;

  var fName = localStorage.getItem('fname') || "Matt";
  var lName = localStorage.getItem('lname') || "Mattson";
  var email = localStorage.getItem('email') || "mmattson@gmail.com";
  var phoneNumber = localStorage.getItem('phonenumber') || "2012012011";
  var streetAddress = localStorage.getItem('streetAddress') || "200 S 200 E Apt 200";
  var city = localStorage.getItem('city') || "Salt Lake";
  var state = localStorage.getItem('state') || "UT";
  var zipCode = localStorage.getItem('zipcode') || "84567";
  var companyName = localStorage.getItem('companyname') || "EZApply";
  var companyAddress = localStorage.getItem('companyaddress') || "101 Main St.";
  var companyPhone = localStorage.getItem('companyphone') || "2012012011";
  var companyPosition = localStorage.getItem('companyposition') || "CEO";
  var schoolName = localStorage.getItem('schoolname') || "UofU";
  var schoolAddress = localStorage.getItem('schooladdress') || "101 University Blvd.";
  var startYear = localStorage.getItem('startyear') || "2001";
  var endYear = localStorage.getItem('endyear') || "1999";
  var fieldOfStudy = localStorage.getItem('studyfield') || "Software Dev";
  var skill = localStorage.getItem('skill') || "Gamez";

  var $inputs = $("input");
  var $labels = $("label");
  console.log($inputs);
  console.log($labels);

  function fillInput(inputObj, value) {
    $(inputObj).css('border', '#bd5d38 4px solid');
    $(inputObj).css('borderRadius', '5px');
    $(inputObj).val(value);
  }

  // loop through input elements
  for (elt in $inputs) {

    if ($inputs[elt].type !== 'hidden' && $inputs[elt].type !== 'radio') {
      // ==============================
      // First we use Labels to test against our Regular Expressions as not every page has labels
      // ==============================
      for (label in $labels) {

        // Ensures the current label element has a for attribute
        if ($labels[label].attributes && $labels[label].attributes["for"]) {

          // If the for attribute matches the input element's id, check regex
          if ($labels[label].attributes["for"].nodeValue === $inputs[elt].id || $labels[label].attributes["for"].nodeValue === $inputs[elt].name) {

            // ===========================
            // Use Regex to test labels and autofill
            // ===========================
            var labelText = $labels[label].innerText;
            var input = $($inputs[elt]);

            if (fNameRegex.test(labelText)) {
              fillInput(input, fName);
            } else if (lNameRegex.test(labelText)) {
              fillInput(input, lName);
            } else if (emailRegex.test(labelText)) {
              fillInput(input, email);
            } else if (phoneRegex.test(labelText)) {
              fillInput(input, phoneNumber);
            } else if (addressRegex.test(labelText) || streetRegex.test(labelText)) {
              fillInput(input, streetAddress);
            } else if (cityRegex.test(labelText)) {
              fillInput(input, city);
            } else if (stateRegex.test(labelText)) {
              fillInput(input, state);
            } else if (zipRegex.test(labelText)) {
              fillInput(input, zipCode);
            } else if (companyNameRegex.test(labelText)) {
              fillInput(input, companyName);
            } else if (companyAddressRegex.test(labelText)) {
              fillInput(input, companyAddress);
            } else if (companyPhoneRegex.test(labelText)) {
              fillInput(input, companyPhone);
            } else if (companyPositionRegex.test(labelText)) {
              fillInput(input, companyPosition);
            } else if (schoolNameRegex.test(labelText)) {
              fillInput(input, schoolName);
            } else if (schoolAddressRegex.test(labelText)) {
              fillInput(input, schoolAddress);
            } else if (startYearRegex.test(labelText)) {
              fillInput(input, startYear);
            } else if (endYearRegex.test(labelText)) {
              fillInput(input, endYear);
            } else if (companyAddressRegex.test(labelText)) {
              fillInput(input, companyAddress);
            } else if (fieldOfStudyRegex.test(labelText)) {
              fillInput(input, fieldOfStudy);
            } else if (skillRegex.test(labelText)) {
              fillInput(input, skill);
            } 
          }
        }

      }
    }




    // ===============================
    // After we look for labels, we use input elements to look for identifying info
    // ===============================

    // First name
    if (fNameRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], fName);
    }

    // Last name
    if (lNameRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], lName);
    }

    // Email
    if (emailRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], email);
    }

    // Phone
    if (phoneRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], phoneNumber);
    }

    // Address
    if (addressRegex.test($inputs[elt].outerHTML) || streetRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], streetAddress);
    }

    // City
    if (cityRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], city);
    }

    // State
    if (stateRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], state);
    }

    // Zipcode
    if (zipRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], zipCode);
    }

    // Company Name
    if (companyNameRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], companyName);
    }

    // Company Address
    if (companyAddressRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], companyAddress);
    }

    // Company Phone
    if (companyPhoneRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], companyPhone);
    }

    // Company Position
    if (companyPositionRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], companyPosition);
    }

    // School Name
    if (schoolNameRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], schoolName);
    }

    // School Address
    if (schoolAddressRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], schoolAddress);
    }

    // Start Year
    if (startYearRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], startYear);
    }

    // End Year
    if (endYearRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], endYear);
    }

    // Field of Study
    if (fieldOfStudyRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], fieldOfStudy);
    }

    // Skill 
    if (skillRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], skill);
    }

    // Certification
    if (certificateRegex.test($inputs[elt].outerHTML)) {
      fillInput($inputs[elt], certificate);
    }
  }
}