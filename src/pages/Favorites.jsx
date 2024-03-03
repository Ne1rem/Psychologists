import { useEffect, useState } from 'react';
import { Container, Label, LabelDiv, LabelSelect, LabelSelectOp, TitelNotLoggedIn } from '../components/Container.styled';
import FavouritesCard from '../components/Favourite/FavouriteCard'; // Corrected import path
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors'; // Corrected import path

const Favorites = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState([]);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem('favorite'));
      if (data) {
        setPsychologists(data);
        setFilteredPsychologists(data);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = ({ target: { value } }) => {
    let newList = [...psychologists];

    if (value === 'AToZ') {
      newList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === 'ZToA') {
      newList.sort((a, b) => b.name.localeCompare(a.name));
    } else if (value === 'LessThan10') {
      newList = newList.filter(
        psychologist => psychologist.price_per_hour < 10
      );
    } else if (value === 'GreaterThan10') {
      newList = newList.filter(
        psychologist => psychologist.price_per_hour >= 10
      );
    } else if (value === 'Popular') {
      newList.sort((a, b) => b.rating - a.rating);
    } else if (value === 'NotPopular') {
      newList.sort((a, b) => a.rating - b.rating);
    }

    setFilteredPsychologists(newList);
  };

  return (
    <Container>
      {isLoggedIn ? (
        psychologists.length === 0 ? (
          <TitelNotLoggedIn>Your favourite list is empty</TitelNotLoggedIn>
        ): (
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
            <FavouritesCard filteredPsychologists={filteredPsychologists} />
          </LabelDiv>
        ) 
      ) : (
        <TitelNotLoggedIn>You are not logged in</TitelNotLoggedIn>
      )}
    </Container>
  );
};

export default Favorites;
