import React, {FC,useState,ChangeEvent} from 'react';
import Input,{InputProps} from '../Input/input';

export interface AutoCompleteProps extends Omit<InputProps,'onSelect'> {
    fetchSuggestions: (str:string) => string[];
    onSelect?: (item:string) => void;
}

export const AutoComplete:FC<AutoCompleteProps> = (props) => {
  const {
      fetchSuggestions,
      onSelect,
      value,
      ...restProps
  } = props;

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      setInputValue(value);
      if(value) {
          const result = fetchSuggestions(value);
          setSuggestions(result)
      } else {
          setSuggestions([])
      }
  }
  const [suggestions,setSuggestions] = useState<string[]>([])
  const [inputValue, setInputValue] = useState(value);
  const handleSelect = (item:string) => {
      setInputValue(item);
      setSuggestions([]);
      if(onSelect) {
          onSelect(item);
      }
  }
  const generateDropDown = () => {
    return (
        <ul>
            {suggestions.map((item,index) => {
                return (
                    <li key={index} onClick ={()=> {handleSelect(item)}}>
                        {item}
                    </li>    
                )
            })}
        </ul>    
    )
  }
  return (
      <div className="viking-auto-complete">
          <Input
            onChange={handleChange}
            value={inputValue}
            {...restProps}
          />
          {(suggestions.length > 0) && generateDropDown()}
      </div>
  )
};