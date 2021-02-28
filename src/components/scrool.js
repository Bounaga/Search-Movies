// you can use this for scrolling any time
// just wrap it to the component that needs scrolling
import './scrool.css';
const Scrool = (props) => {
    return(
        <div className='scrool'>
        {/* it doesn't work without this lol*/}
         {props.children}
        {/* {console.log(props.children)} */}
        </div>
    );
}

export default Scrool;