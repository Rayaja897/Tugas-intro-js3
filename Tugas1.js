const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

//menggunakan then catch
cekHariKerja('Selasa').then((result) => {
    console.log(`Hari : ${result}`); //menerima parameter result yang mengambil nilai dari resolve
    console.log('Hari ini hari kerja');
}).catch((err)=>{
    console.log(err); //menerima parameter err yang mengambil nilai dari reject
})

//menggunakan try catch
const tryCatch = async () => {
    try {   //coba apakah kode ini ada error atau tidak
        const callPromise = await cekHariKerja('Sabtu')
        console.log(`Hari : ${callPromise}`);
        console.log('Hari ini hari kerja');
    } catch(Error){
        console.log(Error); //jika error akan menampilkan error
    }
}

tryCatch()