
type Form = {
  nome: string;
  idade: number;
}

const Header = ({ nome, idade }:Form) => {
  return (
    <div>
      <h1>Olá {nome}</h1>
      <h1>{idade} anos</h1>
    </div>
  );
}

export default Header;
