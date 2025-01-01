import React,{useRef} from 'react'

function Alert(props) {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

    const myRef = useRef(null)
    
    const capitalize = (word) => {

        if (word === 'danger') {
            word = 'error';
        }
        const lower = word.toLowerCase();
        scrollToRef(myRef)
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div>
            <div ref={myRef}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" ><strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}</div>}
            </div>
        </div>
    )
}

export default Alert