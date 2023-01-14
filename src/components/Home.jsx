import React from 'react'
import Table from 'react-bootstrap/Table';

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
    <>
    <h1 align="center" style={{marginTop: "20px"}}>Bills DashBoard</h1>
    <Table striped bordered hover style={{ maxWidth:"1000px", textAlign:"center" ,margin:"auto"}}>
        <thead>
            <tr>
                <th>id</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Delete</th>
                <th>Edit</th>
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
                    <td>Delete Button</td>
                    <td>Edit Button</td>
                </tr>
        
        ))}
        

       </tbody> 
    </Table>
    </>
  )
}
export default Home;