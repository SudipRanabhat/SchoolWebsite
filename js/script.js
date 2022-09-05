let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

var opacity=0;
var intervalID=0;
var shown=0;
let arr=["Computer Science is the study of computers and their usage for efficient problem solving. It involves the design and development of algorithms and software that enable computers to perform new tasks or solve new problems. In addition, computer science also includes the study of the structure and behavior of complex systems. Computer science is a relatively new field, and its origins can be traced back to the early days of computing. The first computers were designed to perform simple arithmetic and logic operations, and the first programs were written in machine code. However, these early computers were large, expensive, and difficult to use.",
"Biology is the study of life. It is a vast and complex subject that encompasses all living things, from single-celled organisms to complex animals. Biology is divided into many different sub-disciplines, each of which focuses on a specific area of study. The main branches of biology are zoology (the study of animals), botany (the study of plants), and microbiology (the study of microorganisms).",
"The Business Analyst is responsible for bridging the gap between the business world and the technical world. They understand the needs and requirements of the business and are able to translate these into technical specifications. The Business Analyst course will provide you with the skills and knowledge necessary to perform this role. You will learn about business processes, requirements gathering, and how to create specifications that can be used by developers to create the required software. The course will also teach you how to test the software to ensure that it meets the needs of the business.",
"Social science is the study of human society and social relationships. It includes the study of economics, politics, sociology, anthropology, and history. Social science is a very broad field, and there are many different sub-fields within it. The main goal of social science is to understand and explain human behavior.",
"Art and tech are two areas that often overlap. In this course, we explore how technology can be used in the arts and vice versa. We learn about various software programs and how to use them to create art, as well as how to incorporate technology into our existing art projects. In addition, we examine how technology is impacting the art world, both good and bad.",
"Computer Science<br>Biology & Life<Bussiness Analysis <br>Social science<br>Art &Tech<Br>Mathematics<br>Bachelor's"];


let mainVid = document.querySelector('.main-video');


document.querySelectorAll('.course .box .video video').forEach(vid =>{
    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});
document.querySelectorAll('.course .box .video img').forEach(vid =>{
    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('img').src = src;
    }

});

function discription(pos,title) {
    let c = document.getElementById("dis");
    c.innerHTML='<div class="box"><h1>'+title+'</h1><h3>'+arr[pos]+'</h3></div>';
    document.getElementById("dis").style.opacity=100;
}
window.onscroll = () =>{
    navbar.classList.remove('active');    
}

function admin(){
    let c = document.getElementById("admission");

    if(shown==0){
    shown=1;
    c.innerHTML='<div class="box" id="enroll"><h1>STUDENT ENROLLMENT APPLICATION\
</h1><p>Available spots by grade level (updated monthly): <br>Science,arts,technology,Bussiness..<br>\
Applications for the 2022-2023 school year are now open as of October 1, 2021.<br> All applications submitted by January 31, 2022 were included in the lottery.<br> Students must be 5 years old on or before September 1, 2022 in order to attend school for the 2022-2023 school year. <br> All applications received after January 31, 2022 will go on a waitlist and you will be contacted as space becomes available.</p></div>\
<button class="button" onclick="admin()">Enroll Now</button>'
}
else{
    alert('ENROLLMENT NOT SET RIGHT NOW');
    shown=0;
     c.innerHTML='';
}

}

window.onscroll=fadeout;
function fadeout(){
               //setInterval(hide, 2000);
               hide();
        }
function hide(){
          var body = document.getElementById("dis");
          opacity =Number(window.getComputedStyle(body).getPropertyValue("opacity"))
  
            if(opacity>0){
                   opacity=opacity-0.1;
                           body.style.opacity=opacity
            }
            else{
                document.getElementById("dis").innerHTML=""; 
                document.getElementById("dis").style.opacity=100;
            }
        } 


document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}