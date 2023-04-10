import React from 'react';
import { icons } from '../../assets/icons/icon';

const CreateButton = () => {
    return (
        <button type='submit' className="d-flex align-items-center create_button ml-20 gap-2 p-22">
            <img src={icons.plus} alt="" />
            <p>Create</p>
        </button>
    );
}

export default CreateButton;
