import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp.js'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmedPassword: '',
    gender: ''
  })

  const { loading, signup} = useSignUp();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  }

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-300/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Signup 
          <span className="text-blue-300"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className='label p2'>
              <span className='text-base label-text'>Full name</span>
            </label>
            <input type='text' placeholder='Enter fullname' className='w-full input input-bordered h-10' 
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>
          <div className="mt-4">
            <label className='label p2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div className="mt-4">           
            <label className='label p2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' 
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />           
          </div>
          <div className="mt-4">           
            <label className='label p2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' 
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmedPassword: e.target.value})}
            />           
          </div>

          {/* gender checkbox goes here */}
          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to='/login' className='text-sm hover:underline hover:text-blue-900 mt-4 inline'>Already have an account?</Link>
          <div className="mt-4">
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
          </div>

        </form>
      </div>     
    </div>
  )
}

export default SignUp
