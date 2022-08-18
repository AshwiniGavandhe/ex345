import React from 'react';
import {useForm} from "react-hook-form";





// import Signup from './components/Signup';


function  Registation(props,formData,setFormData) {
  const {register, handleSubmit,formState:{ errors },reset,trigger,watch
  } =useForm();

  const onSubmit= data=>{ console.log(data);
    reset();
  };

// gender
  const handleChange=event=>{
    const target=event.target
    const name=event.target.name
    const value=target.value
    alert(`${name}${value}`)
    setFormData({
        ...formData,[name]:value
    })
  }


  return (
   <>
 
<h3>Student Registation</h3>
<h2>{props.TITLE}</h2>
<form  onSubmit={handleSubmit(onSubmit)}>
     
     <label>FirstName</label>
     <input {...register("firstName",{required:true,maxLength:20})}
      onKeyUp={() => {
                  trigger("name");
                }}
   />
 {errors.firstName?.type==="required"&&"first name is required"}
 <br></br>

 <label>MiddleName</label>
 <input {...register("middleName",{required:true,maxLength:20})}/>
 {errors.middleName?.type==="required"&&"middle name is required"}
 <br></br>

 <label>LastName</label>
 <input {...register("lastName",{required:true,maxLength:20 ,pattern: /^[A-Za-z]+$/i})}

onKeyUp={()=>{trigger("lastname");
    }} 


 />
 {errors.lastName?.type==="required"&&"last name is required"}
 <br></br>
 <label>Gender</label>
 
     <input type="radio"name="gender" value="male"  onChange={handleChange} /> 

     {errors.gender?.type==="required"&&"gender is required"}
   
    <lable>male</lable>
    
    <input type="radio" name="gender" value="female"  onChange={handleChange}/>
    <lable>female</lable>

    <br></br>



     <label>Age</label> 
    
    <input type="text"{...register("age",{ required:"Age is required",
      min:{
        value:20,
        message:"minimum  age required is 20",
      },
      max:{
        value:30,
        message:"maximim age required 30",
      },
      pattern:{
        value:/^[0-9]*$/,
        message:"only numbers are allowed",
      },
    })}

    onKeyUp={()=>{trigger("age");
    }} 
    
  /> 
    
{errors.age&&(errors.age.message)}
    




    <br></br>
 <label>Availble Course</label> 
<select{...register("Availble course")}>
<option value="B.A">B.A</option>
<option value="B.SC Computers">B.SC Computers</option>
<option value="M.SC">M.SC</option>
<option value="M.SC Computers">M.SC Computers</option>
<option value="Biotechnology">Biotechnology</option>
<option value="PET">PET</option>

onKeyUp={()=>{trigger("availble course");
    }} 


</select>


<br></br>
<label>Interest:</label>
    <input type="checkbox"/>
    <label>Music</label>
    <input type="checkbox"/>

    <label>Photo</label>
    <input type="checkbox"/>

   
    
    <label>Art</label>
    <input type="checkbox"/>

    <label>dance</label>
    <input type="checkbox"/>






 <br></br>

 <label>Email</label>
 {/* <input {...register("Email",{required:true,maxLength:20,})}/>
 {errors.Email?.type==="required"&&"email name is required"}
 <br></br> */}
 <input type="text"{...register("email",{required:"Email is reqiured",
 pattern:{
  value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message:"Invalid email address",
 }})}
 onKeyUp={()=>{trigger("email");
    }} 
    />

 {errors.email&&(errors.email.message)} 

 

 <br></br>
 
 <label>Phone No</label>
  <input {...register("phone",{required:true,maxLength:20})}
 onKeyUp={()=>{trigger("phone");
    }} 

  />
 {errors.phone?.type==="required"&&"phone no is required"} 



 {/* <input type="text"{...register("phone",{required:"phone is requires",
 pattern: {
  value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-.)]*(\d{3})[-. ]*(\d{4})(?:*x(\d+))?\s*$/,
  message:"inalid phone no",
 },
 })}
 />
 {errors.phone&&(errors.phone.message)} */}

 <br></br>

 <label>click here:</label>
 <input type="submit"/>


 <input type="reset"/>
</form>



      </>
     
  );
}

export default Registation;


