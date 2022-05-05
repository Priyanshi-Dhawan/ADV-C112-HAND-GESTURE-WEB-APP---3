
Webcamm.set ({
    width:350
    height:300
    image_format='png'
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()

webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = <img id="captured_image" src='+data_uri+'/>

}
console.log ('ml5 version',ml5 version)

classifier = m5.imageClassifier('link',model loaded)

function model loaded() {
    console.log('model loaded!');

}
 function check()
 img = document,getElementById ('captured image');
 classifier.classify (img,gotresult)

 function gotResult (error,results)
 {
     if(error)
     console.log error(error)
     else
     console.log results
     document.getElementById("result_emotion_name")inner.HTML=result[0].label;
     document.getElementById("result_emotion_name2")inner.HTML=result[0].label;
     prediction_1=result[0].label
     prediction_2=result[0].label
    
     if results[0]label==amazing{
         document.getElementsById("update_emoji").inner,HTML="&#128522"
     }
     if results[0]label==best{
        document.getElementsById("update_emoji").inner,HTML="&#128522"
    }
     
    if results[0]label==victory{
        document.getElementsById("update_emoji").inner,HTML="&#128522"
    }
 }

 if results[1]label==amazing{
    document.getElementsById("update_emoji").inner,HTML="&#128522"
    
    if results[1]label==best{
        document.getElementsById("update_emoji").inner,HTML="&#128522"
    }
}
if results[1]label==victory{
    document.getElementsById("update_emoji").inner,HTML="&#128522"
}
