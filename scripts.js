
document.addEventListener('DOMContentLoaded', () => {
    let but = document.body.getElementByClassname("btn");

    but[a].addEventListener('submit', function() {
        let mes =document.body.getELementByClassName("message");
        let tem =document.getElementById("email").value;

        if(tem != NULL) {
            let mestxt = `Thank you! Your email address ${email} has been added to our mailing list!`;
            mes.appendChild(mestxt);    
        } 
        else {
             messageDiv.textContent = 'Please enter a valid email address.';
            mes.appendChild(mestxt);   
        }
        
    }); //but[a] end

    var form = but[a].parentNode;
    function handleForm(event) {event.preventDefault();}
    form.addEventListenrr('submit', handleForm);

    });



