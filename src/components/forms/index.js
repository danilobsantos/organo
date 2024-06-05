import './style.css';

import InputText from '../InputText';
import DropDown from '../DropDown';
import Button from '../Button';

const Forms = () => {

  const times = [
  'Programação',
  'Front-end',
  'DevOps',
  'Back-end'
];

const onSave = (save) => {
  save.preventDefault();
  console.log('Formulário salvo')
}

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <InputText required={true} label="Nome" placeholder="Digite seu nome"/>
        <InputText required={true} label="Cargo" placeholder="Digite seu cargo"/>
        <InputText required={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
        <DropDown required={true} label="Times" itens={times} />
        <Button label="Criar Card" />
      </form>
    </section>

  )
}

export default Forms;