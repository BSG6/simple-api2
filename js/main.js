document.querySelector('button').addEventListener('click', getQuote)



    function getQuote(){

        fetch(`https://southparkquotes.onrender.com/v1/quotes`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    document.querySelector('.quote').innerHTML = data[0].quote
                    document.querySelector('.character').innerHTML = `~ ${data[0].character}`

                })
                .catch(err => {
                    document.querySelector('body').innerHTML = `Oops try again ${err}`
                })

        };