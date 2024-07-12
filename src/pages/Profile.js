import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/authThunk";
import EditName from "../components/EditName";

function Profile() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const accountTypes = ["Checking (x8349)", "Savings (x6712)", "Credit Card (x8349)"];
    const accountBalances = [2082.79, 10928.42, 184.30];
    const balanceDescriptions = ["Available Balance", "Available Balance", "Current Balance"];

    useEffect(() => {
        let isMounted = true;
        if (!token) {
            if (isMounted) navigate('/login');
        } else {
            dispatch(getUserProfile(token));
        }

        return () => { isMounted = false };
    }, [dispatch, token, navigate]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <main className={`main ${isEditing ? 'bg-light' : 'bg-dark'}`}>
            <div className={`header ${isEditing ? 'welcome' : ''}`}>
                {isEditing ? (
                    <EditName
                        onCancel={() => setIsEditing(false)}
                        onSave={() => setIsEditing(false)}
                    />
                ) : (
                    <>
                        <h1>Welcome back<br/>{user.firstName} {user.lastName}!</h1>
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
                    </>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountTypes.map((account, index) => (
                <section key={index} className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {account}</h3>
                        <p className="account-amount">${accountBalances[index]}</p>
                        <p className="account-amount-description">{balanceDescriptions[index]}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className={`transaction-button ${isEditing ? 'transaction-button-active' : ''}`}>View transactions</button>
                    </div>
                </section>
            ))}
        </main>
    );
}

export default Profile;
