import {useState} from 'react';
import {CreateForm, Table} from '../components';

const Home = () => {
  const [location, setLocation] = useState('Barcelona')
  
  const [minCustomers, setMinCustomers] = useState(0);

  const [maxCustomers, setMaxCustomers] = useState(0);

  const [avgSales, setAvgSales] = useState(0);
}

const handleChange = (event) => {
  event.preventDefault();

}