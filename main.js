
const form = document.getElementById('form');
const user_email = document.getElementById('user-email');
const confirmation = document.getElementById('confirmation');

function handleSubmit(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    user_email.innerText = data['email'];

    confirmation.classList.remove('hidden');
    e.preventDefault(); // prevent the default behaviour
    form.reset();
}
form.addEventListener('submit', handleSubmit);

const dismiss = document.getElementById('dismiss');
dismiss.addEventListener('click', ()=>{
    confirmation.classList.add('hidden');
});
