function sumAB(){
    let a = +prompt("Nhập vào số nguyên A")
    let b = +prompt("Nhập vào số Nguyên B") 
    let sum = 0 ; 
    for (let i = a ; i <= b ; i++){
        sum = sum + i 
    }
    document.write("Tống hai số nguyên từ A đén B là " + sum )
}
sumAB()
