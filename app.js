const API_KEY  = "#---------------------------------------------------------------------------------------------"
const submittButton = document.querySelector('#submit')
const outputElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')
const chatElement = document.querySelector('.chat')

function changeInput (tvalue) {
    const iinputElement = document.querySelector('input')
    inputElement.value = value

async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',

        },

        body: JSON.stringify({
           
            model: "gpt-3.5-turbo",
            messages: [
          {
            "role": "system",
            "content": "You are a helpful assistant."
          },
          {
            "role": "user",
            "content": "Hello!"
          }]
        })


    }
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content) {
            const  pElement = document.createElement ('p')
            pElement.textontent = inputElement.value
            pElement.addEventListener('click', () => changeInput(pElement.textontent))
            historyElement.appendChild(pElement) 

        }

    } catch (error){
    console.error(error)

    }
}

submittButton.addEventListener('click', getMessage)

function clearInput () {
    inputElement.value = ''
}
buttonElement.addEventListener('click', clearInput)
