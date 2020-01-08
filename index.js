$(".submit").on("click", function () {
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };
    console.log(newReservation);

    if (customers.length > 4) {
        waitList.push(newReservation)
    alert("Too late, you're waiting")}
    
    else { customers.push(newReservation)
    alert("Your table has been reserved")}
    //this clears form after submit
    $('#reserve_name').val("");
    $('#reserve_phone').val("");
    $('#reserve_email').val("");
    $('#reserve_uniqueID').val("");

});
return false;