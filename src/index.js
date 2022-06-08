const paragraph = document.getElementById('adviceParagraph');
const adviceId = document.getElementById('adviceId');
const button = document.getElementById('btn');

const url = "https://api.adviceslip.com/advice";
const header = new Headers();
const init = {
    method: 'GET',
    headers: header,
    mode: 'cors'
};


button.addEventListener('click', () => {
    fetch(url, init).then((response) => {
        if(!response.ok) throw new Error(`Erreur HTTP! statut: ${response.status}`);
        return response.json()
    }).then((data) => {
        adviceId.innerHTML = data.slip.id;
        paragraph.innerHTML = data.slip.advice;
    })
})


