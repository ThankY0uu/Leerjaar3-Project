import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('mam_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <header className="flex justify-between items-center bg-[#0F2A1F] text-white w-full h-16 px-6 shadow-sm z-10 relative">
            <div className="flex items-center gap-3 text-2xl font-bold">
                <Link to="/dashboard" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <span>Mam Urenplanner</span>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                {/* Klikken op de profiel-badge stuurt de gebruiker naar de instellingen-pagina */}
                <Link
                    to="/instellingen"
                    className="flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                >
                    <div className="w-8 h-8 rounded-full bg-white text-[#FF7A00] font-bold flex items-center justify-center text-sm">
                        {/* Profielfoto cirkel */}
                    </div>
                    <div className="text-sm text-left">
                        <p className="font-semibold leading-tight">
                            {user ? user.naam : 'Niet ingelogd'}
                        </p>
                        <p className="text-xs text-white/80 capitalize">
                            {user ? user.rol : 'Gast'}
                        </p>
                    </div>
                </Link>
            </div>
        </header>
    );
}