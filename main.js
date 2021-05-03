//** 初期化　定義 **//
const answerNum   = document.getElementById('answerNum');
const numCheck    = document.getElementById('numCheck');
const remainTurn  = document.getElementById('remainTurn');
const remainScore = document.getElementById('remainScore');
let eat = 0;
let bite = 0;

let cpuNum = [];
let answer = [];

let turn  = 1;
let score = 1000;
let compare  = [];
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
remainTurn.textContent  = `現在のターン数：${turn}ターン`
remainScore.textContent = `あなたの得点：${score}点`
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
    compare = [cpuNum, answer];
    judge(compare);
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
    compare = cpuNum.concat(answer);
    let count = new Set(compare).size;
    bite = 6 - count - eat; 
    }
}
//**結果をアラートする **/
function eval() {
    if (eat === 3) {
        alert(`${eat}EAT\n正解です！`);
        score += 1000;
        alert(`あなたの得点は${score}点です\nクリアターン数${turn}\nおめでとうございます`)
        location.reload();
    } else {
        alert(`${eat}EAT\n${bite}BITE`);
        turn += 1;
        score -= 200;
        remainTurn.textContent = `現在のターン数：${turn}`
        remainScore.textContent= `あなたの得点：${score}`
        if (turn === 10) {
            alert('あなたの負けです')
            score -= 1000;
            alert(`あなたの得点は${score}点です`)
            location.reload();
        }
    }
    eat = 0;
    bite = 0;
}