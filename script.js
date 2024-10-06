let btr = document.querySelectorAll(".btr");
let rest_btn = document.querySelector("#rest-btn");
let massageCont = document.querySelector(".mgContaina")
let massageBox = document.querySelector(".mgBox");
let new_game = document.querySelector("#new_game")

let playerO = true;  //payerO and playerZ
const winerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


btr.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO === true) {
            box.innerText = "O"
            playerO = false;
        } else {
            box.innerText = "X"
            playerO = true;
        }
        box.disabled = "true";
        checkWinner();
    });
});

const inablebtr = () => {
    for (let boxLock of btr) {
        boxLock.disabled = false;
        boxLock.innerText = "";
    }
}

const rest_button = () => {
    playerO = true;
    inablebtr();
    massageCont.classList.add("hiden");
};

const disabledbtr = () => {
    for (let boxLock of btr) {
        boxLock.disabled = true;
    }
}



const showwinner = (winner) => {
    massageBox.innerText = `Congratulations,Winner is  ${winner} !`
    massageCont.classList.remove("hiden");
    disabledbtr();
};

const checkWinner = () => {
    for (let pattern of winerPattern) {
        let val1 = btr[pattern[0]].innerText;
        let val2 = btr[pattern[1]].innerText;
        let val3 = btr[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner " + val1);
                showwinner(val1);
            }
        }
    }
};

  // rest_btn()calling to rest_button function

new_game.addEventListener("click",rest_button );
rest_btn.addEventListener("click", rest_button);


