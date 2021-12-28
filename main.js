const quizData = [
    {
        title:"2032年のオリンピック開催都市は？",
        choices:[
            { id:1, value:"イスタンブール"},
            { id:2, value:"ブリスベン"},
            { id:3, value:"ロサンゼルス"},
            { id:4, value:"アムステルダム"},
        ],
        correctId: 2,
    },
    {
        // 問題足す場合
    }
]
// idは正誤判定にも活用

//getElement

const quizSentence =
document.getElementById('quiz_sentence');
const quizAnswerSelect =
document.getElementById('quiz_answer_select');
const quizSendButton = 
document.getElementById('quiz_send_button');
const quizResult = 
document.getElementById('quiz_result');

const useQuizData = quizData[0];

// 問題文
quizSentence.innerHTML = `<p>${useQuizData.title}</p>`

// 選択肢

for (const choice of useQuizData.choices) {

    quizAnswerSelect.innerHTML += 

    //input部分がボタン、label部分が文字
    `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}">
    <label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`
    
}

// ボタン押下時

quizSendButton.onclick = ev => {

    // 選択肢を全部取得（.querySelectorAll）

    for (const element of quizAnswerSelect.querySelectorAll("input")) {

        // 選択肢の状態を確認し、チェック状態なら判定

        if (element.checked) {

            const result = element.id == useQuizData.correctId

            //?は正解の時、:は不正解の時
            const str = result ? "正解です" : "不正解です";

            quizResult.innerHTML = `<p>${str}</p>`

        }

    }

};