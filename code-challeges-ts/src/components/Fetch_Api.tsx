import { useState, useEffect } from "react";
interface Product {
    title: string;
    description: string;
    price: number;
    rating: number;
}

function Fetch_Api() {
 
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
        <div>
            <h2>Product</h2>
            <p>Title: {data.title}</p>
            <p>Description: {data.description}</p>
            <p>Price: {data.price}</p>
            <p>Rating: {data.rating}</p>
        </div>
    )
}

export default Fetch_Api
