import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CapatainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const captainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')


    const { captain, setCaptain } = React.useContext(CaptainDataContext)

            
    const submitHandler = async (e)=>{
        e.preventDefault()
        const captainData = {
            fullname:{
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const respose = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
        if (respose.status === 201){
            const data = respose.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

            
            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
            setVehicleColor('')
            setVehiclePlate('')
            setVehicleCapacity('')
            setVehicleType('')
        }
        return (    
            <div>
                <div className='py-5 px-5 flex flex-col justify-between h-screen'>
                <div>
                    <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg w-full font-medium mb-2'>
                        What's our Captain's name
                    </h3>
                    <div className='flex gap-3 mb-6'>
                        <input
                        required                 
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                        type="text"
                        placeholder='First name'
                        value={firstName}
                        onChange={(e) =>{
                            setFirstName(e.target.value)
                        }}
                        />
                        <input
                        required                
                        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                        type="text"
                        placeholder='Last name'
                        value={lastName}
                        onChange={(e) =>{
                            setLastName(e.target.value)
                        }}
                        />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>
                        What's our Captain's email
                        </h3>
                    <input
                        required 
                        value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value)
                        }}                
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                        />
                    <h3 className='text-lg font-medium mb-2'>
                        Enter password
                    </h3>
                    <input 
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e) =>{
                            setPassword(e.target.value)
                        }}               
                        required 
                        type="password" 
                        placeholder='password'
                        />
                    <h3 className='text-lg font-medium mb-2'>Vehicle details</h3>
                    <div className='flex flex-col gap-3 mb-6'>
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base'
                            type='text'
                            placeholder='Vehicle color'
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base'
                            type='text'
                            placeholder='Vehicle plate'
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base'
                            type='number'
                            min='1'
                            placeholder='Passenger capacity'
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                        />
                        <select
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base'
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value='' disabled>Select vehicle type</option>
                            <option value='car'>Car</option>
                            <option value='auto'>Auto</option>
                            <option value='moto'>bike</option>
                        </select>
                    </div>

                    <button
                        className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
                        Create Captain Account
                    </button>
                    
                </form>
                <p className='text-center'>
                        Already have an account?<Link to='/captainlogin' className='text-blue-600'>Login here</Link>
                    </p>
                </div>
                <div>
                    <p className='text-[10px]'>
                        This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms of Service apply</span>. Privacy
                    </p>
                </div>
            </div>
            </div>

        )
}       

export default captainSignup