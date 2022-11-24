import React, { useState } from "react";
import './cards.css';
import FormDialog from "../dialog/dialog";

export default function card(props) {
    const [open, setOpen] = useState(false);

    const handleClickCard = () => {
        setOpen(true)
    }

    return (
        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                id={props.id}
                name={props.name}     
                cost={props.cost}
                category={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
            />
            <div className="card-container" onClick={() => handleClickCard()}>
                <h1 className="card-title">{props.name}</h1>
                <p className="card-cost">{props.cost}</p>
                <p className="card-category">{props.category}</p>
            </div>
        </>
    )
}