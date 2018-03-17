console.log("This content script is working");
const fNameRegex = /f(irst)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
const lNameRegex = /l(ast)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
const emailRegex = /e(\W)?mail/i;
const phoneRegex;
const addressRegex;
const cityRegex;
const stateRegex;
const zipRegex;



function fillInForm() {
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


  for (elt in $inputs) {

    for (label in $labels) {
      if ($labels[label].attributes && $labels[label].attributes["for"]) {
        if ($labels[label].attributes["for"].nodeValue === $inputs[elt].id || $labels[label].attributes["for"].nodeValue === $inputs[elt].name) {
          $($inputs[elt]).val($labels[label].innerText);

          // ===========================
          // We will be using our Regular Expressions to search for things here
          // ===========================
          // if (($labels[label].innerText)) {
          //   $($inputs[elt]).val(localStorage.getItem('fname')));
          // } else if (userFirstName.test($labels[label].innerText)) {
          //   $($inputs[elt]).val(localStorage.getItem('lname')));
          // }







        }
      }
    }


    // ===============================
    // After we look for labels, we use input elements' names and more to look for identifying info
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