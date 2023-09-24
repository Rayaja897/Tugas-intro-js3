//function mengecek barang dagangan
const checkMerchandise = (info) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const merchandise = ['Apple', 'Banana', 'Grape', 'Orange'];
            let check = merchandise.find((item) => {
                return item === info
            })
            if (check) {
                resolve(check);
            } else {
                reject('this item is not included in your merchandise');
            }
        }, 3000);
    })
}

checkMerchandise("Apple").then((result) => {
    console.log(result); //menerima parameter result yang mengambil nilai dari resolve
    console.log('this item is included in your the merchandise');
}).catch((err) => {
    console.log(err); //menerima parameter err yang mengambil nilai dari reject
})

//function memasukkan stok barang
const enterStock = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Stock = ['Pop Mie', 'Indomie'];
            let list = Stock.push(input);
            if (list) {
                resolve(Stock);
            } else {
                reject('Sorry');
            }
        }, 3000);
    })
}

enterStock("mie gelas").then((result) => {
    console.log('Success add stock');
    console.log(`Your current stock is : ${result}`); //menerima parameter result yang mengambil nilai dari resolve
}).catch((err) => {
    console.log(err); //menerima parameter err yang mengambil nilai dari reject
})