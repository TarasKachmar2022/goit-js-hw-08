import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInputChange, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {};
const STORAGE_KEY = "feedback-form-state";

savedMessage()

function onFormSubmit(event){
    event.preventDefault();

    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
    
    // const formData = new FormData(event.currentTarget);

    //     formData.forEach((message, email) => {
    //     console.log(email, message);
    // })
}

function onInputChange(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function savedMessage(event){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parseSavedMessage = JSON.parse(savedMessage);

    if(parseSavedMessage){
        const keys = Object.keys(parseSavedMessage);
        keys.forEach(key => {formRef.elements[key].value = parseSavedMessage[key]
        });
    }

    // formRef.elements.email.value = parseSavedMessage.email;
    // formRef.elements.message.value = parseSavedMessage.message;
}