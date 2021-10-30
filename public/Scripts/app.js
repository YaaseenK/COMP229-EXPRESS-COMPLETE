/* COMP229Assignment1 */
/* Student Name: Yaaseen Khan */
/* Student Number: 301164475 */
/* OCT/9/2021 */
// IIFE -- Immediately Invoked Fucktin Expression

(function(){

    function Start(){
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();