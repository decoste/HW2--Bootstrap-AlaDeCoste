$(document).ready(function () {
    //on click submit button
    $('#btn1').on("click", function (event) {
        console.log('clicked!');
        //The coode for submitting a form is from:
        //https://www.youtube.com/watch?v=eg4e-FObyJ8

        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#exampleFormControlTextarea1').val();
        let statusELM = $('.status');
        statusELM.empty();
        //validating the form before submitting
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log('Email is valid.')
            $("#e-mail").hide();
        } else {
            event.preventDefault();
            $('#e-mail').text('Email is not valid!')
            $("#e-mail").show();
        }

        if (subject.length >= 2) {
            console.log('Subject is valid.')
            $("#sub").hide();
        } else {
            event.preventDefault();
            $('#sub').text('Subject is not valid!');
        }

        if (message.length >= 10) {
            console.log('Message is valid.')
            $("#text").hide();
        } else {
            event.preventDefault();
            $('#text').text('Message is not valid!')
        }
    })
});
