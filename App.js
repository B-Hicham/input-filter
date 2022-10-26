import React,{useState} from 'react'

const App = () => {
    const list = [
        "simow",
        "ali",
        "hicham",
        "hafid",
        "said",
        "ramzi"
    ];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
        if (event.target.value === ""){
            setFilterList(list);
            return;
        }
        const filterValues = list.filter(
            (item) => 
                item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
                );
        setFilterList(filterValues);
    };

  return (
    <div className='app'>
        <div>
            search:<input name='query' type="text" onChange={handleSearch}/>
        </div>
        {filterList &&
            filterList.map((item, index)=>(
                <div key={index}>{item}</div>
            ))

        }
    </div>
  );
}

export default App