<html>
<head>


<link rel="stylesheet" href="View/bootstrap.min.css">
 <script src="Components/jquery-3.2.1.min.js">
 </script> 
 <script src="Components/m.js"></script> 
  <script src="Components/service.js"></script> 
</head>

<body>
    <h2>Jersey RESTful Web Application!</h2>
    <p><a href="webapi/myresource">Jersey resource</a>
	<p>
		Visit <a href="http://jersey.java.net">Project Jersey website</a> for
		more information on Jersey!</p>
		
	
 
 <div id="form-wrapper" style="max-width:500px;margin:auto"; >
 
 <form id="formItem" name="formItem"> Patient name:   <input id="name" name="name" type="text"class="form-control form-control-sm"> 
 
  <br> Patient NIC:   <input id="nic" name="nic" type="text"  class="form-control form-control-sm"> 
 
  <br> Contact number:   <input id="con" name="con" type="text" class="form-control form-control-sm"> 
 
  <br> User name:   <input id="uname" name="uname" type="text"class="form-control form-control-sm"> 
  
   <br> Password:   <input id="pass" name="pass" type="text"class="form-control form-control-sm"> 
   
   <br> Gender: <input id="gen" name="gen" type="text"class="form-control form-control-sm"> 
   
    <div class="form-group">
						    <label for="exampleInputEmail1" id="editBoxAppH">Doctor ID:</label> <br>
						    <input type="text" class="form-control" id="editBox1" aria-describedby="emailHelp"> 
						  </div>
   
						  
 
  <br>   <input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
  <input type="hidden" id="hidItemIDSave"name="hidItemIDSave" value="">  
  <div id="alertSuccess" class="alert alert-success"></div>  <div id="alertError" class="alert alert-danger"></div> 
  </form> 
 
</div>	
<!--Table Start-->
    <div class="container">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <table class="table" style="width: 100%;" id="tablepatient">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Patient  Name</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Gender</th>
                        <th scope="col">User name</th>
                        <th scope="col">Password</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    <tbody id="tbl">

                     
                    </tbody>
                </table>

            <!-- Update Modal -->
			  <div class="modal fade" id="myModal" role="dialog">
			    <div class="modal-dialog modal-lg">
			      <div class="modal-content">
			        <div class="modal-header">
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			         
			        </div>
			        <div class="modal-body">

				          <div class="form-group">
						    <label for="exampleInputEmail1" id="editBoxAppH">Doctor ID:</label> <br>
						    <input type="text" class="form-control" id="editBox1" aria-describedby="emailHelp"> 
						  </div>

				          <div class="form-group">
						    <label for="exampleInputEmail1">Doctor Name:</label>
						    <input type="text" class="form-control" id="editBox2" aria-describedby="emailHelp"> 
						  </div>

						  <div class="form-group">
						    <label for="exampleInputEmail1">Specialization:</label>
							    <select class="form-control" id="ddlSpecialization" name="ddlSpecialization" required>
		                            <option value="0">- Select Specialization -</option>
		                            <option value="1">CARDILOGIST</option>
		                            <option value="2">NEUROLOGY</option>
		                            <option value="3">DERMATOLOGIST</option>
		                            <option value="4">SURGEON</option>
		                            <option value="5">OPHTHALMOLOGIST</option>
		                        </select> 
						  </div>

						  <div class="form-group">
						    <label for="exampleInputEmail1">Contact No:</label>
						    <input type="tel" class="form-control" id="editBox3" aria-describedby="emailHelp"> 
						  </div>

						  <div class="form-group">
						    <label for="exampleInputEmail1">Password</label>
						    <input type="Password" class="form-control" id="editBox4" aria-describedby="emailHelp"> 
						  </div>
					  
			        </div>

			        <div class="modal-footer">
			          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
					  <button type="button" class="btn btn-success" onclick="Update()" data-dismiss="modal">Save</button>
			        </div>

			      </div>
			    </div>
              </div>
              
            <!-- Delete Modal -->
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Deleting Doctor</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                         <p class="text-danger">Are you sure want to delete this Doctor....?</p> <label for="exampleInputEmail1" id="docID" style="visibility: hidden;">Doctor Name</label> 
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                      <button type="button" class="btn btn-danger" onclick="Delete()" data-dismiss="modal" >Yes</button>
                    </div>
                  </div>
                </div>
            </div>

            </div>
            
        </div>
    </div><br><br><br><br>
    <!--Table End-->

 
 <br>  <div id="divItemsGrid">   <%//    Item itemObj = new Item();    out.print(itemObj.readItems());   %>  </div> 
 
   
</body>
</html>
