let tweets = [
    {
        name: 'Vincent',
        username: 'urso',
        icon: 'https://pixabay.com/pt/photos/urso-urso-pardo-jardim-zool%C3%B3gico-838688/',
        tweetText:"frase 4"
    }, 
    {
        name: 'Hammy',
        username: 'esquilo',
        icon: 'https://pixabay.com/pt/photos/natureza-roedor-esquilo-mam%C3%ADfero-7997402/',
        tweetText: "frase 3"
    }, 
    {
        name: "Porco espinho",
        username: "Spike",
        icon: 'https://pixabay.com/pt/photos/porco-espinho-animal-hoglet-espora-1759027/',
        tweetText: "frase 2"
    }, 
    {
        name: "leopardo",
        username: "leo",
        icon: 'https://pixabay.com/pt/photos/leopard-animal-safari-mam%C3%ADfero-515509/',
        tweetText:"frase 1"
    }
];

for (const key in tweets) {
    for (key in tweets[key]){
        console.log(`${key}: ${tweets[key]}`);
    }
}