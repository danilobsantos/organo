import './style.css';

const Button = (props) => {
  return (<button className='button'>
    {props.label}
  </button>)
}

export default Button;