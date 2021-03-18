import React, { useState, useEffect } from "react";


const Searchbar = () => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ employee, setEmployee ] = useState([]);
    const [ filteredEmployee, setFilteredEmployee ] = useState([]);



    // 1. A onChange handler on the search bar fires off a function that runs this this filterByValue
    // 2. We need two arrays in state. One that holds ALL employee data and one that only holds Filtered employee data.
    // 3. At first our Filtered data should be = to all our data
    // 4. Use react to render a component only showing the Filtered data
    
    // const arrayOfObject = [{ name: 'Paul', country: 'Canada', }, { name: 'Lea', country: 'Italy', }, { name: 'John', country: 'Italy' }];
    // console.log(filterByValue(arrayOfObject, 'lea')); // [{name: 'Lea', country: 'Italy'}]
    // console.log(filterByValue(arrayOfObject, 'ita')); // [{name: 'Lea', country: 'Italy'}, {name: 'John', country: 'Italy'}]
    
    
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

        const newEmployeeList =  employee.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(searchValue.toLowerCase())));

        filteredEmployee = newEmployeeList


    },[searchValue])

    // -----------------------------

    const employeeMap = filteredEmployee.map((el, index)=> {
        
        const { picture, name, email, location, phone} = el
        const { first ,last } = name;
        const { city, state } = location;
        const { thumbnail } = picture
        
        return (
            
            <article style={{display: 'flex'}} key={index}>
                <img src={thumbnail} />
                <h3>{`${first} ${last}`}</h3>
                <div>                
                <p> {`${email}`}</p>
                <p> {`${city}, ${state}`}</p>
                <p> {`Contact:${phone}`} </p>
                </div>
            </article>
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

    // {
    //     "gender": "male",
    //     "name": {
    //       "title": "mr",
    //       "first": "brad",
    //       "last": "gibson"
    //     },
    //     "location": {
    //       "street": "9278 new road",
    //       "city": "kilcoole",
    //       "state": "waterford",
    //       "postcode": "93027",
    //       "coordinates": {
    //         "latitude": "20.9267",
    //         "longitude": "-7.9310"
    //       },
    //       "timezone": {
    //         "offset": "-3:30",
    //         "description": "Newfoundland"
    //       }
    //     },
    //     "email": "brad.gibson@example.com",
    //     "login": {
    //       "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
    //       "username": "silverswan131",
    //       "password": "firewall",
    //       "salt": "TQA1Gz7x",
    //       "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
    //       "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
    //       "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
    //     },
    //     "dob": {
    //       "date": "1993-07-20T09:44:18.674Z",
    //       "age": 26
    //     },
    //     "registered": {
    //       "date": "2002-05-21T10:59:49.966Z",
    //       "age": 17
    //     },
    //     "phone": "011-962-7516",
    //     "cell": "081-454-0666",
    //     "id": {
    //       "name": "PPS",
    //       "value": "0390511T"
    //     },
    //     "picture": {
    //       "large": "https://randomuser.me/api/portraits/men/75.jpg",
    //       "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    //       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    //     },
    //     "nat": "IE"
    //   }
    // ],
    // "info": {
    //   "seed": "fea8be3e64777240",
    //   "results": 1,
    //   "page": 1,
    //   "version": "1.3"
    // }