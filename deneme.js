
    function uyari()
    {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      console.log(" Your username is " + username + " Your password is " + password)
        if ( username.type == "deneme" && password.type == "deneme"){
          alert ("Login successfully");
          }
        else{
          alert("Invalid username or password");
          }
    }	
