/* Initialise la reconnaissance vocale */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

/* Français de France */
recognition.lang = 'fr-FR';
/* Lorsque une voix est détectée */
recognition.onresult = function (event) {
    /* récupère le mot ou la phrase */
    var sentence = event.results[0][0].transcript;
    console.log('Resultat : ' + sentence + '.');
    console.log('Indice de confiance : ' + event.results[0][0].confidence);
    /* Ajoute la phrase à la zone texte en ajoutant une majuscule et un point */
    console.log(sentence);
    let input = document.querySelector("#pokemon-search");
    input.value = sentence.toLowerCase();
    console.log(input);
};
recognition.onerror = function (event) {
    console.log('Erreur : ' + event.error);
};