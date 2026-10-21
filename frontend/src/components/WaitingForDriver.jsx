import React from "react";

const WaitingForDriver = (props) =>{
    return (
        <div>
            <h5 className="p-2 text-center w-[90%] abolute top-0" onClick={()=>{
                    props.waitingForDriver(false)
                }} ><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

                <div className="fiex items-center justify-between">
                    <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lM2IzZjJlOC1iZjNjLTRhMDUtYTk0Mi0zNTcyYThkNGNiYjYucG5n" alt="" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium">shubham</h2>
                        <h4 className="text-xl font-semibold -mt-1 -mb-1">WB02M 6694 </h4>
                        <p className="text-sm text-gray-600">Tata Indica-DLX</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-between flex-col items-center">
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
                </div>
        </div>
        )
}

export default WaitingForDriver