import React from "react"
import { useState } from "react"

function TrafficLight() {
    const [light, setLight] = useState(false)
    //const [status, setStatus] = useState(false)
    const [red, setRed] = useState("")
    const [yellow, setYellow] = useState("")
    const [green, setGreen] = useState("")

    function turnOn(color) {
        if (color == "red") {
            setRed("0px 0px 50px white")
            setYellow("")
            setGreen("")
        } else if (color == "yellow") {
            setYellow("0px 0px 50px white")
            setRed("")
            setGreen("")
        } else if (color == "green") {
            setGreen("0px 0px 50px white")
            setYellow("")
            setRed("")
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="stick"></div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="btn-group-vertical bg-dark p-5 rounded-3" role="group" aria-label="Basic mixed styles example bg-dark">
                    <button type="button" className="btn btn-danger rounded-circle py-5 px-5 my-2" style={{ "boxShadow": red }} onClick={() => turnOn("red")}></button>
                    <button type="button" className="btn btn-warning rounded-circle py-5 px-5 my-2" style={{ "boxShadow": yellow }} onClick={() => turnOn("yellow")}></button>
                    <button type="button" className="btn btn-success rounded-circle py-5 px-5 my-2" style={{ "boxShadow": green }} onClick={() => turnOn("green")}></button>
                </div>
            </div >
        </>
    )
}

export default TrafficLight 