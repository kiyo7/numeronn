//** 初期化　定義 **//
const answerNum  = document.getElementById('answerNum');
const numCheck   = document.getElementById('numCheck');
const remainTurn = document.getElementById('remainTurn');

let eat = 0;
let bite = 0;

let cpuNum = [];
let answer = [];
// let Duplicate = new Set();

 //** ランダムな整数0〜9生成 **//
function randomNum () {
    return Math.floor(Math.random() *10)
};

//** 3桁被らないよう生成→配列に格納 **//
function Num() {
    cpuNum[0] = (randomNum());
    cpuNum[1] = (randomNum());
    cpuNum[2] = (randomNum());

    while (cpuNum[0] === cpuNum[1]) {
        cpuNum[1] = (randomNum());
    }
    while (cpuNum[0] === cpuNum[2] || cpuNum[1] === cpuNum[2]) {
        cpuNum[2] = (randomNum());
    }
    return cpuNum;
}

/** 配列内で値が重複してないか調べる **/
function existsSameValue(array){
    let Duplicate = new Set(array);
    return Duplicate.size == array.length;
  }

console.log(Num())//答えの数字出力（今だけ）

//** 答え合わせを押した時 **//
numCheck.addEventListener('click', function() {
    answer = (answerNum.value).split('').map(Number);
    check(answer);
    judge();
})

// ** 入力されたテキストの判定 **//
function check(text) {
    if(text.length === 3){
        if (existsSameValue(answer)) {
        } else {
            alert('同じ数字は使えません');
        }
    } else {
        alert('数字は3桁で設定してください');
    } 
}
//**　答えと比較・判定 **//
function judge() {
    if (cpuNum.toString() === answer.toString()) {
        eat = 3;
        alert(`${eat}EAT\n正解です！`);
        location.reload();
    } else {

    }
};

