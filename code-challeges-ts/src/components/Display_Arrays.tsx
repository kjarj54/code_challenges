interface Animal {
    name: string;
    id: number;
}

const Display_Arrays = () => {


    const animals: Animal[] = [
        { name: "Tiger", id: 1 },
        { name: "Lion", id: 2 },
        { name: "Python", id: 3 },
    ];
    return (
        <div className="grid grid-cols-4 gap-4 mt-1  border-b-4">
            <div>
                <ul className="pl-4">
                    {animals.map((animal) => (
                        <li className="text-black text-4xl" key={animal.id}>
                            {animal.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Display_Arrays
