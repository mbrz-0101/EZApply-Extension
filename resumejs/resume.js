(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  //------Adding Buttons

  //------Add another job
  $('#addjob').on('click', addnewJob);
  function addnewJob(){
  let Jobform = $('<div class="form-group col-md-6"><label for="companyname">Company Name</label><input type="companyname" class="form-control" id="companyname" aria-describedby="companyname" placeholder="Company Name"></div><div class="form-group col-md-6"><label for="companyaddress">Company Address</label><input type="companyaddress" class="form-control" id="companyaddress" aria-describedby="companyaddress" placeholder="Company Address"></div><div class="form-group col-md-6"><label for="companyphone">Company Phone</label><input type="companyphone" class="form-control" id="companyphone" aria-describedby="companyphone" placeholder="Company Phone"></div><div class="form-group col-md-6"><label for="companyrole">Your Position</label><input type="companyrole" class="form-control" id="companyrole" aria-describedby="companyrole" placeholder="What Position Did You Have?"></div>');
  $("#JOBS").append(Jobform);
  };

  //------Add another school
  $('#addSchool').on('click', addnewSchool);
  function addnewSchool(){
    let Schoolform = $(' <div class="form-group col-md-6"><label for="schoolname">School name</label><input type="schoolname" class="form-control" id="schoolname" aria-describedby="schoolname" placeholder="School Name"></div><div class="form-group col-md-6"><label for="schooladdress">School Address</label><input type="schooladdress" class="form-control" id="schooladdress" aria-describedby="schooladdress" placeholder="School Address"></div><div class="form-group col-md-6"><label for="startyear">Start Year</label><input type="fromyear" class="form-control" id="fromyear" aria-describedby="fromyear" placeholder="Start Year"></div><div class="form-group col-md-6"><label for="endyear">End Year</label><input type="endyear" class="form-control" id="endyear" aria-describedby="endyear" placeholder="End Year"></div><div class="form-group col-md-6"><label for="studyfield">Field Of Study</label><input type="studyfield" class="form-control" id="studyfield" aria-describedby="studyfield" placeholder="In What Field Did You Study?"></div>');
  $('#Schools').append(Schoolform);
  };

  //------Add another skill
  $('#addSkill').on('click', addnewSkill);
  function addnewSkill(){
    let Skillform = $('<div class="form-group col-md-6"><label for="skill">Skill</label><input type="skill" class="form-control" id="skill" aria-describedby="skill" placeholder="Add A Skill"></div>');
  $('#Skills').append(Skillform);
  };

  //------Add another certificate
  $('#addcertificate').on('click', addnewcertificate);
  function addnewcertificate(){
    let Certificateform = $('<div class="form-group col-md-6"><label for="Certificates">Certificate</label><input type="certificate" class="form-control" id="certificate" aria-describedby="certificate" placeholder="certificate"></div>');
  $('#Certificates').append(Certificateform);
  };
  //------submit form
    $("#saveform").on("click", function(event) {
      event.preventDefault();
      
      //---------Personal Info
      // var fname = $("#fname").val().trim();
      var lname = $('#lname').val().trim();
      var email = $("#email").val().trim();
      var phonenumber = $('#phonenumber').val().trim();
      var streetaddress = $('#streetaddress').val().trim();
      var city = $('#city').val().trim();
      var state = $('#state').val().trim();
      var zipcode = $('#zipcode').val().trim();


      //-----------Employment
      var companyname = $('#companyname').val().trim();
      var companyposition = $('#companyposition').val().trim();
      var companyphone = $('#companyphone').val().trim();
      var companyaddress = $('#companyaddress').val().trim();


      //-----------Education
      var schoolname = $('#schoolname').val().trim();
      var schooladdress = $('#schooladdress').val().trim();
      var startyear = $('#startyear').val().trim();
      var endyear = $('#endyear').val().trim();
      var studyfield = $('#studyfield').val().trim();


      //-----------Skills And Certificates
      var skill = $('#skill').val().trim();
      var certificate = $('#certificate').val().trim();


      // Clear localStorage
      // localStorage.clear();
      //-----------Profileimg
      var profileimg = $('img').attr('src');
      localStorage.setItem('profileimg', profileimg);

      // Store all content into localStorage
      //------------Contact info
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("email", email);
      localStorage.setItem("phonenumber", phonenumber);
      localStorage.setItem("streetaddress", streetaddress);
      localStorage.setItem("city", city);
      localStorage.setItem("state", state);
      localStorage.setItem("zipcode", zipcode);



      //----------Employment
      localStorage.setItem("companyname", companyname);
      localStorage.setItem("companyaddress", companyaddress);
      localStorage.setItem("companyphone", companyphone);
      localStorage.setItem("companyposition", companyposition);



      //-----------Education
      localStorage.setItem("schooladdress", schooladdress);
      localStorage.setItem("schoolname", schoolname);
      localStorage.setItem("startyear", startyear);
      localStorage.setItem("endyear", endyear);
      localStorage.setItem("studyfield", studyfield);



      //------------Skills and certificates
      localStorage.setItem("skill", skill);
      localStorage.setItem("certificate", certificate);
    });


})(jQuery); // End of use strict

 $(document).ready(function() {
debugger;
    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('img').attr('src', e.target.result);
                console.log(e);
            }
    
            reader.readAsDataURL(input.files[0]);
            console.log(input.files);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});






