import './Admin.scss';
import AdminDisplay from '../AdminDisplay';
import AdminForm from '../AdminForm';

function Admin() {
  return (
    <section className="admin">
      <AdminForm />
      <AdminDisplay />
    </section>
  );
}

export default Admin;
