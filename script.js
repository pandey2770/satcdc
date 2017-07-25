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

