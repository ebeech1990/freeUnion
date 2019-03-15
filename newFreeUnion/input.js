$(document).ready(function() {
    $("#pgAddressAdd1").click(function(e) {
      $("#appendPgAddress1").append(
        '<input type="text" name="pgAddressStreet1" placeholder="Street"><input type="text" name="pgAddressCity1" placeholder="City"><input type="text" name="pgAddressState1" placeholder="State"><input type="text" name="pgAddressZip1" placeholder="Zipcode">'
    );
    $("#pgAddressAdd1").css('display', 'none')
    });
    
  });
  
  $(document).ready(function() {
    $("#pgAddressAdd2").click(function(e) {
      $("#appendPgAddress2").append(
        '<input type="text" name="pgAddressStreet2" placeholder="Street"><input type="text" name="pgAddressCity2" placeholder="City"><input type="text" name="pgAddressState2" placeholder="State"><input type="text" name="pgAddressZip2" placeholder="Zipcode">'
    );
    $("#pgAddressAdd2").css('display', 'none')
    });
    
  });

  $(document).ready(function() {
    $("#addFeeAddress").click(function(e) {
      $("#appendFeeAddress").append(
        '<input type="text" name="feeAddressStreet" placeholder="Street"><input type="text" name="feeAddressCity" placeholder="City"><input type="text" name="feeAddressState" placeholder="State"><input type="text" name="feeAddressZip" placeholder="Zipcode"><label for="feeRelationship">Relationship to applicant</label><input type="text" name="feeRelationship" id="fee-relationship" placeholder=""><label for="feePhone">Phone</label><input type="text" name="feePhone" id="fee-phone" placeholder=""><label for="feeEmail">Email</label><input type="email" name="feeEmail" id="fee-email" placeholder="">'
    );
    $("#addFeeAddress").css('display', 'none')
    });
    
  });




$(function(){
  var count = 0;
  $('#add-gp').click(function(){
    
    $('#appendGp').append('<div class="form-row"><div class="col-3"> <input type="text" name="gpName'+count+'" placeholder="Name"></div><div class="form-row"><div class="col-4"><input type="text" name="gpAddressStreet'+count+'" placeholder="Street"></div><div class="col-3"><input type="text" name="gpAddressCity'+count+'" placeholder="City"></div><div class="col-1"><input type="text" name="gpAddressState" placeholder="State"></div><div class="col-2"><input type="text" name="gpAddressZip'+count+'" placeholder="Zipcode"></div></div></div>')
    count++;
  });
});

$(function(){
  var count = 0;
  $('#add-sib').click(function(){
    
    $('#appendSib').append('<div class="form-row"><div class="col"><input type="text" name="sibName'+count+'" placeholder="Name">	</div><div class="col"><input type="text" name="sibDob'+count+'" placeholder="Date of Birth"></div><div class="col"><input type="text" name="sibSchool'+count+'" placeholder="School Attending"></div></div>')
    count++;
  });
});

// $studentNameFirst_error = $studentNameNickname_error = $studentNameMiddle_error = $studentNameLast_error = $studentAddressStreet_error = $studentAddressCity_error = $studentAddressState_error = $studentAddressZip_error = $studentDob_error = $appliedGrade_error = $schoolYear_error = $preschoolDays_error = $prekindergardenDays_error = $currentSchool_error = $currentGrade_error = $currentContact_error = $previousSchool_error = $previousGrade_error = $previousContact_error =  "";