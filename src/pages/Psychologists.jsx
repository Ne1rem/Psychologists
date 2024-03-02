import { useEffect, useState } from 'react';
import { Container } from '../components/Container.styled';
import PsychologistCard from '../components/Psychologist/PsychologistCard';
import { getDatabase, ref, onValue } from 'firebase/database';

const Psychologists = () => {
  const [initialPsychologists, setInitialPsychologists] = useState([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const databaseRef = ref(database);

    onValue(databaseRef, snapshot => {
      const data = snapshot.val();
      const psychologistsList = Object.values(data);
      setInitialPsychologists(psychologistsList);
      setFilteredPsychologists(psychologistsList);
    });
  }, []);

  const handleFilterChange = ({ target: { value } }) => {
    let newList = [...initialPsychologists];

    if (value === 'AToZ') {
      newList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === 'ZToA') {
      newList.sort((a, b) => b.name.localeCompare(a.name));
    } else if (value === 'LessThan10') {
      newList = newList.filter(psychologist => psychologist.price_per_hour < 10);
    } else if (value === 'GreaterThan10') {
      newList = newList.filter(psychologist => psychologist.price_per_hour >= 10);
    } else if (value === 'Popular') {
      newList.sort((a, b) => b.rating - a.rating);
    } else if (value === 'NotPopular') {
      newList.sort((a, b) => a.rating - b.rating);
    }
    
    setFilteredPsychologists(newList);
  };

  return (
    <Container>
      <label htmlFor="filters">Filters</label>
      <select name="filters" id="filters" onChange={handleFilterChange}>
        <option key="ShowAll" value="ShowAll">Show all</option>
        <option key="AToZ" value="AToZ">A to Z</option>
        <option key="ZToA" value="ZToA">Z to A</option>
        <option key="LessThan10" value="LessThan10">Less than 10$</option>
        <option key="GreaterThan10" value="GreaterThan10">Greater than 10$</option>
        <option key="Popular" value="Popular">Popular</option>
        <option key="NotPopular" value="NotPopular">Not popular</option>
      </select>
      <PsychologistCard psychologists={filteredPsychologists} />
    </Container>
  );
};

export default Psychologists;
