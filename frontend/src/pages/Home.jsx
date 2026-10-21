import React, { use, useRef, useState } from "react";
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () =>{
    const [pickup, setPickup] = useState('')
    const [destination, setDestination]= useState('')
    const [panelopen, setPanelopen]= useState(false)
    const vehiclePanelRef = useRef(null)
    const confirmRidepanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel]= useState(false)
    const [confirmRidepanel, setConfirmRidepanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)

    
    const submitHandler =(e)=>{
        e.preventDefault()

    }

    useGSAP(function(){
        if (panelopen){
            gsap.to(panelRef.current,{
                 height:'70%',
                 padding:24
                //  opacity : '1'
             })
             gsap.to(panelCloseRef.current,{
                opacity:1
             })
        }else{
            gsap.to(panelRef.current,{
                 height:'0%',
                 padding:20
                //  opacity:'0'
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
             })
        }
    },[panelopen])


    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])

    useGSAP(function(){
        if(confirmRidepanel){
            gsap.to(confirmRidepanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidepanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidepanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[waitingForDriver])



    return (
        <div className="h-screen relative overflow-hidden">
            <img className='w-16 absolute left-5 top-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />

            <div className=" h-screen w-screen">
                {/* image for temporary */}
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0  w-full '>
                <div className="h-[30%] bg-white p-6 relative">
                    <h5 ref={panelCloseRef} onClick={()=>{
                        setPanelopen(false)
                    }} className="absolute opacity-0 top-6 right-6 text-2xl">
                        <i className="ri-arrow-down-wide-line"></i>          
                    </h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) =>{
                        submitHandler(e)
                    }}> 
                        <div className=" line absolute h-16 w-1 top-[45%] left-10 bg-gray-800 rounded-full "></div>
                        <input
                            onClick={()=>{
                            setPanelopen(true)
                            }}

                            value={pickup}
                            onChange={(e)=>{
                            setPickup(e.target.value)
                        }}   
                        className="bg-[#d8d8d8ee] px-12 py-2 text-lg rounded-lg w-full mt-5 " 
                        type="text" 
                        placeholder="Add a pick-up location" 
                        />
                        <input
                            onClick={()=>{
                            setPanelopen(true)
                            }}

                            value={destination}
                            onChange={(e)=>{
                            setDestination(e.target.value)
                        }} 
                         className="bg-[#d8d8d8ee] px-12 py-2 text-lg rounded-lg w-full mt-3" 
                         type="text" 
                         placeholder="Enter your destination"
                        />
                    </form>
                </div>
                <div ref={panelRef} className="bg-white h-0">
                    <LocationSearchPanel setPanelopen={setPanelopen} setVehiclePanel={setVehiclePanel}/>

                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
               <VehiclePanel setConfirmRidePanel={setConfirmRidepanel} setVehiclePanel={setVehiclePanel}/> 
            </div>
            <div ref={confirmRidepanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
               <ConfirmRide setConfirmRidePanel={setConfirmRidepanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <WaitingForDriver waitingForDriver= {waitingForDriver}/>
            </div>
        </div>
    )
}

export default Home