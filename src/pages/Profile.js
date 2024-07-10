import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getUserProfile} from "../redux/authThunk";
import EditName from "../components/EditName";

function Profile() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {

        if (!token) {
            navigate('/login');
        }

        else if (token && user) {
            dispatch(getUserProfile(token));
        }
    }, [dispatch, token, navigate, user]);

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
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className={`transaction-button ${isEditing ? 'transaction-button-active' : ''}`}>View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className={`transaction-button ${isEditing ? 'transaction-button-active' : ''}`}>View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className={`transaction-button ${isEditing ? 'transaction-button-active' : ''}`}>View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default Profile;