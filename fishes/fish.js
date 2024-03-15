// 背景變暗

// document.addEventListener('click', function() {
//     const  darklayer = document.querySelector('.darklayer');
//     darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
// });
const  darklayer = document.querySelector('.darklayer');
const  fishlist = document.querySelector('.fishList');
function dark(){
    darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
    darklayer.style.display = "block";
    fishlist.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
    fishlist.style.display = "flex";

}

// if(darklayer.style.display = "block"){

// }

var fishes ={
    name:[pufferFish,otoro,yelloFish],
    weight:["3KG","4KG","6KG"],
    place:["0~50m","50~100m"]
}

