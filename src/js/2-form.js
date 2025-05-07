const formData = {
    email: "",
    message: ""
}

// Ключ для localStorage
const STORAGE_KEY = 'feedback-form-state';



const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', renderPage);
form.addEventListener('submit', handleSubmitForm);
form.addEventListener('input', handleInputForm);
    
    function renderPage() {
        const saveData = localStorage.getItem(STORAGE_KEY);

        if (saveData) {
            const parsedData = JSON.parse(saveData);
            form.elements.email.value = parsedData.email || "";
            form.elements.message.value = parsedData.message || "";


            formData.email = form.elements.email.value;
            formData.message = form.elements.message.value;
        }
    }
    
   
   function handleInputForm(evt) {
       
       formData.email = form.elements.email.value;
       formData.message = form.elements.message.value;

       const formJSON = JSON.stringify(formData);

       localStorage.setItem(STORAGE_KEY, formJSON);

       
   }


function handleSubmitForm(evt) {
    evt.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        return alert("Fill please all fields");
    }

console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    form.reset();
}

