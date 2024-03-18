// phone appear button
var phoneButt = document.getElementById("phone");
var phoneButtTrigger = document.getElementById("phonetrigger");
var phoneButtTriggerclose = document.getElementById("phonetriggerclose");
var phoneFishListClose = document.getElementById("close_trigger_2");
function phonebutton(){
    phoneButt.style.display = "flex"; 
    phoneButtTriggerclose.style.display = "inline-block"; 
    phoneButtTrigger.style.display = "none"; 
}

function phonebuttonclose(){
    phoneButt.style.display = "none"; 
    phoneButtTriggerclose.style.display = "none" ;
    phoneButtTrigger.style.display = "inline-block" ;

}

// 大螢幕關閉 同時顯示手機
// 大螢幕關閉 同時顯示手機
// 大螢幕關閉 同時顯示手機
function bg_phone_trigger_shut(){
    document.getElementById("bg-phone-sc").style.display = "none";
    document.getElementById("phone").style.display = "block";
    document.getElementById("footer_head").style.display = "flex";
    phoneButt.style.display = "flex"; 
    phoneButtTriggerclose.style.display = "inline-block";

}

// APP ID 觸發 APP ID 觸發  APP ID 觸發  APP ID 觸發 APP ID 觸發 APP ID 觸發 APP ID 觸發

// fish app 0~130 trigger
var fisha_app_01_trigger = document.getElementById("fish_app_01");
var fisha_app_02_trigger = document.getElementById("fish_app_02");
var fisha_app_03_trigger = document.getElementById("fish_app_03");
var bg_phone_equipment = document.getElementById("bg-phone-sc");

function fish_app_01_trigger(){
    fisha_app_01_trigger.style.display= "block";
    fisha_app_02_trigger.style.display= "none";
    fisha_app_03_trigger.style.display= "none";
    bg_phone_equipment.style.display= "flex";
    // document.getElementById("bg-phone-sc").style.display = "flex";
    document.getElementById("footer_head").style.display = "none";
    phoneButt.style.display = "none"; 
    phoneButtTriggerclose.style.display = "none" ;
   


}
function fish_app_02_trigger(){
    fisha_app_01_trigger.style.display= "none";
    fisha_app_02_trigger.style.display= "block";
    fisha_app_03_trigger.style.display= "none";
    bg_phone_equipment.style.display= "flex";
    // document.getElementById("bg-phone-sc").style.display = "flex";
    document.getElementById("footer_head").style.display = "none";
    phoneButt.style.display = "none"; 
    phoneButtTriggerclose.style.display = "none" ;


}
function fish_app_03_trigger(){
    fisha_app_01_trigger.style.display= "none";
    fisha_app_02_trigger.style.display= "none";
    fisha_app_03_trigger.style.display= "block";
    bg_phone_equipment.style.display= "flex";
    // document.getElementById("bg-phone-sc").style.display = "flex";
    document.getElementById("footer_head").style.display = "none";
    phoneButt.style.display = "none"; 
    phoneButtTriggerclose.style.display = "none" ;


}



// time bar
var time_at_bar = new Date();
var tab_year = time_at_bar.getFullYear();
var tab_mon = time_at_bar.getMonth()+1;
var tab_date = time_at_bar.getDate();
var tab_hours = time_at_bar.getHours();
var min = time_at_bar.getMinutes();
var tab_min = min.toString().padStart(2,"0");
var show_time = tab_year+"年"+tab_mon+"月"+tab_date+"日"+"\u00A0"+tab_hours+":"+tab_min;


document.getElementById("phone_top_bar").innerHTML = show_time;
document.getElementById("bg-phone_top_bar").innerHTML = show_time;

// fish app

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




// 幫所有選項上狀態
const fishTriggers = document.querySelectorAll('.fish_app_list01');
const fishTriggers002 = document.querySelectorAll('.fish_app_list02');
const fishTriggers003 = document.querySelectorAll('.fish_app_list03');

fishTriggers.forEach(function(fishTriggers){
    fishTriggers.addEventListener('click', function () {
        darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        darklayer.style.display = "flex";
        fishlist.style.backgroundColor = 'rgb(245, 245, 220, 0.9)';
        fishlist.style.display = "flex";
        document.getElementById("close_trigger").style.display = "block"
        phoneFishListClose.style.display = "none";
    });
})
fishTriggers002.forEach(function(fishTriggers002){
    fishTriggers002.addEventListener('click', function () {
        darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        darklayer.style.display = "flex";
        fishlist.style.backgroundColor = 'rgb(245, 245, 220, 0.8)';
        fishlist.style.display = "flex";
        document.getElementById("close_trigger").style.display = "block"
        phoneFishListClose.style.display = "none";
    });
})
fishTriggers003.forEach(function(fishTriggers003){
    fishTriggers003.addEventListener('click', function () {
        darklayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        darklayer.style.display = "flex";
        fishlist.style.backgroundColor = 'rgb(245, 245, 220, 0.8)';
        fishlist.style.display = "flex";
        document.getElementById("close_trigger").style.display = "block"
        phoneFishListClose.style.display = "none";
    });
})
// 關閉魚選單
function shut(){
    // location.reload();
    darklayer.style.display = "none";
    fishlist.style.display = "none";
    document.getElementById("close_trigger").style.display = "none"
    phoneFishListClose.style.display = "block";
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


document.getElementById("starFish").addEventListener('click', printFishData);
document.getElementById("tenFingers").addEventListener('click', printFishData);
document.getElementById("threeTeeth").addEventListener('click', printFishData);
document.getElementById("norwayLobs").addEventListener('click', printFishData);
document.getElementById("damoFish").addEventListener('click', printFishData);
document.getElementById("singleFish").addEventListener('click', printFishData);



document.getElementById("lionFish").addEventListener('click', printFishData);
document.getElementById("uglyFish").addEventListener('click', printFishData);
document.getElementById("snowFish").addEventListener('click', printFishData);
document.getElementById("kingCrab").addEventListener('click', printFishData);
document.getElementById("elephantOct").addEventListener('click', printFishData);


function test(){console.log("333");}

function printFishData(event) {
    const fishid = event.target.id;
    const fishdata = fishes[fishid];
    document.getElementById("fish_name").innerHTML = "名稱&nbsp;:&nbsp;"+fishdata[0];
    document.getElementById("fish_weight").innerHTML = "體重&nbsp;:&nbsp;"+fishdata[1];
    document.getElementById("fish_area").innerHTML = "出沒地&nbsp;:&nbsp;"+fishdata[2];
    
}

// 淺海魚   淺海魚    淺海魚    淺海魚    淺海魚   淺海魚   淺海魚
// 淺海魚   淺海魚    淺海魚    淺海魚    淺海魚   淺海魚   淺海魚
// 淺海魚   淺海魚    淺海魚    淺海魚    淺海魚   淺海魚   淺海魚
// 淺海魚   淺海魚    淺海魚    淺海魚    淺海魚   淺海魚   淺海魚


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



 
// 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 深海魚 

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



//  冰原區  冰原區  冰原區  冰原區  冰原區  冰原區  冰原區  冰原區  冰原區  冰原區  冰原區 冰原區 
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