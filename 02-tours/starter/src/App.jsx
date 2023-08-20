import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleDelete = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  async function getTours() {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      if (!response.ok) {
        throw new Error("Error");
      }

      setTours(tours);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
    }
  }

  // To Fetch Data, But we'll use ReactQuery in Future
  useEffect(() => {
    getTours();
  }, []);

  if (isError) {
    return <h1>Error ...</h1>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <Tours
        tours={tours}
        handleDelete={handleDelete}
      />
    </main>
  );
};
export default App;
