const philosophy = document.getElementById("Philosophy");
const arts = document.getElementById("Arts");
const science = document.getElementById("Science");
const sports = document.getElementById("Sports");
const choice = document.getElementById("Choice");
const genre = document.getElementById('genre');
const display = document.getElementsByClassName('display')[0];
const displayQuote = document.getElementsByClassName('displayQuote')[0];
const zoomOut = document.getElementsByClassName('zoom_out')[0];
const zoomIn = document.getElementsByClassName('zoom_in')[0];

//for glowing and dimming bulb
const lights = document.getElementsByClassName('bulb')[0];
let original = false;
lights.addEventListener('click', ()=>{
    if(original){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        lights.src = './images/bulbOn.png';
        genre.style.backgroundColor = 'white';
        genre.style.color = 'black';
        document.getElementById('prev').style.backgroundColor = 'lightgrey';
        document.getElementById('prev').style.color = 'black';
        document.getElementById('next').style.backgroundColor = 'lightgrey';
        document.getElementById('next').style.color = 'black';
        document.getElementById('rand').style.backgroundColor = 'lightgrey';
        document.getElementById('rand').style.color = 'black';
        zoomIn.src = './images/zoom_in.png';
        zoomOut.src = './images/zoom_out.png';
    }else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        lights.src = './images/bulbOff.png';
        genre.style.backgroundColor = 'black';
        genre.style.color = 'white';
        document.getElementById('prev').style.backgroundColor = '#333';
        document.getElementById('prev').style.color = 'white';
        document.getElementById('next').style.backgroundColor = '#333';
        document.getElementById('next').style.color = 'white';
        document.getElementById('rand').style.backgroundColor = '#333';
        document.getElementById('rand').style.color = 'white';
        zoomIn.src = './images/zoom_in_light.png';
        zoomOut.src = './images/zoom_out_light.png';
    }
    original = !original;
})

//for hiding the initial intro
const intro = document.getElementsByClassName("intro")[0];
const bodyElement = document.getElementsByClassName("body-content")[0];

intro.addEventListener('click', ()=>{
    intro.classList.add('hidden');

    intro.addEventListener('transitioned', ()=>{
        intro.style.display = 'none';
    }, {once: true});
    bodyElement.style.display = 'block';
});

