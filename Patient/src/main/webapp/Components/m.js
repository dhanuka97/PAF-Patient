$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

$(document).on("click", "#btnSave", function(event){ 
	//clear status messages
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide(); 
	
	var status =  validateItemForm();
	console.log(status);
	//var status = false;
	 
	 // If not valid------------------- 
	if (status != true){   $("#alertError").text(status);   $("#alertError").show();   return;  } 
	else if(status ==true){
		 //If valid
        var doctor = Validation($("#nic").val().trim(), $("#name").val().trim(), $("#con").val(), $("#uname").val().trim(), $("#pass").val().trim(), $("ddlgender").val().trim());
        $("#tablepatient").append(doctor);
        
        
        
        var obj = {
            "Patient ID" : $("#nic").val(),
            "Patient Name" : $("#name").val().trim(),
            "Contact no" :$("#con").val().trim(),
            "user name" : $("#uname").val().trim(),
            "password" : $("#pass").val().trim(),
            "gender"   :$("#gen").val().trim()
        }

        saveNewRecord(obj);
		
		
		
	}
	 
	 
}); 

function validateItemForm() { 
	if ($("#name").val().trim() == "")  { 
		return "Insert Patient name.";  
	} 
	
	
	if ($("#nic").val().trim()==""){return "Insert patient nic "}
	
	if($("#con").val().trim()==""){return "Insert patient conntact number"}
	
	if($("#uname").val().trim()==""){return "Insert user name"}
	
	if($("#pass").val().trim()==""){return "Insert password"}
	
	if ($('#gen').val().trim()=="")  {   return "Insert gender.";  } 
 
	return true;
	 
}

function Validation(name,nic,con,uname,pass,mgender){
	
	//var title = (gender == "Male") ? "Mr." : "Ms."; 
	 
	 var gender= ""; 
	 
	 switch (mgender) 
	 {
	 case "1":  gender= "Male";  
	 break; 
	 case "2":  gender = "Female";
	 break; 
	 
	 } 
	 
	 var student = ""; 
	 
	 return student;
	
	
	
	
	
}

