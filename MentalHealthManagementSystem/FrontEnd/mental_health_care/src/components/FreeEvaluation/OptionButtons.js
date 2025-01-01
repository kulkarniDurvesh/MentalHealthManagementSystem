import react from 'react';
import './OptionButtons.css'
import $ from 'jquery';
import { useState } from 'react'

const OptionButton = () => {

    // const btnHandler = () =>{

    // }

    $(document).ready(function () {
        $("#btn1").click(function () {
            $("#btn1").removeClass("button")
            $("#btn1").css("display", "none")
        })
    })

    const onClickHandler = (id) => {

        for (var i = 0; i < 4; i++) {

        if (i != id)
        {
            console.log(id+" "+i)
            $(`#${i}`).css("display", "none")
        }
        
        $(`#${i}`).prop("disabled",true)
        }
    }

    return (
        <div className="mt-5">
            <button className="qabutton" id="0" onClick={() => onClickHandler('0')}> Button
            </button>
            <button className="qabutton" id="1" onClick={() => onClickHandler('1')}> Button
            </button>
            <button className="qabutton" id="2" onClick={() => onClickHandler('2')}> Button
            </button>
            <button className="qabutton" id="3" onClick={() => onClickHandler('3')}> Button
            </button>
        </div>
    )
}
export default OptionButton;