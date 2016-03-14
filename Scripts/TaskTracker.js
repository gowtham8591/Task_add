$(function() {

	$.getJSON('jsondata.json', function(obj){
		$.each(obj, function (key, value) {
			$('#tblData > tbody:last').append('<tr><td><b>'+ value.name +'</b>   '+ value.date +'</td><td>'+ value.assigned +'</td></tr>');
		});
	}) 
	.error(function(data) {
  		console.log("Error!");
 	});
});


$('#btnSubmit').click(function(){
	var name = $('#TaskID').val();
	var date = $('#DateID').val();
	var assigned = $('#PersonID').val();
	debugger;
	$('#tblData > tbody:last').append('<tr><td><b>'+ name +'</b>  '+ date +'</td><td>'+ assigned +'</td></tr>');

	$(':input[type="text"]').val('');
});
