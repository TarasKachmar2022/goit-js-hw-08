const e=document.querySelector(".feedback-form");e.addEventListener("input",n),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(n()),localStorage.removeItem("feedback-form-state"),e.target.reset()}));!function(){const t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);if(a){Object.keys(a).forEach((t=>{e.elements[t].value=a[t]}))}}();let t="",a="";function n(){t=e.elements.email.value,a=e.elements.message.value;const n={email:t,message:a};return function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}(n),n}
//# sourceMappingURL=03-feedback.34d6e1bd.js.map