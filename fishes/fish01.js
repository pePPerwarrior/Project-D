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

document.getElementById("pufferFish").addEventListener('click', printFishData);
document.getElementById("whiteShrimp").addEventListener('click', printFishData);
document.getElementById("grouper").addEventListener('click', printFishData);
document.getElementById("oToro").addEventListener('click', printFishData);  
document.getElementById("moneyFish").addEventListener('click', printFishData);
document.getElementById("blueFish").addEventListener('click', printFishData);
document.getElementById("swordFish").addEventListener('click', printFishData);
document.getElementById("euroLob").addEventListener('click', printFishData);
document.getElementById("yellowFish").addEventListener('click', printFishData);
document.getElementById("comeFish").addEventListener('click', printFishData);
document.getElementById("gunSquid").addEventListener('click', printFishData);
document.getElementById("redFish").addEventListener('click', printFishData);
// document.getElementById("starFish").addEventListener('click', printFishData);






function printFishData(event) {
    const fishid = event.target.id;
    const fishdata = fishes[fishid];
    document.getElementById("fish_name").innerHTML = "名稱&nbsp;:&nbsp;"+fishdata[0];
    document.getElementById("fish_weight").innerHTML = "體重&nbsp;:&nbsp;"+fishdata[1];
    document.getElementById("fish_area").innerHTML = "出沒地&nbsp;:&nbsp;"+fishdata[2];
    
}

// OG 獨立版增加監視器
////////////////////////////////////////////////////////////////////////
// console.log(document.getElementsByClassName('fish_trigger'));
// document.querySelector('.fish_trigger').addEventListener('click', function () {
//     darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     darklayer.style.display = "block";
//     fishlist.style.backgroundColor = 'rgb(245, 245, 220,0.8)';
//     fishlist.style.display = "flex";
// });

/////////////////////// 河豚  pufferFish///////////////////////////////////////

document.getElementById("pufferFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/河豚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "通體被棘刺和黑色黑斑點覆蓋，魚身呈白色，身長約120公分。雜食性，特徵為敵人出現時，身體會膨脹。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/河豚_食物.jpg";
});

/////////////////////// 石斑魚  grouper///////////////////////////////////////

document.getElementById("grouper").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/石斑魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "魚呈現深紅褐色，上面帶有不規則的黃或銀色斑點，身長約90公分。吻部寬大，下顎突出，棲身於水深不及300公尺的海底暗礁周圍。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/石斑魚_食物.jpg";
});

//////////////////////////////////////鮪魚////////////////////////////////////////////

document.getElementById("oToro").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/鮪魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "黃色的鰭是他的特徵，一年四季都在繁殖，成長至成體大約需要2年的時間。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/鮪魚_食物.jpg";
});

/////////////////////////////////////////鰻魚///////////////////////////////////////////

document.getElementById("moneyFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/鰻魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "錢鰻，魚身無鱗片，外皮厚實且覆蓋滿黏液，身長約1.5公尺。藏身於熱帶和溫帶海域的暗礁或岩石縫隙中生活，下顎結構獨特，一旦咬住敵人就不會鬆口。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/鰻魚_食物.jpg";
});

///////////////////////////////////////鯖魚///////////////////////////////////////////

document.getElementById("blueFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/鯖魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "吻部長而尖，魚身呈銀白色紡錘型，藍色背部上有黑波浪狀的縱向條紋，身長30~60公尺。棲息於大海水深200公尺左右的冰冷環境。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/鯖魚_食物.jpg";
});

//////////////////////////////////////旗魚///////////////////////////////////////////////

document.getElementById("swordFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/旗魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "長得像條紋四鰭旗魚，但被鰭呈現帆狀。能以每小時110公里的速度游動，廣泛棲息在熱帶和溫帶海域。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/旗魚_食物.jpg";
});

////////////////////////歐洲螯龍蝦/////////////////////////////////

document.getElementById("euroLob").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/歐洲螯龍蝦.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "廣泛分布於北大西洋和地中海西部，棲息在水深最深150公尺的螯龍蝦。甲殼主要為藍色，腹部則為黃色或白色。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/歐洲螯龍蝦_食物.jpg";
});

//////////////////////////////////////褐擬鱗魨///////////////////////////////////////////

document.getElementById("yellowFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/黃魚.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "通體成黃色，眼睛周圍有暗斑，牙齒鋒利，體型巨大，身長約75公分。棲息於珊瑚礁或暗礁斜坡面上，以珊瑚或海膽為食。攻擊性強。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/黃魚_食物.jpg";
});

////////////////////////////////////康馬氏加椿//////////////////////////////////////////////

document.getElementById("comeFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/康馬氏.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "背部呈亮籃色，腹部為銀色及藍灰色混雜，側面有垂直斑紋，主要以蝦、由魚和小魚等為食。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/康馬氏_食物.jpg";
});




////////////////////////////////////長槍烏賊//////////////////////////////////////////////

document.getElementById("gunSquid").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/長槍烏賊.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "呈細長錐形的肉食性軟體動物，平時會將腿放在口袋裡，要捕捉食物時再伸出來。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/長槍烏賊_食物.jpg";
});

////////////////////////////////////花班刺鰓鮨///////////////////////////////////

document.getElementById("redFish").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/花班刺.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "魚呈現紅褐色，上面有小籃斑，身長約60公分。主要棲息於溫暖的珊瑚礁地區，藏身於其後，狩獵其他魚類。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/花班刺_食物.jpg";
});

////////////////////////////////////////白虎蝦///////////////////////////////////////////////

document.getElementById("whiteShrimp").addEventListener('click', function(){
    const x = document.getElementById("fish_image_change");
    x.src = "../images/fish/白虎蝦.jpg";
    const y = document.getElementById("fish_info");
    y.innerHTML = "以淺黑色身體及長觸角為特徵的蝦子。成體可以生長到10公分以上，主要棲息在墨西哥灣和南大西洋的海岸地帶。";
    const z = document.getElementById("food_image_change");
    z.src = "../images/food/白虎蝦_食物.jpg";
});

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("pufferFish").addEventListener('click', printFishData);
// function printFishData(event) {
//     const fishid = event.target.id;
//     const fishdata = fishes[fishid];
//     document.getElementById("fish_name").innerHTML += fishdata[0];
//     document.getElementById("fish_weight").innerHTML += fishdata[1];
//     document.getElementById("fish_area").innerHTML += fishdata[2];
    
// }

// document.getElementById("pufferFish").addEventListener('click', function(){
//     const x = document.getElementById("fish_image_change");
//     x.src = "../images/fish/河豚.jpg";
//     const y = document.getElementById("fish_info");
//     y.innerHTML = "123";
//     const z = document.getElementById("food_image_change");
//     z.src = "../images/food/河豚_食物.jpg";
// });

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////