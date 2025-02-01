
const form = document.getElementById('form');

function handleSubmit(e) {
    let confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');
    e.preventDefault(); // prevent the default behaviour
}

form.addEventListener('submit', handleSubmit);

const dismiss = document.getElementById('dismiss');
dismiss.addEventListener('click', ()=>{
    let confirmation = document.getElementById('confirmation');
    confirmation.classList.add('hidden');
});

// console.log(buttons, confirmation);
// for(let button of buttons) {
//     button.addEventListener('submit', () => {
//         confirmation.classList.toggle('hidden');
//         console.log('clicked');
//     });
// }
