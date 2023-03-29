
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form , Badge , ListGroup , Button } from 'react-bootstrap';

function App() {
  const api ="http://localhost:3001"
  const [users , setUsers]=useState([]);
  const [name , setName]=useState("");
  const [age , setAge]=useState("");
  const [email , setEmail]=useState("")

 useEffect(()=>
 {
   axios.get(`${api}/users`)
   .then(res =>{
    setUsers(res.data)
   }
    )
 },[users])


 const createUser =()=>
 {
  if(name && age && email){
   axios.post(`${api}/createUser`,{name,age,email})
   .then(res => res.data)
  
  }
  
 }
  return (
    <>
    <Container>
       
       <h2 className='fw-bold fs-1 text-center text-white mb-5'>&copy; Kareem Azam & Mohamed Khalid</h2>

      <Form className='form'>
        <Form.Control type='text' placeholder='Name' onChange={e => setName(e.target.value)}/>
        <Form.Control type='number' placeholder='Age' onChange={e => setAge(e.target.value)}/>
        <Form.Control type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
        <Button variant="success" type="submit" onClick={createUser}>
        Submit
      </Button>
      </Form>

      <div className="result">
      {users.map(user =>
      {
        return(
        <ListGroup key={user._id}>
          <ListGroup.Item variant='dark' className='d-flex justify-content-between'>
            <div className="ms-2 me-auto">
               <div className="fw-bold">{user.name}</div>{user.email}
            </div>
            <Badge bg="success" pill>{user.age}</Badge>
          </ListGroup.Item>
        </ListGroup>
        )
      })}
      </div>
    </Container>
    
    </>
  );
}

export default App;
