const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation =[]
//계산기에 출력할 숫자들을 더할 어레이, sum변수생성
let accumulativeCalculation = []

//하단의 콜백함수 ()=>calculate(button)에 넣을 계산용 함수
function calculate(button){
    const value = button.textContent

    if(value === "CLEAR"){
        calculation =[]
        screenDisplay.textContent='.'
    } else if( value === "="){
        console.log(accumulativeCalculation)
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else{
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

}
//버튼한개씩 클릭할 때마다 이벤트 발생 
//버튼 개당 하나씩 사용할 이름으로 button지정해주고 props로 button전달해서 호출
//index.html에있는 button과 반응함
buttons.forEach(button=> button.addEventListener('click',()=>calculate(button)))
