import { useEffect, useState } from 'react'
import './App.css'
import { Layout} from 'antd'
import AddContactModal from './components/AddContactModal';
import TableContactsList from './components/TableContactsList';

function App() {
  const [data, setData] = useState([]);

  function handleDelete(id) {
    setData(prevData => prevData.filter(el => el.id !== id));
  }

  const addContact = (contact) => {
    setData(prevData => ([...prevData, contact]))
  }
  useEffect(() => {
    const getContactsData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.status === 200) {
        const responseData = await response.json();
        setData(responseData.map(el => ({
          name: el.name.split(' ').slice(0, 1).join(' '),
          surname: el.name.split(' ').slice(-1).join(' '),
          phone: el.phone,
          id: el.id,
        })))
      }
    }
    getContactsData();
  }, [])

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Layout.Header style={{ backgroundColor: '#F2E313' }}>Contacts List</Layout.Header>
      <Layout.Content style={{ maxHeight: 600, overflow: 'scroll' }}>
        <TableContactsList contacts={data} handleDelete={handleDelete} />
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: '#fff' }}><AddContactModal addContact={addContact} /></Layout.Footer>
    </Layout>
  )
}

export default App
