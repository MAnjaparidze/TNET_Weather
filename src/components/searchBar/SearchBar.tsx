import React, { useState } from 'react'

type ISearchBarProps = {}

function SearchBar({ }: ISearchBarProps) {

  const [inputValue, setInputValue] = useState<string>('');
  const [predictedValue, setPredictedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    // Use the value to make predictions
    // const newPredictedValue = predict(value);
    // setPredictedValue(newPredictedValue);
  };

  return (
    <>
      <input
        className='bg-transparent outline-none text-white w-full'
        onChange={handleChange} placeholder='Search for Cities'
        type="text"
        defaultValue={predictedValue}
        value={inputValue}
      />
    </>
  )
}

export default SearchBar;