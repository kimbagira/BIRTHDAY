function put(){
    var yy=document.getElementById("one").value;
    var mm=document.getElementById("two").value;
    var dd=document.getElementById("three").value;
    var cc=(yy-1)/100*4;
    var dayoftheweek = (cc/4 -2*cc-1 + 5*yy/4 + 26*(mm+1)/10 + dd)%7;
    console.log( Math.round(dayoftheweek));
    alert(Math.round(dayoftheweek));
    var array1=["nul","Adwoa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];
    var array2=["nul","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Kwasi"];
  
    var gender = document.querySelector('input[name="gender"]:checked').value;

     if (dd<=0 || dd>31) {
        alert("enter a valid day");  
      
      }
      else if (mm<= 0 || mm> 12)  {
        alert("enter a valid month");  
      }
    
      else if (gender==="female") {
        alert(gender);
        console.log(array1[Math.round(dayoftheweek)]);
        document.getElementById("answer").innerHTML = array1[Math.round(dayoftheweek)];
    }
    else if(gender==="male"){
         alert(gender);
        console.log(array2[Math.round(dayoftheweek)]);
        document.getElementById("answer").innerHTML = array2[Math.round(dayoftheweek)];
    }
     
      else{
          console.log("done");
      }
    }