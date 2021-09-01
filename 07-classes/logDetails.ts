//type alias evita a repetição de código
// union é o | chamado de pipe, é usado como ou
//o type  aliases é unir os dois em um exemplo type Uid = 
// aliases é tipo o atalho ou apelido em inglês
type Uid = number | string | undefined
function logDetails(uid: Uid, item: string){
  //function logDetails(uid: Uid, item: string){
  console.log(`Um produto com ${uid} tem um titulo igual ${item}.`);
}

function logInfo(uid: Uid, item: string){
  console.log(`Um user com ${uid} tem um nome igual ${item}.`);
}
// part 2

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform(platform: Platform) {
  return platform
}
renderPlatform('ios')

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Willian");
logInfo("123", "Willian");
