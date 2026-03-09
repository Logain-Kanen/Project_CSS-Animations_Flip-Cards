let flipped = false;
document.getElementById('cardContainer').onclick = function(){
    let card = document.getElementById('card');
    if(flipped){
        card.style.transform = 'rotateY(0deg)'
    } else{
        card.style.transform = 'rotateY(180deg)'
    }
    flipped = !flipped;
}