import React, {FC,useState,ChangeEvent,ReactElement} from 'react';
import Input,{InputProps} from '../Input/input';
import Icon from '../Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T ={}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps,'onSelect'> {
    fetchSuggestions: (str:string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item:DataSourceType) => void;
    renderOption?: (item:DataSourceType) => ReactElement;
}

export const AutoComplete:FC<AutoCompleteProps> = (props) => {
  const {
      fetchSuggestions,
      onSelect,
      value,
      renderOption,
      ...restProps
  } = props;

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      setInputValue(value);
      if(value) {
          const result = fetchSuggestions(value);
          if(result instanceof Promise) {
              console.log('triggered');
              setLoading(true);
              result.then(data => {
                  setLoading(false);
                  setSuggestions(data);
              })
          } else {
            setSuggestions(result)
          }
      } else {
          setSuggestions([])
      }
  }
  const [suggestions,setSuggestions] = useState<DataSourceType[]>([])
  const [inputValue, setInputValue] = useState(value);
  const [loading, setLoading] = useState(false);
  const handleSelect = (item:DataSourceType) => {
      setInputValue(item.value);
      setSuggestions([]);
      if(onSelect) {
          onSelect(item);
      }
  }

  const renderTemplate = (item:DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  }

  const generateDropDown = () => {
    return (
        <ul>
            {suggestions.map((item,index) => {
                return (
                    <li key={index} onClick ={()=> {handleSelect(item)}}>
                        {renderTemplate(item)}
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
          {loading && <ul><Icon icon='spinner' spin/></ul>}
          {(suggestions.length > 0) && generateDropDown()}
      </div>
  )
};