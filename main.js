const form = document.getElementById("res_form")

function res_function(){
    var fname = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var status = document.getElementById("status").value;
    var email = document.getElementById("email").value;
    var brgy = document.getElementById("barangay").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var country = document.getElementById("country").value;
    var res_date = document.getElementById("date").value;
    var res_time = document.getElementById("time").value;

    if(fname == "" || fname == null){
        alert("Fullname is required...")
    }
    if(gender == "Gender"){
        alert("Select your gender...")
    }
    if(status == "----------------"){
        alert("Select your status...")
    }
    if(email == "" || email == null){
        alert("Email is required...")
    }
    if(brgy == "" || brgy == null){
        alert("Barangay is required...")
    }
    if(city == "" || city == null){
        alert("City is required...")
    }
    if(province == "" || province == null){
        alert("Province is required...")
    }
    if(country == "" || country == null){
        alert("Country is required...")
    }
   
 


    alert( "Reservation Form \n Full name: " + fname +
        "\nGender   : " + gender +
        "\nStatus   :   "+ status +
        "\nEmail    : " + email +
        "\nBarangay : " + brgy +
        "\nCity     : " + city +
        "\nProvince : " + province +
        "\nCountry  : " + country +
        "\nReservation date    : " + res_date +
        "\nReservation time     : " +res_time);
}