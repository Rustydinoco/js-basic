
//switch adalah metode pengganti statement if jika if memilki banyak kondisi 

const timMobilbalap = prompt("isikan tim");

switch (timMobilbalap) {
  case "Red Bull":
    console.log("valid");
    break;

  case "ferrari":
    console.log("Valid");
    break;

  case '':
    alert('diisi bos')
    break;

  default:
    console.log('bukan tim balap')
    break;
}
