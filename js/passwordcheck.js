function checker() {
var pass1 = document.getElementById("pass1").value;
var pass2 = document.getElementById("pass2").value;
var len = pass1.length;

if(pass1 === pass2)
{
  if(len >= 8){  alert("Password okay"); }
  else { alert("Password not at least 8 characters")}
}
else
{
alert("Password's do not match");
}
}
