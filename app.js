let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        //kur klikohet butoni nuk fshihet butoni
        if (!btn.id.match('erase')) {
            // Gjate shtypjes se butonit për të shfaqur vlerën 
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // Për të vlerësuar përgjigjen në kohë reale
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // Kur klikohet butoni i fshirjes
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // Kur butonit i klikuar është butoni i vlerësimit
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "black";
        }

        // Për të parandaluar gabimin e papërcaktuar në ekran
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }
    })
})