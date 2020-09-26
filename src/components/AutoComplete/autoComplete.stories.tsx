import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {AutoComplete,DataSourceType} from './autoComplete';

interface LakerPlayerProps {
    value: string;
    number: number
}
const simpleComplete = () => {
    const lakers = ['bradler','pope','caruso','cook','cousins','james','AD','green','howard','kuzma','McGee','rando'];
    const lakersWithNumber = [
        {value: 'bradler',number: 11},
        {value: 'pope',number: 1},
        {value: 'caruso',number: 4},
        {value: 'cook',number: 2},
        {value: 'james',number: 15},
        {value: 'AD',number: 23},
        {value: 'green',number: 3},
        {value: 'howard',number: 14},
        {value: 'kuzma',number: 39},
    ]
    const handleFetch = (query:string) => {
        return lakers.filter(name => name.includes(query)).map(name=> ({value: name}));
    }
    // const handleFetch  = (query: string) => {
    //     return lakersWithNumber.filter(player => player.value.includes(query))
    // }
    // const renderOption = (item:DataSourceType<LakerPlayerProps>) => {
    //     return (
    //     <>
    //     <h2>Name: {item.value}</h2>
    //     <p>Number: {item.number}</p>
    //     </>
    //     )
    // }
    return (
       <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={action('selected')}
        // renderOption={renderOption}
       />
    )
}

storiesOf('AutoComplete Component',module)
.add('AutoComplete',simpleComplete)