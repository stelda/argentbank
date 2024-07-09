import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../redux/authThunk';

const EditName = () => {
    const user = useSelector((state) => state.auth.user);
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(updateUserProfile({ firstName, lastName }));
    };

    const handleCancel = () => {
        setFirstName(user?.firstName || '');
        setLastName(user?.lastName || '');
    };

    return (
        <div>
            <h1>Welcome back</h1>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default EditName;

