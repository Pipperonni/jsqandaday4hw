const questionAndAnswer = [{
    id: "0",
    q: '1',
    question: '2+2',
    correctAnswer: 4
},
{
    id: "1",
    q: '2',
    question: '4+4',
    correctAnswer: 8
},
{
    id: "2",
    q: '3',
    question: '4+6',
    correctAnswer: 10
},
{
    id: "3",
    q: '4',
    question: '4+5',
    correctAnswer: 9
},
{
    id: "4",
    q: '5',
    question: '4+6',
    correctAnswer: 10
},
{
    id: "5",
    q: '6',
    question: '4+3',
    correctAnswer: 7
},
{
    id: "6",
    q: '7',
    question: '4+4',
    correctAnswer: 8
},
{
    id: "7",
    q: '8',
    question: '4+2',
    correctAnswer: 6
},
{
    id: "8",
    q: '9',
    question: '4+4',
    correctAnswer: 8
},
{
    id: "9",
    q: '10',
    question: '4+8',
    correctAnswer: 12
}
]

userAnswers = []

const question1 = document.getElementById('questions')

for (const quest of questionAndAnswer){
    question1.innerHTML += `
        <div class="boxes" id=${quest.id}>
        <h2>Question ${quest.q}</h2>
        <p>What is ${quest.question}</p>
        <input id="user_input${quest.id}">
        </div>
    `
}

const qAndA = document.getElementById('turnIn')

qAndA.addEventListener('submit', function(e){
    e.preventDefault()
    const userI1 = qAndA.querySelector('#user_input0')
    userAnswers.push(userI1.value)
    const userI2 = qAndA.querySelector('#user_input1')
    userAnswers.push(userI2.value)
    const userI3 = qAndA.querySelector('#user_input2')
    userAnswers.push(userI3.value)
    const userI4 = qAndA.querySelector('#user_input3')
    userAnswers.push(userI4.value)
    const userI5 = qAndA.querySelector('#user_input4')
    userAnswers.push(userI5.value)
    const userI6 = qAndA.querySelector('#user_input5')
    userAnswers.push(userI6.value)
    const userI7 = qAndA.querySelector('#user_input6')
    userAnswers.push(userI7.value)
    const userI8 = qAndA.querySelector('#user_input7')
    userAnswers.push(userI8.value)
    const userI9 = qAndA.querySelector('#user_input8')
    userAnswers.push(userI9.value)
    const userI10 = qAndA.querySelector('#user_input9')
    userAnswers.push(userI10.value)
    
    var total = 0
    for (i=0;i<userAnswers.length;i++){
        const quest1 = document.getElementById(`${i}`)
        if (userAnswers[i] == questionAndAnswer[i].correctAnswer){
            total++
            quest1.style.backgroundColor = '#34ac3a'
            
        }else{
            quest1.style.backgroundColor = '#e64761'
        }
    }
    const totalScore = document.getElementById('total1')

    totalScore.innerHTML = `
        <h3>You Got ${total}/10 Correct</h3>
    `
})




