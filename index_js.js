// phone appear button
var phoneButt = document.getElementById("phone");
function phonebutton(){
    phoneButt.style.display = "flex";   
}

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

// 大螢幕關閉 同時顯示手機
// 大螢幕關閉 同時顯示手機
// 大螢幕關閉 同時顯示手機
function bg_phone_trigger_shut(){
    document.getElementById("bg_phone-sc").style.display = "none";
    document.getElementById("phone").style.display = "block";

}


