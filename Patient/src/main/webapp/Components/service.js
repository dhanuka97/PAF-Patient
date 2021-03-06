
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
            $("#formDoctor")[0].reset();
           
            fetchResult();

        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function fetchResult(){
    var $details = $('#orders');
    $("#orders").empty();
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
							'<td>' + item.patientid+'</td>' 
							+ '<td>' + item.patientName + '</td>' 
							+ '<td>' + item.ContactNo + '</td>' 
							+ '<td>' + item.gender+ '</td>'	
							+ '<td>' + item.username+ '</td>'
							+ '<td>' + item.password+ '</td>'	
							+ '<td><button type="button" class="btn btn-info" onclick="View('+ item.patientid +' )"  data-toggle="modal" data-target="#myModal">Edit</button></td>'
						    + '<td><button type="button" class="btn btn-danger" onclick="myFunction2('+ item.patientid +' )" data-toggle="modal" data-target="#exampleModal" >Delete</button></td>'
							+ '</tr>')

                console.log(item);
            });
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}



