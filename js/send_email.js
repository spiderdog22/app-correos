emailjs.init({
    publicKey: 'T29U9qPCcfa6SMJXA'
});

const form = document.querySelector('form');

const sendEmail = (evt) => {
    evt.preventDefault();

    const parameters = {
        from_name: form.fname.value,
        email_dest: form.email.value,
        message: form.message.value
    };

    emailjs.send('app_correos', 'friendly_message', parameters).then(
        (response) => { alert('Mail has been sent!'); },
        (error) => { alert('Couldn\' send the mail.'); }
    );

    form.fname.value = '';
    form.email.value = '';
    form.message.value = '';
};

form.addEventListener('submit', sendEmail);