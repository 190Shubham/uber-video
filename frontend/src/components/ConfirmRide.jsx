import React from "react";  

const ConfirmRide = (props) => {

    return (
        <div>
            <h5 className="p-2 text-center w-[90%] abolute top-0" onClick={()=>{
                    props.setVehiclePanel(false)
                }} ><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
                <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

                <div className="flex gap-2 justify-between flex-col items-center">
                    <img className="h-20" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lM2IzZjJlOC1iZjNjLTRhMDUtYTk0Mi0zNTcyYThkNGNiYjYucG5n" alt="" />
                    <div className="w-full mt-5">
                        <div className="flex items-center gap-5 p-3 border-b-2">
                            <i className=" text-lg ri-map-pin-user-fill"></i>
                            <div>
                                <h3 className=" text-lg font-medium">675/11-A</h3>
                                <p className="text-sm -mt-1 text-gray-600">Patel Nager, Bhopal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-3 border-b-2">
                            <i className=" text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className=" text-lg font-medium">675/11-A</h3>
                                <p className="text-sm -mt-1 text-gray-600">Patel Nager, Bhopal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-3">
                            <i className=" text-lg ri-currency-line"></i>
                            <div>
                                <h3 className=" text-lg font-medium">₹118</h3>
                                <p className="text-sm -mt-1 text-gray-600">case</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() =>{
                        props.setVehicleFound(true)
                        props.setConfirmRidePanel(false)
                    }} className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg">Confirm</button>
                </div>
        </div>
    )
}

export default ConfirmRide