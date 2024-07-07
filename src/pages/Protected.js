import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/**
 * Page protégée accessible uniquement aux utilisateurs connectés.
 *
 * @returns {JSX.Element} - La page protégée.
 */
const Protected = () => {
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirige l'utilisateur vers la page de connexion s'il n'est pas connecté.
        if (!token) {
            navigate('/protected');
        }
    }, [token, navigate]);

    // Si l'utilisateur n'est pas connecté, la redirection est effectuée avant le rendu de la page.
    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-blue-50 min-h-screen p-8">
            <div className="mt-8 p-4 bg-white shadow-md rounded">
                <h1 className="text-2xl">Welcome, {user.username}!</h1>
            </div>
        </div>
    );
};

export default Protected;