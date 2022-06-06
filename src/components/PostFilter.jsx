import React from 'react';
import Myinput from "./UI/input/Myinput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Myinput
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder="поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                option={[
                    {value: 'title', name: 'по названию'},
                    {value: 'body', name: 'по описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;