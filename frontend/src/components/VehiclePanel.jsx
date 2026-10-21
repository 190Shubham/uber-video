import React from "react";

const VehiclePanel = (props) =>{
    return (
        <div>
            <h5 className="p-2 text-center w-[90%] abolute top-0" onClick={()=>{
                    props.setVehiclePanel(false)
                }} ><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

                <div onClick={() =>{
                    props.setConfirmRidePanel(true)
                }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                    <img className="h-10 " src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lM2IzZjJlOC1iZjNjLTRhMDUtYTk0Mi0zNTcyYThkNGNiYjYucG5n" alt="" />
                    <div className=" ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹198.7</h2>
                </div>
                <div  onClick={() =>{
                    props.setConfirmRidePanel(true)
                }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                    <img className="h-10 " src="https://img.autocarpro.in/autocarpro/4d3ef0c9-c75e-46a3-af25-fab216e0bfe8_Untitled.jpg?w=750&h=490&q=75&c=1" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">Moto <span><i className="ri-user-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable motercycle rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹69.7</h2>
                </div>
                <div  onClick={() =>{
                    props.setConfirmRidePanel(true)
                }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                    <img className="h-10 " src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA==" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹120.67</h2>
                </div>
        </div>
    )
}
export default VehiclePanel