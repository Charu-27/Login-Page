import React,{useState} from'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'



  
  const Login=()=> {

    const [email,setEmail]=useState(' ');
  const [password,setPassword]=useState(' ');

  const loginUser=async(e)=>
  {e.preventDefault();

    const res=await fetch('/Login', 
    {method:"POST",
    headers:{
      "Content-Type": "application/json"},
      body: JSON.stringify({
        email,password
      })
    });

    const data=res.json();

    if(res.status===400||!data)
    {window.alert('Invalid credential');}
    else
    {window.alert('Login successful');
    window.location.href="/Home"}
    

  }

    return (
    <><section className="Login">
      <div>
    <h1 className="heading1">WELCOME TO ANNANDATA</h1>
    <div className='backgroundimg1'>
      <figure>
      </figure>
      </div>
      </div> 
    <Form className='Login-form' method="POST">
      
        <div className='form-items1'>
          <h2 font-size='1px'>LOGIN</h2>

      <Form.Group className="Email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control isRequired name='email' type="email" placeholder="Enter email"
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control isRequired type="password" name='password' placeholder=" Enter Your Password"
        value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='button1' onClick={loginUser}>
        Submit
      </Button>
      <p className="link1"> <a href="/Register">
            New User?,Register yourself!</a></p>
      </div>
    </Form>
   
    </section>
    </>
  )
}

export default Login;