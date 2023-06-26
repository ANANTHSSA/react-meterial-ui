
import React,{useState} from 'react';
import {useNavigate,Link,useParams,useLocation,useSearchParams} from 'react-router-dom';
import './Body.scss'
// localStorage.setItem(JSON.stringify([]));

let arr=[];
localStorage.setItem("value",JSON.stringify([]));


const Form = () => {
  const location = useLocation();
  // const{form} = location.state;
const geting = location.state;
// console.log(getPass);

const [getPass,passItem]=useState(geting)

  const [input1Value,setValue1]=useState(getPass ? getPass[0].name : '')
  const [input2Value,setValue2]=useState(getPass ? getPass[0].task : "")
  const [input3Value,setValue3]=useState(getPass ? getPass[0].name : '')
  const [input4Value,setValue4]=useState(getPass ? getPass[0].task : "")
  const [sumbit,formSumbit] = useState(false);
 
//   const nava = useNavigate()
// console.log(getPass);
  
    const dataInputs=(ssa)=>{
      console.log(ssa.target.value,ssa.target.name);
    
      if(ssa.target.name === "data1"){
        setValue1(ssa.target.value);
     
      }
     else if(ssa.target.name === "data2"){
       setValue2(ssa.target.value);
    
     }
     else if(ssa.target.name === "data3"){
        setValue3(ssa.target.value);
     
      }
      else{
        setValue4(ssa.target.value);

      }

    }
    // const checkbox = (ssa)=>{
      
    //   if(ssa.target.checked){
    //     setValue('complete')
    //   }
      
     
    // }

    
const buttonSubmit = (ssa)=>{
  ssa.preventDefault() ;
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
  formSumbit(true);
  if(input1Value === "" || input2Value === ""|| input3Value === ""|| input4Value==='')return
  // console.log(input1Value,input2Value,checking);

  const obj =
    {
      name:input1Value,
      rating: input2Value,
      minutes:input3Value,
      rupee:input4Value,
    }
    console.log('obj',obj);
    if(getPass != null){
        arr[getPass[1]]=obj;
    }
    else{
      arr.push(obj);
    }
    console.log(arr);
   
   localStorage.setItem("value",JSON.stringify(arr));
}
// console.log(r);

  return (
    
    <div className='form'>
      <div>
    <section>
      <div className='container'>
         <div className='row'>
            <div>
               <Link to={'/Home'}>Home</Link>
               
            </div>
            <div className='col-5'>
              
            </div>
            <div>
            <Link to={'/'}>Login</Link>
            </div>
         </div>
      </div>
    </section>
  </div>
    <section>

      <div className='container'>
       
        <div className='row justify-content-center'>
          <div className='col-5'>
          <h2 className='text-center mb-2'>Card details</h2>
          
      <form onSubmit={ buttonSubmit} className='col-12 form1'>
        <label >Name</label><br></br>
        <input name='data1' onChange={dataInputs}  value={input1Value}></input><br></br>

        <label >Rating</label><br></br>
        <input name='data2' onChange={dataInputs}  value={input2Value}></input><br></br>

        <label >Minutes</label><br></br>
        <input name='data3' onChange={dataInputs}  value={input3Value}></input><br></br>

        <label >Rupee</label><br></br>
        <input name='data4' onChange={dataInputs}  value={input4Value}></input><br></br>
       {/* {input1Value === "" &&  sumbit && <div className='requred'>name is requred</div>} */}
       {/* {input2Value === "" && sumbit && <div className='requred'>id is requred</div>} */}
      

        {/* <button onClick={()=> buttonSubmit()}>sumbit</button> */}
        <input type='submit'></input>
        
      </form>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Form