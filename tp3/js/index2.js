$(document).ready(function(){
    $("button").click(function(){
        if (($("#nom").val().length==0) || ($("#prenom").val().length==0) || ($("#naissance").val().length==0 || ($("#adresse").val().length==0) || ($("#email").val().length==0)) ) {
            $('#Modal1').modal('show');
        }
        else {
            $('#myModalLabel2').text('Bienvenue ' + $("#nom").val());
            $('#modalP1').text('Vous êtes nés le ' + $("#naissance").val() +' et vous habitez');
            $('#modalP3').text($("#adresse").val());  
			$("#Modal2 .modal-body a").attr("href","https://maps.google.com/maps?q="+$("#adresse").val()+"&markers="+$("#adresse").val());
			$("#Modal2 .modal-body a img").attr("src","https://maps.googleapis.com/maps/api/staticmap?size=400x250&center="+$("#adresse").val()+"&markers="+$("#adresse").val());
            $('#Modal2').modal('show');
        }
    });

    $( "#naissance" ).datepicker({
		dateFormat: "dd/mm/yy",
		maxDate: 0
	});

});