const checkWorkingDays = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Today is not a working day'))
            }
        }, 3000);
    })
}

//menggunakan then catch
checkWorkingDays('Selasa').then((result) => {
    console.log(result); //menerima parameter result yang mengambil nilai dari resolve
    console.log('Today is a working day');
}).catch((err)=>{
    console.log(err); //menerima parameter err yang mengambil nilai dari reject
})

//menggunakan try catch
const tryCatch = async () => {
    try {   //coba apakah kode ini ada error atau tidak
        const callPromise = await checkWorkingDays('Sabtu')
        console.log(callPromise);
        console.log('Today is a working day');
    } catch(Error){
        console.log(Error); //jika error akan menampilkan error
    }
}

tryCatch()