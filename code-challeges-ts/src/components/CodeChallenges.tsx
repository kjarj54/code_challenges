import { useState, useEffect } from "react";
import ChildComponent from "./ChildComponent";

interface Animal {
  name: string;
  id: number;
}

interface Product {
  title: string;
  description: string;
  price: number;
  rating: number;
}

const CodeChallenges = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastNameTeam: string = "Fallas_Arauz";

  const animals: Animal[] = [
    { name: "Tiger", id: 1 },
    { name: "Lion", id: 2 },
    { name: "Python", id: 3 },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [value, setValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [text, setText] = useState<string>("Texto to change");
  const updateText = () => {
    setText("¡Text updated!");
  };

  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: Product = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="border-b-4">
      <div className="grid grid-cols-4 gap-4 mt-1">
        <div>
          <ul className="pl-4">
            {animals.map((animal) => (
              <li className="text-black text-4xl" key={animal.id}>
                {animal.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="border border-solid border-black rounded-md"
            onClick={toggleVisibility}
          >
            {isVisible ? "Hide div Element" : "Show div Element"}
          </button>
          {isVisible && <div>I am here!..Att"The div"</div>}
        </div>
        <div>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="border p-2 mr-2"
          />
          <label className="text-gray-600">{value}</label>
        </div>
        <div className="flex flex-col">
          <div className="box-wrapper">
            <label>Parent</label>
            <p>{text}</p>
          </div>
          <label>Child</label>
          <ChildComponent handleClick={updateText} />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen ">
        <h2 className="text-4xl">
          {lastNameTeam}
          <span>.jsx</span>
        </h2>
      </div>

      <div>
        <h2>Product</h2>
        <p>Title: {data.title}</p>
        <p>Description: {data.description}</p>
        <p>Price: {data.price}</p>
        <p>Rating: {data.rating}</p>
      </div>
    </div>
  );
};

export default CodeChallenges;
