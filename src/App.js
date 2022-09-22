
import { Table } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name < b.name,
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
    sorter: (a, b) => a.username < b.username,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email < b.email,
  },
  {
    title: 'address.city',
    dataIndex: ["address","city"],
    key: 'address.city',
    sorter: (a, b) => a.city < b.city,
  },
];

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then(res=>setdata(res.data))
  }, [])
  
  return (
    <div className="App">
      
   
<Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
