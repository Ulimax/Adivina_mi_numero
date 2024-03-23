const adivinaBtn = document.querySelector('#Guess');
const YesBtn = document.querySelector('#Yes');
const NoBtn = document.querySelector('#No');
const Questions = document.querySelector('#Preguntas');
const YesBtn2 = document.querySelector('#Yes2');
const NoBtn2 = document.querySelector('#No2');

YesBtn.addEventListener('click', () => updateRange(true));
NoBtn.addEventListener('click', () => updateRange(false));
adivinaBtn.addEventListener('click', binarySearch);
YesBtn2.addEventListener('click', () => updateRange2(true));
NoBtn2.addEventListener('click', () => updateRange2(false));
YesBtn2.style.display='none';
NoBtn2.style.display='none';
YesBtn.style.display='none';
NoBtn.style.display='none';

let leftIndex = 1;
let rightIndex =100;
let middleIndex;

function restart(){
    YesBtn2.style.display='none';
    NoBtn2.style.display='none';
    YesBtn.style.display='none';
    NoBtn.style.display='none';
    
    leftIndex = 1;
    rightIndex = 100;
    
}

// Binary search
function updateBtns(arr) {
    [YesBtn.style.display,NoBtn.style.display,YesBtn2.style.display,NoBtn2.style.display,adivinaBtn.style.display]=arr;
}
function binarySearch() {
    
    if(leftIndex <= rightIndex) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        // Preguntar si el de en medio es igual al que buscamos
        Questions.innerHTML = `¿Tu número es ${middleIndex}?`;

        updateBtns(['inline', 'inline' , 'none', 'none', 'none']);
        
        
    }

    else{
        adivinaBtn.style.display='inline';
        restart();
        Questions.innerHTML = `Lo sentimos no pudimos encontrar su número`;
    }


    
}

function updateRange(afirmativo) {
    if (afirmativo) {
        Questions.innerHTML = `Tu número es ${middleIndex})`;
        adivinaBtn.style.display='inline';
        restart();
    } else {
        // Preguntar si es menor
        updateBtns(['none', 'none' , 'inline', 'inline']);
        Questions.innerHTML = `¿Tu número es menor a ${middleIndex}?`;

    }
}

function updateRange2(afirmativo) {
    if (afirmativo) {
        rightIndex = middleIndex - 1;
    } else {
         
            leftIndex = middleIndex + 1;
       
    }
    binarySearch();
}
