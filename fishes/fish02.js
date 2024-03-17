// 背景變暗
// var fishes = {
//     name: ["pufferFish", "otoro", "yelloFish","石斑魚"],
//     weight: ["3KG", "4KG", "6KG","8KG"],
//     place: ["0~50m", "50~130m"]
// }
var fishes = {
    grouper: ["石斑魚", "8KG", "50~130m"],
    pufferFish: ["河豚", "3KG", "0~50m"],
    oToro: ["鮪魚", "6KG", "0~130m"],
    tenFingers:["十指金眼鯛","3KG","130~250m"],
    threeTeeth:["三齒魨","5KG","130~250m"],
    elephantOct:["小飛象張魚","4KG","冰河區域"],
    whiteShrimp:["白虎蝦","0.1KG","0~130m"],
    squid:["花枝","4KG","50~130m"],
    redFish:["花斑刺鰓鮨","3KG","50~130m"],
    kingCrab:["金色帝王蟹","8KG","冰河區域"],
    gunSquid:["長槍烏賊","4.6KG","50~130m"],
    starFish:["青瞻星魚","5KG","130~250m"],
    lionFish:["南極獅子魚","2KG","冰河區域"],
    norwayLobs:["挪威海螯蝦","0.2KG","130~250m"],
    comeFish:["康馬氏加椿","8KG","50~130m"],
    uglyFish:["軟隱棘杜父魚","7.5KG","冰河區域"],
    damoFish:["雪茄達摩鯊","5KG","130~250m"],
    singleFish:["單棘躄魚","5KG","130~250m"],
    shortLion:["短吻獅子魚","5KG","130~250m"],
    yellowFish:["褐擬鱗魨","3.8KG","0~50m"],
    snowFish:["黑線鱈","6KG","冰河區域"],
    swordFish:["平鰭旗魚","9KG","50~130m"],
    euroLob:["歐洲螯龍蝦","1KG","0~50m"],
    blueFish:["大西洋鯖魚","3.5KG","50~130m"],
    moneyFish:["錢鰻","9KG","0~50m"]

}


const darklayer = document.querySelector('.darklayer');
const fishlist = document.querySelector('.fishList');

const fishTriggers = document.querySelectorAll('.fish_trigger');

fishTriggers.forEach(function(fishTriggers){
    fishTriggers.addEventListener('click', function () {
        darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        darklayer.style.display = "flex";
        fishlist.style.backgroundColor = 'rgb(245, 245, 220, 0.8)';
        fishlist.style.display = "flex";
    });
})
// 關閉魚選單
function shut(){
    // location.reload();
    darklayer.style.display = "none";
    fishlist.style.display = "none";
}

// 所有魚的同時觸發


document.getElementById("starFish").addEventListener('click', printFishData);
document.getElementById("tenFingers").addEventListener('click', printFishData);
document.getElementById("threeTeeth").addEventListener('click', printFishData);
document.getElementById("norwayLobs").addEventListener('click', printFishData);
document.getElementById("damoFish").addEventListener('click', printFishData);
document.getElementById("singleFish").addEventListener('click', printFishData);






function printFishData(event) {
    const fishid = event.target.id;
    const fishdata = fishes[fishid];
    document.getElementById("fish_name").innerHTML = "名稱&nbsp;:&nbsp;"+fishdata[0];
    document.getElementById("fish_weight").innerHTML = "體重&nbsp;:&nbsp;"+fishdata[1];
    document.getElementById("fish_area").innerHTML = "出沒地&nbsp;:&nbsp;"+fishdata[2];
    
}

////////////////////////////////////青瞻星魚///////////////////////////////////////////

document.getElementById("starFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/青瞻星魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "眼睛和吻部都大，頭部變平，魚身越靠近尾部越窄，身長約35公分。隱藏在沙子或泥土中，狩獵蝦、螃蟹和其他魚等。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/青瞻星魚_食物.jpg";
});

//////////////////////////////////////十指金眼鯛////////////////////////////////////////////

document.getElementById("tenFingers").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/十指金眼鯛.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "生活在深海岸礁的金眼鯛科魚類。特徵為金色的大眼睛。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/十指金眼鯛_食物.jpg";
});
/////////////////////////////////三齒魨/////////////////////////////////////////////////

document.getElementById("threeTeeth").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/三齒.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "魚呈現黃褐色上有黑色斑點，腹部有可以像扇子般開關的大膜。棲息於平均水深100公尺以上的深大陸棚周圍，以海綿或刺胞生物等為食。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/三齒_食物.jpg";
});

///////////////////////////////////挪威海螯蝦///////////////////////////////////////

document.getElementById("norwayLobs").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/挪威海螯蝦.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "特徵是雙螯修長，整體身型都很纖細。對光敏感，因此在黑暗中比較活躍。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/挪威海螯蝦_食物.jpg";
});

///////////////////////////////////雪茄達摩鯊///////////////////////////////////////////////

document.getElementById("damoFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/雪茄達摩鯊.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "魚身呈褐色長橢圓形，上面有黑色項鍊花紋，牙齒鋒利，會啃食周圍大中型海洋動物的肉塊";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/雪茄達摩鯊_食物.jpg";
});

///////////////////////////////////單棘//////////////////////////////////////////

document.getElementById("singleFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/單棘.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "魚身大且呈圓形，尾部短而多刺，通體成深褐色，使用鰭爬行，捕食經過附近的生物。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/單棘_食物.jpg";
});


