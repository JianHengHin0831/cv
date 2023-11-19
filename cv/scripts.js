function unOrderedList(list,className)
{
    listLength = list.length;
    var ulHTML = "<ul class=\""+className+"\">";
    for (var i = 0; i < listLength; i++) {
        ulHTML += "<li>" + list[i] + "</li>";
    }
    ulHTML += "</ul>";
    return ulHTML; 
}
//skill
skillList=["Java","HTML","CSS","Javascript","MySQL","Python","C++","Machine Learning(Python)"];
document.getElementById("skillList").innerHTML =unOrderedList(skillList,"skill");

const images = ["java.png", "htmlcssjs.png", "mysql.png","Python.png","c.png"]; 
const imageElement = document.getElementById("image");
let currentIndex = 0;

function changeImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 2000);

//club
const clubs= new Map([
    ["Chinese Debate Team","2016-2019"],
    ["Wushu Society","2019-2021"],
    ["Institution of Engineering and Technology(IET)","2022-now"],
    ["Computer Science Society Club","2022-now"],
    ["Volunteering Society","2022-now"]
]);

let text = "";

clubs.forEach(function(value,key){
    text += "Society Name: <b>"+key+"</b><br>"
    text += "Time: "+value+"<br>"
})

document.getElementById("club").innerHTML = text;

//competition achivement
const achivement = new Map([
    ["Chen Jingrun's Cup Mathematics Competition","Distinction"],
    ["Kongfucius's Cup Essay Competition","3rd Prize"],
    ["National Chinese Essay Competition","Distinction"],
    ["XMUM Cup Physics Competition","Commendation"],
    ["Malaysia National Chemistry Quiz","Distinction"],
    ["15th National Mathematics Competition","Consolation Prize"],
    ["7th IMU Virtual Science Discovery Challenge","Top 200 Finalist"]
])

let achieveText=""
achivement.forEach(function(value,key){
    achieveText += "Competition Name: <b>"+key+"</b><br>"
    achieveText += "Prize: "+value+"<br>"
})
document.getElementById("competition achievement").innerHTML=achieveText

const d = new Date();
document.getElementById("date").innerHTML = d;
