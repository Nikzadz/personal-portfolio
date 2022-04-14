    function activate() {
        document.querySelector("#hourlyrate").disabled=false;
    }
    function deactivate() {
        document.querySelector("#hourlyrate").disabled=true;
    }
    function validate() {
        var form = document.querySelector("#info-form");

        var agreement = form.agree;
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var street = document.querySelector("#street").value;
        var city = document.querySelector("#city").value;
        var postalcode = document.querySelector("#postalcode").value;
        var message = document.querySelector("#message").value;

        if (agreement.checked&&name&&email&&street&&city&&postalcode&&message) {
            var intention;

            var intentionChoice = Array.from(form.purpose);

            intentionChoice.forEach(function (option) {
                if (option.checked) { intention = option.value;}
            });
            var messageData = {
                name : name,
                email: email,
                street: street,
                city: city,
                postalcode: postalcode,
                message: message
            }
            sendData(messageData);
        }
        else {
            alert("Please fill out the entire form!")
        }
    }
    function sendData(messageData) {

        var url = "https://httpbin.org/post";
        var xhr = new XMLHttpRequest();
    
        xhr.onload = function() {
            var package = JSON.stringify(messageData);
        };
        xhr.open("POST", url);
        xhr.send();
    }
    