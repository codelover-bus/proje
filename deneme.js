<!DOCTYPE html>
function validate() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "username1" && password == "password1"){
alert ("Login successfully");
  }
  else{
    alert("Invalid username or password");
    }
  return false;
  }
<html>
  <head>
    <style>
    body {
      background-color: lightblue;
      font-family: Arial, Helvetica, sans-serif;
      color: white;
    }
    h1 {
      font-family: Arial, sans-serif;
      color: grey;
      background-color: lightgreen;
      text-align: center;
    }
    button{
      background-color: lightblue;
      color:grey;
      padding: 2px 4px;
      margin: 1px 0;
      cursor: pointer;
      width: %100;
    }
    button:hover {
      opacity: 0.8;
    }
    .container {
    padding: 16px;
    }
    </style>
    <script src="js/login.js"></script>
  </head>
    <body>
      <h1>Welcome to My Web Page!</h1>
      <h2>Login Form</h2>
        <form action="/action_page.php">
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Login</button>
          </div>
        </form>
        <a href="https://www.denemesayfa.com" target="_blank">deneme</a>
    </body>
  </html>
