var request1 = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
/*
var gameTemplateData=null;
*/
//first request
request1.open('GET', 'https://api.jsonbin.io/b/5f9c77559291173cbca6065d/3');
request1.setRequestHeader("Content-Type", "application/json");
request1.setRequestHeader("secret-key", '$2b$10$aW/Se.zAPErVkDeOY1RXBuvJpK/vqamzcPFrryVvhyT6CzGGnpMk2');
request1.onload = function () {
    if (request1.status >= 200 && request1.status < 400) {
        gameTemplateData = JSON.parse(request1.responseText);
        localStorage["req1"]=request1.responseText;
        console.log("Request 1",gameTemplateData);
        let index=0;
        for(let i=0;i<gameTemplateData.games.length;i++){
            const gameName=gameTemplateData.games[i].name;
            if(localStorage["game-name"]===gameName){
                console.log("Match found");
                index=i;
                break;
            }
        }
        
        createHTMLGameTemplate(gameTemplateData,index);

    } else {
        console.log("The server returned an error.");
    }
};




request1.onerror = function () {
    console.log("connection error");
};
request1.send();

/*var gameTemplateData=null;
gameTemplateData = JSON.parse(localStorage["req1"]);
//localStorage["req1"]=request1.responseText;
console.log("Request 1",gameTemplateData);
let index=0;
for(let i=0;i<gameTemplateData.games.length;i++){
    const gameName=gameTemplateData.games[i].name;
    if(localStorage["game-name"]===gameName){
        console.log("Match found");
        index=i;
        break;
    }
}

createHTMLGameTemplate(gameTemplateData,0);*/


//second request
/*
request2.open('GET','https://api.jsonbin.io/b/5f9f37c6ce4aa228955443ee/1');
request2.setRequestHeader("Content-Type","application/json");
request2.setRequestHeader("secret-key",'$2b$10$aW/Se.zAPErVkDeOY1RXBuvJpK/vqamzcPFrryVvhyT6CzGGnpMk2');
request2.onload = function () {
    if (request2.status >= 200 && request2.status < 400) {
        var recommendData = JSON.parse(request2.responseText);
        console.log("Request 2",recommendData);
        localStorage["req2"]=request2.responseText;
        createHTMLRecommend(recommendData);


    } else {
        console.log("The server returned an error.");
    }
};
request2.onerror = function () {
    console.log("connection error");
};
request2.send();
*/

//var recommendData = JSON.parse(localStorage["req2"]);
//console.log("Request 2",recommendData);
//localStorage["req2"]=request2.responseText;
//createHTMLRecommend(recommendData);


function createHTMLGameTemplate(gameData,i) {
    var rawTemplate = document.getElementById("gameTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);


    var generatedHTML = compiledTemplate(gameData);

    var gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = generatedHTML;

}
/*
function createHTMLRecommend(recommendImgData) {
    var rawRecommendTemplate = document.getElementById("recommendTemplate").innerHTML;
    var compiledRecommendTemplate = Handlebars.compile(rawRecommendTemplate);
    var recommendGenteratedHTML = compiledRecommendTemplate(recommendImgData);
    var recommendContainer = document.getElementById("recommend-container");
    recommendContainer.innerHTML = recommendGenteratedHTML;
}*/