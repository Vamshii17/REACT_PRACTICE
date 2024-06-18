import { RotatingLines } from "react-loader-spinner"

function RotatingLineSpinner(){
    return( 
    <RotatingLines
    visible={true}
    height="96"
    width="96"
    strokeColor="darkgrey"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    )
}
export default RotatingLineSpinner;