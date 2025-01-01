import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

export default function PrintComponent(props) {
  let componentRef = useRef();
  // const HandlerPrint =useReactToPrint({
  //   content:()=>componentRef.current,
  // });

  return (
    <>
      <div>
        <h2>PrintComponent</h2>
        button to trigger printing of target component
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />

         <ComponentToPrint ref={(el) => (componentRef = el)} />  
        {/* {Q1.map(ele =>
		<ComponentToPrint ques={ele.Ques } ans={ele.Ans}/>
	)} */}

        {/* component to be printed */}
        {/* <ComponentToPrint ref={componentRef}  /> */}
        {/* <button onClick={HandlerPrint}>print this</button> */}
      </div>
    </>
  );
}