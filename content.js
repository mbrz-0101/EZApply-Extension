console.log("This content script is working!");

function fillInForm() {
  var fNameRegex = /f(irst)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
  var lNameRegex = /l(ast)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
  var emailRegex = /email/i;
  var phoneRegex = /phone/i;
  var cellRegex = /cell/i;
  var addressRegex = /address/i;
  var streetRegex = /street/i;
  var cityRegex = /city/i;
  var stateRegex = /state/i;
  var zipRegex = /zip/i;
  var employerRegex = /employer/i;
  var companyNameRegex = /organization/i;
  var companyPositionRegex = /job((\w+)*|\s|\w+\s|(\w+)?\W)function/i;
  var companyTitleRegex = /(job)?((\w+)*|\s|\w+\s|(\w+)?\W)title/i;
  var schoolNameRegex = /university/i;
  var insitutionRegex = /institution/i;
  var fieldOfStudyRegex = /major/i;
  var degreeRegex = /degree/i;
  var areaOfStudyRegex = /area\sof\sstudy/i;
  var certificateRegex = /certificat/i;

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
  var fieldOfStudy = localStorage.getItem('studyfield') || "Software Dev";
  var certificate = localStorage.getItem('certificate') || "Random Certificate";

  // Set up counters to ensure correct autofilling
  var employerCounter = 0;
  var schoolCounter = 0;
  var addressCounter = 0;

  var $inputs = $("input");
  var $labels = $("label");
  console.log($inputs);
  console.log($labels);

  function fillInput(inputObj, value) {
    $(inputObj).css('border', '#bd5d38 4px solid');
    $(inputObj).css('borderRadius', '5px');
    $(inputObj).val(value);
  }

  // Loop through input elements
  for (elt in $inputs) {
    if ($inputs[elt].type === 'text' || $inputs[elt].type === 'email') {

      // First we use Labels to test against our Regular Expressions as not every page has labels
      for (lab in $labels) {
        if ($labels[lab].attributes && $labels[lab].attributes["for"]) {
          if ($labels[lab].attributes["for"].nodeValue === $inputs[elt].id) {

            // Use Regex to test labels and autofill
            if (fNameRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), fName);
            } else if (lNameRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), lName);
            } else if (emailRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), email);
            } else if (phoneRegex.test($labels[lab].innerText) || cellRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), phoneNumber);
            } else if (addressCounter === 0 && addressRegex.test($labels[lab].innerText) || streetRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), streetAddress);
              addressCounter = 1;
            } else if (cityRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), city);
            } else if (stateRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), state);
            } else if (zipRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), zipCode);
            } else if (companyNameRegex.test($labels[lab].innerText) || employerRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), companyName);
              employerCounter = 1;
            } else if (employerCounter === 1 && addressRegex.test($labels[lab].innerText) || streetRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), companyAddress);
            } else if (employerCounter === 1 && phoneRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), companyPhone);
              employerCounter = 0;
            } else if (companyPositionRegex.test($labels[lab].innerText) || companyTitleRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), companyPosition);
            } else if (schoolNameRegex.test($labels[lab].innerText) || insitutionRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), schoolName);
              schoolCounter = 1;
            } else if (schoolCounter === 1 && addressRegex.test($labels[lab].innerText) || streetRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), schoolAddress);
            } else if (fieldOfStudyRegex.test($labels[lab].innerText) || areaOfStudyRegex.test($labels[lab].innerText) || degreeRegex.test($labels[lab].innerText)) {
              fillInput($($inputs[elt]), fieldOfStudy);
            }
          }
        }
      }
    }
  }

  // ===============================
  // After we look for labels, we use input elements to look for identifying info
  // ===============================

  // First Name
  if (fNameRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), fName);
  }

  // Last Name
  if (lNameRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), lName);
  }

  // Email
  if (emailRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), email);
  }

  // Phone
  if (phoneRegex.test($inputs[elt].outerHTML) || cellRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), phoneNumber);
  }

  // Address
  if (addressRegex.test($inputs[elt].outerHTML) || streetRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), streetAddress);
  }

  // City
  if (cityRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), city);
  }

  // State
  if (stateRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), state);
  }

  // Zipcode
  if (zipRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), zipCode);
  }

  // Company Name
  if (companyNameRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), companyName);
  }

  // Company Address
  if (addressRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), companyAddress);
  }

  // Company Phone
  if (phoneRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), companyPhone);
  }

  // Company Position
  if (companyPositionRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), companyPosition);
  }

  // School Name
  if (schoolNameRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), schoolName);
  }

  // School Address
  if (addressRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), schoolAddress);
  }

  // Field of Study
  if (fieldOfStudyRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), fieldOfStudy);
  }

  // Certification
  if (certificateRegex.test($inputs[elt].outerHTML)) {
    fillInput($($inputs[elt]), certificate);
  }
}