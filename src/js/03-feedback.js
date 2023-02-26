const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', onInputChange);
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = "feedback-form-state";
savedMessage()
const email ='';
const message ='';

function onInputChange(){
    email = formRef.elements.email.value;
    message = formRef.elements.message.value;
    // console.log(email)
    // console.log(message)
    const formData = {email, message};
    saveMessage(formData);
    return formData;
}

function saveMessage(formData){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function savedMessage(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parseSavedMessage = JSON.parse(savedMessage);

    if(parseSavedMessage){
        const keys = Object.keys(parseSavedMessage);
        keys.forEach(key => {formRef.elements[key].value = parseSavedMessage[key];
        });
    }
    
    // formRef.elements.email.value = parseSavedMessage.email;
    // formRef.elements.message.value = parseSavedMessage.message;
}
function onFormSubmit(event){
    event.preventDefault();

    console.log(onInputChange());

    // const formData = new FormData(event.target);
    // const formDataObject = {};

    // for(let [key, value] of formData.entries()){
    //     formDataObject[key] = value;

    //     console.log(formDataObject)
    // }
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
}