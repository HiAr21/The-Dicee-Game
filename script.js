
function getRandomNumber(){
    let ran=Math.floor(Math.random()*6)+1;
    return ran;
}
let arr=[];
let arr1=[];
function onClickBtn(){
    let playerOneDice= getRandomNumber();
    let playerTwoDice= getRandomNumber();

    arr.push(playerOneDice);
    arr1.push(playerTwoDice);
    function winnerIs(){
        if(playerOneDice>playerTwoDice)
            document.querySelector("h1").textContent="🚩Player 1 wins";
        else if(playerOneDice<playerTwoDice)
            document.querySelector("h1").textContent="Player 2 wins🚩";
        else
            document.querySelector("h1").textContent="DRAW";    
    }

    document.querySelectorAll("img")[0].src="./images/dice"+playerOneDice+".png";
    document.querySelectorAll("img")[1].src="./images/dice"+playerTwoDice+".png";

    winnerIs();
    
    function scorelist(){
        const list = document.querySelector(".scorelist1");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        const list2 = document.querySelector(".scorelist2");
        while (list2.hasChildNodes()) {
            list2.removeChild(list2.firstChild);
        }
    
        for(let i=0;i<arr.length;i++){
            const textNode = document.createTextNode(arr[i]);
            const node = document.createElement("p");
            node.appendChild(textNode);
            document.querySelector(".scorelist1").appendChild(node);
        }
        for(let i=0;i<arr1.length;i++){
            const textNode = document.createTextNode(arr1[i]);
            const node = document.createElement("p");
            node.appendChild(textNode);
            document.querySelector(".scorelist2").appendChild(node);
        }
    }

    scorelist();
}

