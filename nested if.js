//contoh nested if dalam pembuatan password//

const password = prompt('isi password');

if (password.length >=5){
    if (password.indexOf(' ') === -1){
        console.log('password valid');
    } else {
        console.log('tidak boleh ada spasi');
    }

}else{
    console.log('password minimal 5 karakter');
    
}