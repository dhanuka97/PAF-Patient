//kkkkkk
fetchResult();
function saveNewRecord(obj){
    $.ajax({	
        headers: { 
            "Content-Type": "application/json"
        },
        type: 'POST',
        url: 'http://localhost:8081/healthCareApiProject/webapi/patients/add',
        dataType: 'json',
        data : JSON.stringify(obj),
        
        success: function(){
            //$( "#feeds" ).load( "doctor.html" );
            console.log("Added"); 
            $("#alertSuccess").text("Saved Successfully.");
            $("#alertSuccess").show();
            $("#formItem")[0].reset();
           
            fetchResult();

        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function fetchResult(){
    var $details = $('#tb');
    $("#tb").empty();
    $.ajax({	
        headers: { 
            "Content-Type": "application/json"
        },
        type: 'GET',
        url: 'http://localhost:8081/healthCareApiProject/webapi/patients',
        dataType: 'json',
        success: function(result){
            console.log("fetched");
            console.log(result);
            
            var data = JSON.parse(JSON.stringify(result));
            $.each(data, function(i, item) {

                $details.append('<tr>'+
							'<td>' + item.pnic+'</td>' 
							+ '<td>' + item.pname+'</td>' 
							+ '<td>' + item.phonenumber+'</td>' 
							+ '<td>' + item.gender+ '</td>'	
							+ '<td>' + item.username+ '</td>'
							+ '<td>' + item.password+ '</td>'	
							+ '<td><button type="button" class="btn btn-info" onclick="View('+ item.pnic +' )"  data-toggle="modal" data-target="#myModal">Edit</button></td>'
						    + '<td><button type="button" class="btn btn-danger" onclick="DeleteResult('+ item.pnic +' )" data-toggle="modal" data-target="#exampleModal" >Delete</button></td>'
							+ '</tr>')

                console.log(item);
                console.log(item.contactNo);
            });
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}



//Delete
function DeleteResult(no) {

	console.log(no);
	$.ajax({	
		type: 'DELETE',
			url: 'http://localhost:8081/healthCareApiProject/webapi/patients/delete/'+no,
			dataType: 'json',			
			success: function(){
              console.log("Deleted");
            ///  alert("Deleted Successfully!");
              $("#alertSuccess").text("Deleted Successfully.");
              $("#alertSuccess").show();
              fetchResult();
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}

//Update
function UpdateResult(){
	var nic = $('#editBox1').text();
	console.log(nic);
	var obj = {
			
			
			pnic :nic ,
            pname : $("#editBox2").val(),
            phonenumber :$("#editBox3").val().trim(),
            username : $("#editBox5").val().trim(),
            password : $("#editBox").val().trim(),
            gender   :$("#editBox1").val().trim()
		
			 
		    
	};
	$.ajax({	
		 headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
		type: 'PUT',
			url: 'http://localhost:8081/healthCareApiProject/webapi/patients/update',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
				alert("Updated Successfully!");
				
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}



