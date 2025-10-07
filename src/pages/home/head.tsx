
import Button from '@mui/material/Button';

import "./head.css"
export default function HeadConponent() {

    return (
        <>
            <header className="d-flex justify-content-center align-items-center text-center">
                <div>
                    <h1>Fresh Wholesale Flowers</h1>
                    <h4 className='line'>DIRECT TO YOU</h4>
                    <Button variant="contained" style={{backgroundColor:"#DC466A", color:"white", display:"inline-block"}}>START SHOPPING</Button>                </div>
            </header>
        </>
    )
}