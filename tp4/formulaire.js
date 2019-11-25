$(document).ready(function () {
    $('#Valider').click(function () {
        if (($("#nom").val().length == 0) || ($("#prenom").val().length == 0) || ($("#naissance").val().length == 0 || ($("#adresse").val().length == 0) || ($("#email").val().length == 0))) {
            $('#alert').attr("class","alert alert-danger");
            $('#alert').text("Veuillez remplir tous les champs svp"); 
        }
        else {
            $('#alert').attr("class","alert alert-success");
            $('#alert').html("<strong>Bravo!</strong> Le formulaire est sauvegarde"); 
            localStorage.setItem("form_nom",$("#nom").val());
            localStorage.setItem("form_prenom",$("#prenom").val());
            localStorage.setItem("form_naissance",$("#naissance").val());
            localStorage.setItem("form_adresse",$("#adresse").val());
            localStorage.setItem("form_email",$("#email").val());
        }
    });

    $('#GPS').click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $("#adresse").val() = "Geolocation is not supported by this browser.";
        }
    });
    function showPosition(position) {
        $("#adresse").val("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
        $('#image').attr("src", "http://maps.googleapis.com/maps/api/staticmap?markers=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=12&size=500x400&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
        $("#CarAdr").text($("#adresse").val().length + " car.");
    }


    $("#naissance").datepicker({
        dateFormat: "dd/mm/yy",
        maxDate: 0,
        onClose: function(){
            $("#CarNai").text($("#naissance").val().length + " car.");
        }
    });



        $("#nom").keyup(function () { $("#CarNom").text($("#nom").val().length + " car."); });
        $("#prenom").keyup(function () { $("#CarPrenom").text($("#prenom").val().length + " car."); });
        $("#naissance").keyup(function () { $("#CarNai").text($("#naissance").val().length + " car."); });
        $("#adresse").keyup(function () { $("#CarAdr").text($("#adresse").val().length + " car."); });
        $("#email").keyup(function () { $("#CarEmail").text($("#email").val().length + " car."); });

    });