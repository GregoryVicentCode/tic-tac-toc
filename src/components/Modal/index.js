import React from "react"
import ReactDOM from "react-dom"

import { VictoryScreen } from "../VictoryScreen"

const Modal = ({ playerWin, onClickReplay }) => {
    return ReactDOM.createPortal(
        <VictoryScreen winPlayer={playerWin} onClickReplay={onClickReplay}/>,
        document.getElementById('modal')
    )
}

export { Modal }