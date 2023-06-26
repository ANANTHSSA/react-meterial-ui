import { useState } from "react"
 import {useNavigate} from 'react-router-dom';
import './Body.scss'
 
 const Login = () => {

    const [inputValue,inputName]=useState("");
    const [input1Pass,inputPass]=useState("");
    const [requred,formRequred]=useState(false);

    const nava = useNavigate();
    const formInput=(ssa)=>{
        if(ssa.target.name === "name" ){
            inputName(ssa.target.value)
        }
        else{
          inputPass(ssa.target.value)
        }
        
    }

   
    const formSubmit=(ssa)=>{
        ssa.preventDefault();
        formRequred(true)
        if(inputValue === "" || input1Pass === "")return

        const users = [
          {
            name:"rajesh",
            password:"12345",
          },
          {
            name:"priya",
            password:"12345",
          },
          {
            name:"dharsan",
            password:"12345",
          },
          {
            name:"anand",
            password:"12345",
          },
          {
            name:"ssa",
            password:"12345",
          },
        ]

        let check = users.find((ssa)=>ssa.name === inputValue && ssa.password === input1Pass)
        console.log(check);
        if(check){
        nava('/home');
        }
    }

   return (
    <div className="loged">
       <form onSubmit={formSubmit} className="form1">
        <h2>LOGIN</h2>
        <label className="label">Name</label>
            <input name="name" type='text' onChange={formInput} value={inputValue} className="mt-4 mb-3 p-1"></input><br></br>
       {inputValue === "" &&  requred && <div className="requred">name is requred</div>}

            <label  className="label">Password</label>
            <input name="pass" type='password' onChange={formInput} value={input1Pass} className="p-1"></input ><br></br>
       {input1Pass === "" &&  requred && <div className="requred">pass is requred</div>}

            <input type='submit' className="button"></input>

        </form> 
     </div>
   )
 }
 
 export default Login