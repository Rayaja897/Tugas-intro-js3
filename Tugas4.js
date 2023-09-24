fetch('https://jsonplaceholder.typicode.com/users/')
.then((result) =>{
    result
    .json()
    .then((dataFetch) => {dataFetch.map(item => {
        console.log(`User name is : ${item.name}`)
    });
    // console.log(dataFetch);
    })
    .catch((error) => console.log(error))
})
.catch(() => {
    console.log('Data Retrieval Process Failed');
})