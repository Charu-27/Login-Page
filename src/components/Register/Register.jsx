import  React,{useState} from'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, } from 'react-bootstrap';


import './register.css';


const Register=()=> {
   
  const [user,setUser]=useState({
      name:null,
      email:null,
      phone:null,
      password:null,
      cpassword:null
  });
  let name,value
  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value
      if(!name||!value)
        window.alert("ERROR")
      else
      setUser({...user,[name]:value});
  }
  const PostData=async (e)=>{
    e.preventDefault()
    const {name,email,phone,password,cpassword}=user;
    const res=await fetch("/Register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,phone,password,cpassword
        })
    });
    const data=await res.json();
    if(res.status===400||!data){
        window.alert("Invalid registration");
        console.log("Invalid registration")
    }
    else{
        console.log(res.status)
        window.alert("Successful registration");
        console.log("Successful registration");
        window.location.href="/Login"
        
        
    }
}
 
  return (
  <><section className="Signup">
    
    <div>
    <h1 className="heading2">REGISTER YOURSELF TO ANNANDATA </h1>
    <div className='backgroundimg2'>
      <figure>
        <img></img>
      </figure>
      </div>
      </div> 
      <div className="Registration-form">

      <div className="form-items">
      <h2 text-align="center">Register</h2>
      <Form method="POST" >
      <Form.Group className="Name" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Enter your name" value={user.name}onChange={handleInputs} 
        />
      </Form.Group>

      <Form.Group className="Email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" name="email" placeholder="Enter email" value={user.email}onChange={handleInputs} 
        />
      </Form.Group>

      <Form.Group className="Phone" controlId="formBasicPhone">
        <Form.Label>Contact</Form.Label>
        <FormControl type="number" name="phone" placeholder="Enter your phone number" value={user.phone}
        onChange={handleInputs} 
        />
        <Form.Text className="text-muted">
          your contact number should be 10 digits long.
        </Form.Text>
      </Form.Group>

      <Form.Group className="Password" controlId="formBasicpassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" name="password" placeholder="Enter your password" value={user.password}
        onChange={handleInputs} 
        />
      </Form.Group>

      <Form.Group className="Cpassword" controlId="formBasicCpassword">
        <Form.Label>Confirm password </Form.Label>
        <FormControl  type="password" name="cpassword" placeholder="Re-enter your password" value={user.cpassword}
        onChange={handleInputs} 
        />
        <Form.Text className="text-muted">
          confirm password should match with your set password.
        </Form.Text>
      </Form.Group>


      <Button variant="primary" type="submit" className="button" value="REGISTER" onClick={PostData} >
        Submit
      </Button>
    
      <p className="link2"> <a href="/Login">
            If already Registered,Back to Login!</a></p>
      </Form>
      
      </div>
      </div>
    </section>
    </>
  )
}

export default Register;