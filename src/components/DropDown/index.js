import './style.css';

const DropDown = (props) => {
  console.log(props.itens)
  
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required}>
      {props.itens.map(item => {
        return <option key={item}>{item}</option>
      })}
      </select>
    </div>

  )

}

export default DropDown;