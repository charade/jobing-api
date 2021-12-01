
module.exports = {
    placehoderFromEmptyKeys : (arr) => {
        return arr.map(obj => {
            Object.keys(obj).reduce((a, b) =>{
                if(!obj[b]){
                    a[b] = '-'
                }
                else{
                    a[b] = obj[b]
                }
                return a
            },{})
        })
    }
}