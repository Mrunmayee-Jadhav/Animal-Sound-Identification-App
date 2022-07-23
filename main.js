function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kTyjmpnhs/model.json', modelReady);
}

function modelReady() {
    classifier.classify(getResults);
}

function getResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_r= Math.floor(Math.random() * 255) + 1;
        random_g= Math.floor(Math.random() * 255) + 1;
        random_b= Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML= 'I can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML= "Accuracy - " + (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_label").style.color = "rgb(" + random_r+ "," + random_g + "," + random_b +")";

        img = document.getElementById("image");

        if (results[0].label == "Dog") {
            img.src= 'dog.gif';
        } else if (results[0].label == "Cat") {
            img.src= 'cat.gif';
        } else if (results[0].label == "Lion") {
            img.src= 'lion.gif';
        } else if (results[0].label == 'Parrot') {
            img.src= 'parrot.png';
        } else {
            img.src= 'listen.gif';
        }
    }
}