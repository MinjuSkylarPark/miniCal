const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation =[]
//계산기에 출력할 숫자들을 더할 어레이, sum변수생성
let sum = []

//하단의 콜백함수 ()=>calculate(button)에 넣을 계산용 함수
function calculate(button){
    const value = button.textContent
    if(value === 'CLEAR'){
        //value가 clear면 caculation 내부내용이  
        calculation =[]
        // .으로 바뀜 뿅
        screenDisplay.textContent='.'
        //아닐경우 전체 숫자 합을 출력
    } else if( value === '='){
        screenDisplay.textContent = eval(sum)

    } else{
    //caculation array를 만들고 value를 내부에 푸쉬함
    //push()함수는 array의 마지막에 새로운 요소를 추가한 뒤 변경된 배열의 길이를 반환하는 함수
    calculation.push(value)

    //join('')숫자 어레이 출력될 때 붙는 ,를 생략시킴
    sum = calculation.join('')
    screenDisplay.textContent = sum
    }

}
//버튼한개씩 클릭할 때마다 이벤트 발생 
//버튼 개당 하나씩 사용할 이름으로 button지정해주고 props로 button전달해서 호출
//index.html에있는 button과 반응함
buttons.forEach(button=> button.addEventListener('click',()=>calculate(button)))
