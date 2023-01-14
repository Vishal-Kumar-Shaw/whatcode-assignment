import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Home = () => {
    const bills = [
        {
        "id": 1,
        "description": "Dominoes",
        "category": "FoodNDining",
        "amount": "430",
        "date": "01-02-2020"
        },
        {
        "id": 2,
        "description": "Car wash",
        "category": "utility",
        "amount": "500",
        "date": "01-06-2020"
        },
        {
        "id": 3,
        "description": "Amazon",
        "category": "shopping",
        "amount": "2030",
        "date": "01-07-2020"
        },
        {
        "id": 4,
        "description": "House rent",
        "category": "Food & Dining",
        "amount": "35900",
        "date": "01-03-2020"
        },
        {
        "id": 5,
        "description": "Tuition",
        "category": "education",
        "amount": "2200",
        "date": "01-12-2020"
        },
        {
        "id": 6,
        "description": "Laundry",
        "category": "Personal Care",
        "amount": "320",
        "date": "01-14-2020"
        },
        {
        "id": 7,
        "description": "Vacation",
        "category": "Travel",
        "amount": "3430",
        "date": "01-18-2020"
        }
        ];
        console.log(bills);
  return (
    <div style={{margin:"auto", display:"flex", flexDirection:"column", gap:"20px", alignItems:"center", justifyContent:"center"}}>

    <h1 align="center" style={{marginTop: "20px"}}>Bills DashBoard</h1>
    <div style={{display:"flex", gap:"20px"}}><Button variant="primary" align="center" style={{margin:"auto", align:"center", display:"inline-block"}}>Add a Bill</Button>{' '}
    <DropdownButton id="dropdown-basic-button" title="Filter by">
      <Dropdown.Item href="#/action-1">Food & Dining</Dropdown.Item>
      <Dropdown.Item href="#/action-2">utility</Dropdown.Item>
      <Dropdown.Item href="#/action-3">shopping</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Personal Care</Dropdown.Item>
      <Dropdown.Item href="#/action-3">education</Dropdown.Item>
      <Dropdown.Item href="#/action-3">travel</Dropdown.Item>
    </DropdownButton>
    <Button variant="primary">TimeCycle</Button>
    </div>
    <Table striped bordered hover style={{ maxWidth:"1000px", textAlign:"center" ,margin:"auto"}}>
        <thead>
            <tr>
                <th>id</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
                
            </tr>
        </thead>
        <tbody>

        {bills.map((item, id)=>(
            //console.log(item.amount);
                <tr key={`pa${id}`}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td><Button variant="danger">Delete</Button>{' '}
                    <Button variant="success">Edit</Button>{' '}</td>  
                </tr>
        ))}
       </tbody> 
    </Table>
    <form>
    <label>Monthly Budget: </label>
    <input type="text"/>
    <button type="submit" >find expenses</button>
    </form>
    </div>
  )
}
export default Home;