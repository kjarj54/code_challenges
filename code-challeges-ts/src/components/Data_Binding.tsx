import { useState } from "react";

function Data_Binding() {

    const [value, setValue] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
  return (
    <div className="border-b-4">
          <input 
            type="text"
            value={value}
            onChange={handleChange}
            className="border-cyan-950 border-solid p-2 mr-2"
          />
          <label className="text-gray-600">{value}</label>
        </div>
  )
}

export default Data_Binding
