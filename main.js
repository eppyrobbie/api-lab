const buttonPush = document.querySelector('button')

const baseURL = "https://swapi.dev/api/planets/?search=Alderaan"


function btnClick (){
    console.log('pushed')
    axios.get(baseURL).then((res) => 
    {
        console.log(res)
        for(let i = 0; i<res.data.results[0].residents.length; i++){
            let person = res.data.results[0].residents[i]
            axios.get(person).then((res1) => {
               // console.log(res1)
                let aldRes = res1.data.name
                let residentHTML = document.createElement("h2")
                residentHTML.classList.add('names')
                residentHTML.textContent = aldRes
                document.body.appendChild(residentHTML)
            })
        }
    })
}

buttonPush.addEventListener("click", btnClick)