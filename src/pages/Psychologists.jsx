import { useEffect, useState } from 'react';
import { Container, Label, LabelDiv, LabelSelect, LabelSelectOp } from '../components/Container.styled';
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
          <LabelDiv>
            <Label htmlFor="filters">Filters</Label>
            <LabelSelect name="filters" id="filters" onChange={handleFilterChange}>
              <LabelSelectOp key="ShowAll" value="ShowAll">
                Show all
              </LabelSelectOp>
              <LabelSelectOp key="AToZ" value="AToZ">
                A to Z
              </LabelSelectOp>
              <LabelSelectOp key="ZToA" value="ZToA">
                Z to A
              </LabelSelectOp>
              <LabelSelectOp key="LessThan10" value="LessThan10">
                Less than 10$
              </LabelSelectOp>
              <LabelSelectOp key="GreaterThan10" value="GreaterThan10">
                Greater than 10$
              </LabelSelectOp>
              <LabelSelectOp key="Popular" value="Popular">
                Popular
              </LabelSelectOp>
              <LabelSelectOp key="NotPopular" value="NotPopular">
                Not popular
              </LabelSelectOp>
            </LabelSelect>
      <PsychologistCard psychologists={filteredPsychologists} />
      </LabelDiv>
    </Container>
  );
};

export default Psychologists;
