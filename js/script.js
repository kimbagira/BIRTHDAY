function put(){
    var yy=document.getElementById("one").value;
    var mm=document.getElementById("two").value;
    var dd=document.getElementById("three").value;
    var cc=(yy-1)/100*4;
    var dayoftheweek = (cc/4 -2*cc-1 + 5*yy/4 + 26*(mm+1)/10 + dd)%7;
    console.log( Math.round(dayoftheweek));
    alert(Math.round(dayoftheweek));
    var array1=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var array2=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    if (gender==="female") {
        alert(gender);
        console.log(array1[Math.round(dayoftheweek)]);
        document.getElementById("answer").innerHTML = array1[Math.round(dayoftheweek)];
    }
    else if (gender==="male"){
        console.log(array2[Math.round(dayoftheweek)]);
        document.getElementById("answer").innerHTML = array1[Math.round(dayoftheweek)];
    }
      else if (dd<=0 || dd>31) {
      
      }
      else if (m<= 0 || m > 12)  {

      }
      else{
          console.log("done");
      }

}
