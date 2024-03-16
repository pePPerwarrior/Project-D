// 背景變暗
// var fishes = {
//     name: ["pufferFish", "otoro", "yelloFish","石斑魚"],
//     weight: ["3KG", "4KG", "6KG","8KG"],
//     place: ["0~50m", "50~130m"]
// }
var fishes = {
    grouper: ["石斑魚", "8KG", "50~130m"],
    pufferFish: ["河豚", "3KG", "0~50m"],
    oToro: ["鮪魚", "5KG", "0~50m"]
}


const darklayer = document.querySelector('.darklayer');
const fishlist = document.querySelector('.fishList');


const fishTriggers = document.querySelectorAll('.fish_trigger');



fishTriggers.forEach(function(fishTriggers){
    fishTriggers.addEventListener('click', function () {
        darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        darklayer.style.display = "block";
        fishlist.style.backgroundColor = 'rgb(245, 245, 220, 0.8)';
        fishlist.style.display = "flex";
    });
})



// OG 獨立版增加監視器
////////////////////////////////////////////////////////////////////////
// console.log(document.getElementsByClassName('fish_trigger'));
// document.querySelector('.fish_trigger').addEventListener('click', function () {
//     darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     darklayer.style.display = "block";
//     fishlist.style.backgroundColor = 'rgb(245, 245, 220,0.8)';
//     fishlist.style.display = "flex";
// });
///////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////

/////////////////////// 河豚  pufferFish///////////////////////////////////////
document.getElementById("pufferFish").addEventListener('click', printFishData);
function printFishData(event) {
    const fishid = event.target.id;
    const fishdata = fishes[fishid];
    document.getElementById("fish_name").innerHTML += fishdata[0];
    document.getElementById("fish_weight").innerHTML += fishdata[1];
    document.getElementById("fish_area").innerHTML += fishdata[2];
    
}

document.getElementById("pufferFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/河豚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "123";
});


/////////////////////// 石斑魚  grouper///////////////////////////////////////
document.getElementById("grouper").addEventListener('click', printFishData);
function printFishData(event) { 
    const fishid = event.target.id;
    const fishdata = fishes[fishid];
    document.getElementById("fish_name").innerHTML += fishdata[0];
    document.getElementById("fish_weight").innerHTML += fishdata[1];
    document.getElementById("fish_area").innerHTML += fishdata[2];
   
}

document.getElementById("grouper").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/石斑魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "魚呈現深紅褐色，上面帶有不規則的黃或銀色斑點，身長約90公分。吻部寬大，下顎突出，棲身於水深不及300公尺的海底暗礁周圍。";
});




