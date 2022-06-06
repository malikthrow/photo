import React from 'react';

const MySelect = ({option, defaultValue, value, onChange}) => {
    {/*Передаем значение которое выбрал юзер и достаем из валуе*/}
    return (
       <select
           value={value}
           onChange={event=>onChange(event.target.value)}>
           <option disabled value="сортировка по">{defaultValue}</option>
           {option.map(option =>
           <option key={option.value} value={option.value}>
               {option.name}
           </option>
           )}
       </select>
    );
};

export default MySelect;