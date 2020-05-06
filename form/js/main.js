$(document).ready(function() {
	$("#btnUpdate").hide();
	$("#alertSuccess").hide();
	$("#alertError").hide();
	fetchResult();
	
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
		
         
        var obj = {
        	"pnic" : $("#nic").val().trim(),
            "pname" : $("#name").val(),
            "phonenumber" :$("#con").val().trim(),
            "username" : $("#uname").val().trim(),
            "password" : $("#pass").val().trim(),
            "gender"   :$("#gen").val().trim()
        }
        
        
        

        saveNewRecord(obj);
        console.log(obj);
		
		
		
	}
	 
	 
}); 
///////////////////////////////////////////////////////////////////////////

$(document).on("click", "#btnUpdate", function(event){ 
	
	
	
	var status =  validateItemForm();
	console.log(status);
	//var status = false;
	 
	 // If not valid------------------- 
	if (status != true){   $("#alertError").text(status);   $("#alertError").show();   return;  } 
	else if(status ==true){
		 //If valid
		
         
        var obj = {
        	"pnic" : $("#nic").val().trim(),
            "pname" : $("#name").val(),
            "phonenumber" :$("#con").val().trim(),
            "username" : $("#uname").val().trim(),
            "password" : $("#pass").val().trim(),
            "gender"   :$("#gen").val().trim()
        }
        
        
        

        UpdateResult(obj);
        console.log(obj);
		
		
		
	}
	 
	 
}); 


///////////////////////////////////////////////////

function validateItemForm() { 
	if ($("#name").val().trim() == "")  { 
		return "Insert Patient name.";  
	} 
	
	
	if ($("#nic").val().trim()==""){return "Insert patient nic "}
	
	if($("#con").val().trim()==""){return "Insert patient conntact number"}
	
	if($("#uname").val().trim()==""){return "Insert user name"}
	
	if($("#pass").val().trim()==""){return "Insert password"}
	
	if ($('#gen').val().trim()=="")  {   return "Insert gender.";  } 


    var contact = $("#con").val().trim();
    if(!$.isNumeric(contact))
    {
        return "Please Enter valid Phone Number !";
    }

 
	return true;
	 
}

function Validation(name,nic,con,uname,pass,mgender){
	
	//var title = (gender == "Male") ? "Mr." : "Ms."; 
	 
	
	 var student = ""; 
	 
	 return student;
	
}

function View( no) {
	console.log(no);
	$('#editBox1').text(no);
	
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8081/healthCareApiProject/webapi/patients/patient/'+no,
			 dataType: "json",
			success: function(data){
                //$('.modal-backdrop').remove();
				console.log(data);
				
				
			    $("#nic").val(data.pnic),
	            $("#name").val(data.pname),
	            $("#con").val(data.phonenumber),
	            $("#uname").val(data.username),
	            $("#pass").val(data.password),
	            $("#gen").val(data.gender);
			
			
				
			}
	});
		
}

