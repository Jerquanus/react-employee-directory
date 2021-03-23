import React, { useState, useEffect } from "react";


const Searchbar = () => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ employee, setEmployee ] = useState([]);
    const [ filteredEmployee, setFilteredEmployee ] = useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50') 
        .then(response => response.json())
        .then(data => {
            const employee = data.results;
            const filteredEmployee = data.results;
            setEmployee(employee)
            setFilteredEmployee(filteredEmployee)
        })
    },[])
    
    useEffect (()=>{
        // var newEmployeeList =  employee.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(searchValue.toLowerCase())));
       console.log(employee)
        var newEmployeeList = employee.filter(res => res.name.first.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredEmployee(newEmployeeList)
        // setFilteredEmployee(newEmployeeList)

    },[searchValue, employee])

    // -----------------------------

    const employeeMap = filteredEmployee.map((el, index)=> {
        
        const { picture, name, email, location, phone} = el
        const { first ,last } = name;
        const { city, state } = location;
        const { thumbnail } = picture
        
        return (
            
            <tr key={index}>
                <td>
                    <img src={thumbnail} alt="Profile Pic" />
                </td>
                <td>{`${first} ${last}`}</td>
                <td> {`${email}`}</td>
                <td> {`${city}, ${state}`}</td>
                <td> {`Contact:${phone}`} </td>
                
            </tr>
        )
    })

    // -----------------------------

    return (
        <div>
            <input value={searchValue}
                type="text" 
                onChange={(evt)=> setSearchValue(evt.target.value)}
                name="searchbar"
                // value= {filteredEmployee}
                placeholder="Find Employee">
            </input>
            <button onClick={()=>console.log('BUTTON Connected', searchValue)} type="search">Search</button>

            <section>
                {employeeMap}
            </section>
        </div>
    )
}

export default Searchbar;