//for controlling font-sizes
const sizes=[30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
let i = 0;
zoomIn.addEventListener('click', ()=>{
    (i<10)?i++:i;
    displayQuote.style['font-size'] = sizes[i] + 'px';
});
zoomOut.addEventListener('click', ()=>{
    (i>0)?i--:i;
    displayQuote.style['font-size'] = sizes[i] + 'px';
});


const prev = document.getElementById('prev');
const next = document.getElementById('next');
const randomly = document.getElementById('rand');

prev.style.display = 'none';
next.style.display = 'none';
randomly.style.display = 'none';

const scienceQuotes = [
    {quotes: 'Imagination is powerful than knowledge.', author: 'Albert Einstein'},
    {quotes: 'I stand on the shoulder of giants.', author: 'Issac Newton'},
    {quotes: 'But why do it matter though.', author: 'Not Nikola Tesla'},
    {quotes: 'Use more mobiles please.', author: 'Arthur Mobile'},
    {quotes: 'Create beautiful things.', author: 'Masta kit'},
]
const artQuotes = [
    {quotes: 'Mona Lisa the beauty.', author: 'Da Vinci'},
    {quotes: 'Winds moving through the night.', author: 'Van Gough'},
    {quotes: 'They put me in money hiest.', author: 'Salvador Dali'},
    {quotes: 'Create beautiful sculptures.', author: 'Michaelangelo'},
    {quotes: 'I paint you Rose.', author: 'Jack'},
]
const philosophyQuotes = [
    {quotes: 'To confuse the opponent you must first confuse yourself.', author: 'Sun Tsu'},
    {quotes: 'My name might be spelled wrong.', author: 'Nietsze'},
    {quotes: 'Am I a philosopher?', author: 'Aristotle'},
    {quotes: 'I am considered a communist.', author: 'Karl Marx'},
    {quotes: 'China owes me one.', author: 'Mao'},
]
const sportsQuotes = [
    {quotes: 'I play football for the joy.', author: 'Lionel Messi'},
    {quotes: 'It\'s hard to be Cristiano.', author: 'Cristiano Ronaldo'},
    {quotes: 'And I took that personally.', author: 'Michael Jordan'},
    {quotes: 'I am greatness.', author: 'Mohammed Ali'},
    {quotes: 'Gegen press them.', author: 'Jurgen Klopp'},
]

genre.addEventListener('click', ()=>{
    const value = genre.value;
    if(value === 'Science'){
        display.textContent = scienceQuotes[index].author;
        displayQuote.textContent = scienceQuotes[index].quotes;
        (index === 0)? prev.style.display = 'none': prev.style.display='';
        (index === Object.keys(scienceQuotes).length-1)? next.style.display = 'none': next.style.display='';
        randomly.style.display = '';
    }else if(value === 'Arts'){
        display.textContent = artQuotes[index].author;
        displayQuote.textContent = artQuotes[index].quotes;
        (index === 0)? prev.style.display = 'none': prev.style.display='';
        (index === Object.keys(artQuotes).length-1)? next.style.display = 'none': next.style.display='';
        randomly.style.display = '';
    }else if(value === 'Philosophy'){
        display.textContent = philosophyQuotes[index].author;
        displayQuote.textContent = philosophyQuotes[index].quotes;
        (index === 0)? prev.style.display = 'none': prev.style.display='';
        (index === Object.keys(philosophyQuotes).length-1)? next.style.display = 'none': next.style.display='';
        randomly.style.display = '';
    }else if(value === 'Sports'){
        display.textContent = sportsQuotes[index].author;
        displayQuote.textContent = sportsQuotes[index].quotes;
        (index === 0)? prev.style.display = 'none': prev.style.display='';
        (index === Object.keys(sportsQuotes).length-1)? next.style.display = 'none': next.style.display='';
        randomly.style.display = '';
    }else{
        displayQuote.textContent = 'Select a genre please';
        display.textContent = '';
        prev.style.display = 'none';
        next.style.display = 'none';
        randomly.style.display = 'none';
    }
});

let index = 0;
prev.addEventListener('click', ()=>{
    let value = genre.value;
    let quote;
    if(value === 'Science'){
        quote = scienceQuotes;
    }else if(value === 'Arts'){
        quote = artQuotes;
    }else if(value === 'Philosophy'){
        quote = philosophyQuotes;
    }else if(value === 'Sports'){
        quote = sportsQuotes;
    }else{
        console.log('no quotes');
        prev.style.display = 'none';
        next.style.display = 'none';
    }

    if(index === 0){
        prev.style.display = 'none';
    }else{
        index--;
        if(index === 0){
            prev.style.display = 'none';
        }
        next.style.display = '';
        display.textContent = quote[index].author;
        displayQuote.textContent = quote[index].quotes;
    }
});

next.addEventListener('click', ()=>{
    let value = genre.value;
    let quote;
    if(value === 'Science'){
        quote = scienceQuotes;
    }else if(value === 'Arts'){
        quote = artQuotes;
    }else if(value === 'Philosophy'){
        quote = philosophyQuotes;
    }else if(value === 'Sports'){
        quote = sportsQuotes;
    }else{
        console.log('no quotes');
        prev.style.display = 'none';
        next.style.display = 'none';
    }
    if(index < Object.keys(quote).length-1){
        index++;
        if(index === Object.keys(quote).length-1){
            next.style.display = 'none';
        }
        prev.style.display = '';
        display.textContent = quote[index].author;
        displayQuote.textContent = quote[index].quotes;
    }else{
        next.style.display = 'none';
    }
});


//randomly display a quote from the category
randomly.addEventListener('click', ()=>{
    let value = genre.value;
    let quote;

    if(value === 'Science'){
        quote = scienceQuotes;
    }else if(value === 'Arts'){
        quote = artQuotes;
    }else if(value === 'Philosophy'){
        quote = philosophyQuotes;
    }else if(value === 'Sports'){
        quote = sportsQuotes;
    }else{
        console.log('no quotes');
        prev.style.display = 'none';
        next.style.display = 'none';
    }


    //one way to getting random numbers(sortaa)
    // let time = new Date();
    // // console.log(time.getSeconds());
    // let val = time.getSeconds() % Object.keys(quote).length;

    const length = Object.keys(quote).length;
    let val = (Math.floor(Math.random()*100)) % length;

    index = val

    if(val >= 0 || val <= length-1){
        display.textContent = quote[val].author;
        displayQuote.textContent = quote[val].quotes;
        prev.style.display = '';
        next.style.display = '';
    }
    if(val === 0){
        prev.style.display = 'none';
        next.style.display = '';
    }
    if(val === length-1){
        prev.style.display = '';
        next.style.display = 'none';
    }
});