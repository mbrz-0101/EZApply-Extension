let Jobform = $('<div class="form-group col-md-6"><label for="companyname">Company Name</label><input type="companyname" class="form-control" id="companyname" aria-describedby="companyname" placeholder="Company Name"></div><div class="form-group col-md-6"><label for="companyaddress">Company Address</label><input type="companyaddress" class="form-control" id="companyaddress" aria-describedby="companyaddress" placeholder="Company Address"></div><div class="form-group col-md-6"><label for="companyphone">Company Phone</label><input type="companyphone" class="form-control" id="companyphone" aria-describedby="companyphone" placeholder="Company Phone"></div><div class="form-group col-md-6"><label for="companyrole">Your Position</label><input type="companyrole" class="form-control" id="companyrole" aria-describedby="companyrole" placeholder="What Position Did You Have?"></div>');
let Jobbutton = $('<button type="button" class="btn btn-dark" id="addjob">Add Another Job</button>');
$(document).on('click', '#addjob', addnewJob);
function addnewJob(){
  $('#addjob').remove();
  $("#JOBS").append(Jobform);
  $('#JOBS').append(Jobbutton);
};
$(document).on('click', '#addjob', addnewJob);
