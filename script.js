const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle){
    menuToggle.addEventListener("click",()=>{
        if(navLinks.style.display === "flex"){
            navLinks.style.display = "none";
        }
        else{
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
        }
    });
}

const contactForm = document.querySelector(".contact-form");

if(contactForm){
    contactForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const name = document.querySelector('input[type="text"]').value;
        alert(`Thank you ${name}. Your message has been submitted successfully.`);
        contactForm.reset();
    });
}
