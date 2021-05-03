//** 初期化　定義 **//
const answerNum  = document.getElementById('answerNum');
const numCheck   = document.getElementById('numCheck');
const remainTurn = document.getElementById('remainTurn');

let eat = 0;
let bite = 0;

let cpuNum = [];
let answer = [];

let turn  = 10;
let score = 1000;
let comp  = [];
let count = 0;

 //** ランダムな整数0〜9生成 **//
function randomNum () {
    return Math.floor(Math.random() *10)
};

//** 3桁被らないよう生成→配列に格納 **//
function num() {
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

num();
//**検証ツールでカンニング可能**/
console.log(cpuNum[0],cpuNum[1], cpuNum[2])

/** ユーザーのテキスト値が重複してないか調べる **/
function existsSameValue(array){
    let duplicate = new Set(array);
    return duplicate.size == array.length;
  }


//** 答え合わせを押した時 **//
numCheck.addEventListener('click', function() {
    answer = (answerNum.value).split('').map(Number);
    check(answer);
    comp = [cpuNum, answer];
    judge(comp);
    eval();
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
    for (let i = 0; i < 3; i++) {
        if (x[0][i] === x[1][i]){
            eat += 1;
        } 
    comp = cpuNum.concat(answer);
    let count = new Set(comp).size;
    bite = 6 - count - eat; 
    }
}
//**結果をアラートする **/
function eval() {
    if (eat === 3) {
        alert(`${eat}EAT\n正解です！`);
        score += 1000;
        alert(`あなたのスコアは${score}です`)
        location.reload();
    } else {
        alert(`${eat}EAT\n${bite}BITE`);
        turn -= 1;
        score -= 200;
        if (turn === 0) {
            alert('あなたの負けです')
            score -= 1000;
            alert(`あなたのスコアは${score}です`)
            location.reload();
        }
    }
    eat = 0;
    bite = 0;
}