import React from 'react'
import {MoonLoader,BarLoader} from "react-spinners"
function CustomLoader(props) {
    return (
        <div className="custom-loader">
            {
                props.renderer==="news"?
                <MoonLoader size={150} color={"white"}/>:
                <BarLoader height={10} width={200} color={"white"}/>
            }
            
        </div>
    )
}

export default CustomLoader
