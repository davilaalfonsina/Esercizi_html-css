// dato questo endpoint : https://dog.ceo/api/breeds/image/random/5

// visualizzare le immagini 

//setto l endpoint
const endpoint = 'https://dog.ceo/api/breeds/image/random/5';


//creo la funzione fetch che recupera i dati dall endopoint
function fetchDogs(){
    // prendo l id dall html chiamato imgList
    const imgList = document.getElementById("imgList");

    //fetch function
    fetch(endpoint)

        //stato della chiamata, restituisce un json 
        .then(res => res.json())
        //con i dati (data)
        .then(data => {

            //Svuoto il contenitore immagini, buona pratica per ogni refresh 
            //( non voglio avere immagini di chiamate precedenti)
            imgList.innerHTML = "";

            //per ogni url esistente dentro l array MESSAGE, dei DATA
            data.message.forEach(url => {

                //creo una <li> per ogni img
                const li = document.createElement('li');

                //dove aggiungo l immagine ovvero l URL? NEL <LI>
                li.innerHTML = `<img src="${url}" width="150">`;

                //dove aggiungo la <li>? dentro alla <ul> dell html
                imgList.appendChild(li);
            });
        })
}

//richiamo la funzione
document.addEventListener("DOMContentLoaded", function() {
    fetchDogs();
});
