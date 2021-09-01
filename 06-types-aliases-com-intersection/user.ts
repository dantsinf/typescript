
//accountInfo
//charInfo

type AccountInfo = {
  id: number;
  name: string;
//? para tirar o erro pois infroma que é opcional
  email?:string;
}

const account: AccountInfo = {
  id: 123,
  name: "Willian"
}
