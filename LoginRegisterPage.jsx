import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const LoginRegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      })
      const data = await res.json()
      alert(data.message)
    } catch (err) {
      console.error(err)
      alert('Registration failed')
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })
      const data = await res.json()
      if (data.success) {
        alert('Login successful')
      } else {
        alert('Invalid credentials')
      }
    } catch (err) {
      console.error(err)
      alert('Login failed')
    }
  }

  return (
    <div className="pt-24 px-6 text-gray-800 font-sans overflow-y-auto h-screen">
      {/* Space */}
      <div className="h-24"></div>

      <main className="max-w-4xl mx-auto py-10 flex flex-col md:flex-row gap-12">
        {/* Register Form */}
        <div className="bg-[#F6FAFD] p-8 rounded-xl shadow-md flex-1">
          <h2 className="text-2xl font-bold text-[#7C1C6C]">Register</h2>
          <hr className="border-t-2 border-[#7C1C6C] w-1/4 mt-1 mb-6" />
          <form className="space-y-4" onSubmit={handleRegisterSubmit}>
            <input
              name="firstName"
              value={registerData.firstName}
              onChange={handleRegisterChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded bg-gray-100"
              required
            />
            <input
              name="lastName"
              value={registerData.lastName}
              onChange={handleRegisterChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded bg-gray-100"
              required
            />
            <input
              name="email"
              type="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded bg-gray-100"
              required
            />
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded bg-gray-100"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#7C1C6C] text-white font-semibold py-2 rounded mt-4 hover:bg-[#5e1452] transition-colors"
            >
              Register
            </button>
          </form>
        </div>

        {/* Login Form */}
        <div className="bg-[#F6FAFD] p-8 rounded-xl shadow-md flex-1">
          <h2 className="text-2xl font-bold text-[#7C1C6C] text-center">
            Sign In
          </h2>
          <hr className="border-t-2 border-[#7C1C6C] w-1/4 mx-auto mt-1 mb-6" />
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            <input
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded bg-gray-100"
              required
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded bg-gray-100"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#7C1C6C] text-white font-semibold py-2 rounded mt-4 hover:bg-[#5e1452] transition-colors"
            >
              Log In
            </button>
            <p className="text-center font-semibold text-black mt-2 hover:text-purple-700 cursor-pointer transition-colors">
              Forgot Password?
            </p>
          </form>
        </div>
      </main>
    </div>
  )
}

export default LoginRegisterPage
