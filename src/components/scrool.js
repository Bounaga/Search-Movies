// you can use this for scrolling any time
// just wrap it to the component that needs scrolling

const Scrool = (props) => {
    return(
        <div style={{overflowX : 'scroll', border : 'none', height : '95vh',}}>
        {/* it doesn't work without this lol*/}
         {props.children}
        {/* {console.log(props.children)} */}
        </div>
    );
}

export default Scrool;