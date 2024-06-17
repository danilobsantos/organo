import './style.css';

import InputText from '../InputText';
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';


const Forms = (props) => {

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

const onSave = (evento) => {
  evento.preventDefault()
  props.aoColaboradorCadastrado ({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
  })
}

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <InputText 
          required={true} 
          label="Nome" 
          placeholde="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <InputText 
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <InputText
          required={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <DropDown
          required={true}
          label="Times"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Button label="Criar Card" />
      </form>
    </section>

  )
}

export default Forms;