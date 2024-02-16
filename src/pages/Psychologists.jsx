import { createContext, useContext, useEffect, useState } from "react";
import { Container } from "../components/Container.styled";
import PsychologistCard from "../components/Psychologist/PsychologistCard";
import { getDatabase, ref, onValue } from "firebase/database";

const Psychologists = () => {
  const filter = useContext(createContext(null));

  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    if (!filter) return;

    if (filter.firstFilter) {
      const database = getDatabase();
      const databaseRef = ref(database);

      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();

        let list;
        if (filter.filter === "price_per_hour") {
          list = Object.values(data).filter(
            (item) => item[filter.filter] <= filter.value
          );
        } else {
          list = Object.values(data).filter((item) =>
            item[filter.filter].includes(filter.value)
          );
        }

        setPsychologists(list);
      });
    }
  }, [filter]);

  useEffect(() => {
    const database = getDatabase();
    const databaseRef = ref(database);

    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      setPsychologists(Object.values(data));
    });
  }, []);

  return (
    <Container>
      <PsychologistCard psychologists={psychologists}/>
    </Container>
  )
}

export default Psychologists
