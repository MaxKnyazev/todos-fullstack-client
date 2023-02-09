import './AdminForm.scss';
import { useState } from 'react';

function AdminForm() {
  const [ inputValue, setInputValue ] = useState('');

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <section className="admin__form form">
      <input onChange={inputHandler} placeholder="user nickname or email..." type="text" className="form__input" value={inputValue} />
      <button className="form__button">Search</button>
    </section>
  );
}

export default AdminForm;
