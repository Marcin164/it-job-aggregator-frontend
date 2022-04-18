import React, { useState } from "react";

type Props = {
    value: string
    id: string;
    name?: string
    checked?: boolean
    className?: string
    onClick?: (e?: any) => any
};

const ButtonCheckbox = (props: Props) => {
    const [selectedRadioButton, setSelectedRadioButton] = useState("No")

    const isRadioSelcted = (value: string) => {
        return selectedRadioButton === value
    }

    const handleRadioChange = (e: any) => {
        setSelectedRadioButton(e.currentTarget.value);
    }

    return (
        <>
            <label>
                <input
                    id={props.id}
                    type="radio"
                    className=""
                    name={props.name}
                    value={props.value}
                    onChange={handleRadioChange}
                    onClick={props.onClick}
                    checked={isRadioSelcted(props.value)}
                />
                {props.value}
            </label>
        </>
    );
};

export default ButtonCheckbox;