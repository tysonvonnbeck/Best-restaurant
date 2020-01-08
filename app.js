const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//function for button submit

$(".submit").on("click", function(){
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };
    console.log(newReservation);
    ;
    var currentURL = window.location.origin;

    $.post(currentURL + "/api/tables", newReservation, function(data){
    //this will put you at a table it one is available
    if (data==true){
        alert("You are booked and may take your seat!")
    //this line will put you on the waiting list if seats are full
    } if (data==false) {
        alert("Sorry, you are on the waiting list.")
    }
    
    //this clears form after submit
    $('#reserve_name').val("");
    $('#reserve_phone').val("");
    $('#reserve_email').val("");
    $('#reserve_uniqueID').val("");
    
});
return false;



});
