import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-300/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Signup 
          <span className="text-blue-300"> ChatApp</span>
        </h1>

        <form>
          <div className="mt-4">
            <label className='label p2'>
              <span className='text-base label-text'>Full name</span>
            </label>
            <input type='text' placeholder='Enter fullname' className='w-full input input-bordered h-10' />
          </div>
          <div className="mt-4">
            <label className='label p2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div className="mt-4">           
            <label className='label p2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />           
          </div>
          <div className="mt-4">           
            <label className='label p2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='text' placeholder='Confirm password' className='w-full input input-bordered h-10' />           
          </div>

          {/* gender checkbox goes here */}
          <GenderCheckBox />

          <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-4 inline'>Already have an account?</a>
          <div className="mt-4">
            <button className='btn btn-block bt-sm mt-2'>Signup</button>
          </div>

        </form>
      </div>     
    </div>
  )
}

export default SignUp
