// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// let inputValue = '';
// buttons.forEach(button => {
//     button.addEventListener("click",() =>{
//         const buttonValue = this.textContent;
//         if(button.id==='clear'){
//             inputValue = '';
//             input.value = inputValue;
//         }else if(button.id==='delete'){
//             input.value = inputValue.substring(0,length-1)
//         }else if(button.id === 'calculate'){
//             inputValue = eval(inputValue).toString();
//             input.value = inputValue;
//         }else {
//                 inputValue += buttonValue;
//                 input.value = inputValue;
//         }
//     })
// });

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('button');
    let inputValue = '';

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonValue = this.textContent;

            if (button.id === 'clear') {
                inputValue = '';
                input.value = inputValue;
            } else if (button.id === 'delete') {
                inputValue = inputValue.slice(0, -1);
                input.value = inputValue;
            } else if (button.id === 'calculate') {
                try {
                    inputValue = eval(inputValue).toString();
                } catch (error) {
                    inputValue = "Error";
                }
                input.value = inputValue;
            } else {
                inputValue += buttonValue;
                input.value = inputValue;
            }
        });
    });
});
