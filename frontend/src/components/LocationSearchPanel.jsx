import React from "react";

const LocationSearchPanel =(props)=> {
    console.log(props);

    // sample array for location
    const location =[
        "140, Vinayaka Layout, Shanthipura, Phase II, Electronic City Karnataka 560100",
        "Oriental Campus, Raisen Rd, Patel Nagar, Bhopal, Madhya Pradesh 462022",
        "142, Vinayaka Layout, Shanthipura, Phase I, Electronic City Karnataka 560100",
        "Oriental Campus, Raisen Rd, Patel Nagar, Bhopal, Madhya Pradesh 462023",

]
    return (
        <div>
            {/* this is a sample data */}
            {
                location.map(function(elem, idx){
                    return<div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelopen(false)
                    }}
                     className="flex gap-4 border-2 p-3 border-gray-200 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee h-8 flex items-center justify-center w-12 rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">{elem}</h4>
            </div>
                })
            }
            
        </div>
    )
}

export default LocationSearchPanel