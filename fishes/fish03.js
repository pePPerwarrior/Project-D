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
    elephantOct:["小飛象章魚","4KG","冰河區域"],
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


document.getElementById("lionFish").addEventListener('click', printFishData);
document.getElementById("uglyFish").addEventListener('click', printFishData);
document.getElementById("snowFish").addEventListener('click', printFishData);
document.getElementById("kingCrab").addEventListener('click', printFishData);
document.getElementById("elephantOct").addEventListener('click', printFishData);






function printFishData(event) {
    const fishid = event.target.id;
    const fishdata = fishes[fishid];
    document.getElementById("fish_name").innerHTML = "名稱&nbsp;:&nbsp;"+fishdata[0];
    document.getElementById("fish_weight").innerHTML = "體重&nbsp;:&nbsp;"+fishdata[1];
    document.getElementById("fish_area").innerHTML = "出沒地&nbsp;:&nbsp;"+fishdata[2];  
}

///////////////////////////////////南極獅子魚////////////////////////////////////////////

document.getElementById("lionFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/南極獅子魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "棲息於南極地區，深度可達300公尺。總是貼在地面一棟是其主要特徵，身上有深色條紋。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/南極獅子魚_食物.jpg";
});

/////////////////////////////////////小飛象章魚/////////////////////////////////////////////

document.getElementById("elephantOct").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/小飛象章魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "棲息於深冷的大海中，魚鰭模樣像耳朵。因為這樣子和被稱為小飛象的幼象相似，故被稱為小飛象章魚。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/小飛象章魚_食物.jpg";
});

/////////////////////////////////軟銀棘杜父魚/////////////////////////////////////////

document.getElementById("uglyFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/軟銀棘杜父魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "幾乎沒有肌肉，以果凍一樣的身體減少密度、維持浮力。曾經被選為世界上最醜的動物第一名。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/軟銀棘杜父魚_食物.jpg";
});

/////////////////////////////////金色帝王蟹/////////////////////////////////////////////////

document.getElementById("kingCrab").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/金色帝王蟹.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "主要分布於阿拉斯加等寒冷的海域之中，特徵是主要由鈣組成的金色外殼和背上的刺。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/金色帝王蟹_食物.jpg";
});

////////////////////////////////////黑線鱈/////////////////////////////////////////

document.getElementById("snowFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/黑線鱈.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "以美麗的外貌而聞名，腹部雪白，背呈現紫紅色，側面為銀灰色。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/黑線鱈_食物.jpg";
});


