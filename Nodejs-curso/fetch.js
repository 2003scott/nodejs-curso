async function loadData() {
    try{
        //throw new Error("Error creado")
        const rest = await fetch('https://jsonplaceholder.typicode.com/todos')  
        const data = await rest.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}


loadData()