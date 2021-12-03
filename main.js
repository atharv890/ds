Webcam.set({
height:200,
width:300,
image_format:"png",
png_quality:90
});
Webcam.attach("#camera");
function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='image'>";
}
);
}
//function takesnapshot()
//{
 // for(i=1;i<=4;i++){
 //Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML += '<img id="selfie_image'+i+'" src="'+data_uri+'">'; }); 
  //}
//}
console.log("ml5version",ml5.version);
yo=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CXtWbdxU_/model.json",modelloaded);
function modelloaded(){
console.log("modal is loaded you can fire over and out");
alert("modal is loaded you can fire over and out");
}
function check(){
capture=document.getElementById("image");
yo.classify(capture,gotResult);

}
function gotResult(error,results){
if (error){
console.log(error);}
else{
console.log(results);
document.getElementById("objectname").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=(results[0].confidence.toFixed(3))*100+"%";
document.getElementById("objectname1").innerHTML=results[1].label;
document.getElementById("accuracy1").innerHTML=(results[1].confidence.toFixed(3))*100+"%";
synth=window.speechSynthesis;
synth1="This is the picture of"+results[0].label;
synth2=new SpeechSynthesisUtterance(synth1);
synth.speak(synth2);
}
}





