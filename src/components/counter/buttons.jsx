const Buttons = (props) => {
    return (<>
        <button className="btn btn-primary mx-2" onClick={props.handel} >{props.title}</button>
    </>
    )
}
export default Buttons