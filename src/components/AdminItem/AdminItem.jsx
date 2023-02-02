import './AdminItem.scss';

function AdminItem() {

  return (
    <li className="admin__item item">
      <button className="admin__button item__button item__button--delete">Delete user</button>

      <span className="item__title">Email: test@mail.ru</span>
      <span className="item__title">Nickname: testName</span>
      <span className="item__title">Role: User</span>

      <button className="admin__button item__button item__button--change">Change role</button>
    </li>
  );
}

export default AdminItem;
