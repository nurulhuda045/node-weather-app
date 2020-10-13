const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.getElementById('msg1')
const m2 = document.getElementById('msg2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    m1.textContent = 'loading...'
    m2.textContent = ''

    const location = search.value
    console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        console.log(data)
        console.log(data.forcast)
        m1.textContent = data.location
        m2.textContent = data.forcast
    })
})
})