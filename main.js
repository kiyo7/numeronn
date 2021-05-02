//** 初期化　定義 **//
const answerNum  = document.getElementById('answerNum');
const numCheck   = document.getElementById('numCheck');
const remainTurn = document.getElementById('remainTurn');

let eat = 0;
let bite = 0;
let judgeCount = 0;

let cpuNum = [];
let answer = [];

let comp = [];

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
    let comp = [cpuNum, answer];
    console.log(comp)
    judge(comp);

    eval(); //結果をアラートする関数を作れ 
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
function judge(x) {
    if (x[0][0] === x[1][0]){
        eat += 1;
    } else if (x[0][0] === x[1][1] || x[0][0] === x[1][2]) {
        bite += 1;
    }
    if (x[0][1] === x[1][1]) {
        eat += 1; 
    } else if (x[0][1] === x[1][0] || x[0][1] === x[1][2]) {
        bite += 1;
    }
    if (x[0][2] === x[1][2]) {
        eat += 1;
    } else if (x[0][2] === x[1][0] || x[0][2] === x[1][1]) {
        bite += 1;
    }
}
//**結果をアラートする関数 **/
function eval() {
    if (eat === 3) {
        alert(`${eat}EAT\n正解です！`);
        location.reload();
    } else {
        alert(`${eat}EAT\n${bite}BITE`);
    }
    eat = 0;
    bite = 0;
}