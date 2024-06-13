import { useState } from 'react';
import './InputText.css';

const InputText = (props) => {

  const placeholderModificada = `${props.placeholder}`;

  const [ valor, setValor ] = useState ('');

  const aoDigitado = (evento) => {
    props.aoAlterado (evento.target.value)
    console.log(valor)
  }

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholderModificada} />
    </div>
  )

}

export default InputText;