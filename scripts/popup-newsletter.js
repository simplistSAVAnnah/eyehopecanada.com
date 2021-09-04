/*
Script Credit: https://github.com/jamiewilson/form-to-google-sheets
*/

const scriptURL2 = 'https://script.google.com/macros/s/AKfycbwvElLAqmnR_zk5Jo8-lqkxV5gWAMQsZE97nreJq3--3tJ6n8TTU18gtEIYsFtqjqh5zw/exec'
const form2 = document.forms['submit-to-google-sheet-popup']

form2.addEventListener('submit', e => {
  e.preventDefault()

  element1 = document.getElementById('confirmation-message-popup');
  element2 = document.getElementById('contactFormPopup')

  element2.style.opacity = "50%";

  fetch(scriptURL2, {
      method: 'POST',
      body: new FormData(form2)
    })
    .then(response => {
      console.log('Success!', response)
      element1.innerHTML = "🎉 You have successfully subscribed!"
      element2.style.opacity = "100%";
    })
    .catch(error => {
      console.error('Error!', error.message)
      element1.innerHTML = "There was an error connecting to our server. Please try again later."
      element2.style.opacity = "100%";
    })
})
