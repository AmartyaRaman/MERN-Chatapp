import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-300/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login 
          <span className="text-blue-300"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div>           
            <label className='label p2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />           
          </div>

          <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 inline'>Don't have an account?</a>
          <div>
            <button className='btn btn-block bt-sm mt-2'>Login</button>
          </div>

        </form>
      </div>     
    </div>
  )
}

export default Login
