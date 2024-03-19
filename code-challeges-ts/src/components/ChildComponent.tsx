const ChildComponent = ({ handleClick }) => {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60" onClick={handleClick}>Change Parent Value</button>
    );
  };

export default ChildComponent;