function send(event){
  $.ajax({
    url:'http://formspree.io/pandey.abhishek2770@gmail.com',
    type:'post',
    data:$('#contactus-form').serialize(),
    dataType: "json",
    success:function(){
      if (document.getElementById('name').value=="")
      alert("Please enter your name")
      else if (document.getElementById('mail').value=="")
      alert("Please enter your Email")
      else if (document.getElementById('ph').value=="")
      alert ("Please enter your Ph No.")
      else if (document.getElementById('sub').value=="")
      alert("Please enter subject")
      else if ( document.getElementById('mess').value=="")
      alert("Please write your message")
      else (document.getElementById("thanku").style.visibility = "visible")}
    });
}
function change(){
      document.getElementById('dopler').style.visibility = "hidden";
      document.getElementById('button').style.display = "block";
      document.getElementById('echo').style.visibility = "hidden";
      document.getElementById('ecg').style.visibility = "hidden";
      document.getElementById('tmt').style.visibility = "hidden";
      document.getElementById('cardio-bg').style.backgroundImage = "url('asd.png')";
      document.getElementById('dopler-h').style.display = "block";
    }
    function changecheck(){
      document.getElementById('cardio-bg').style.backgroundImage = null;
      document.getElementById('dopler').style.visibility = "visible";
      document.getElementById('button').style.display = "none";
      document.getElementById('echo').style.visibility = "visible";
      document.getElementById('ecg').style.visibility = "visible";
      document.getElementById('tmt').style.visibility = "visible";
      document.getElementById('dopler-h').style.display = "none";
      document.getElementById('echo-h').style.display = "none";
      document.getElementById('ecg-h').style.display = "none";
      document.getElementById('tmt-h').style.display = "none";
    }
    function change2(){
      document.getElementById('cardio-bg').style.backgroundImage = "url('echo.png')";
      document.getElementById('ecg').style.visibility = "hidden";
      document.getElementById('tmt').style.visibility = "hidden";
      document.getElementById('dopler').style.visibility = "hidden";
      document.getElementById('echo').style.visibility = "hidden";
      document.getElementById('echo-h').style.display = "block";
      document.getElementById('button').style.display = "block";
    }
    function change3(){
      document.getElementById('cardio-bg').style.backgroundImage = "url('ecg.png')";
      document.getElementById('echo').style.visibility = "hidden";
      document.getElementById('dopler').style.visibility = "hidden";
      document.getElementById('tmt').style.visibility = "hidden";
      document.getElementById('ecg').style.visibility = "hidden";
      document.getElementById('ecg-h').style.display = "block";
      document.getElementById('button').style.display = "block";
    }
    function change5(){
      document.getElementById('cardio-bg').style.backgroundImage = "url('tmt.png')";
      document.getElementById('echo').style.visibility = "hidden";
      document.getElementById('ecg').style.visibility = "hidden";
      document.getElementById('dopler').style.visibility = "hidden";
      document.getElementById('tmt').style.visibility = "hidden";
      document.getElementById('tmt-h').style.display = "block";
      document.getElementById('button').style.display = "block";
    }
