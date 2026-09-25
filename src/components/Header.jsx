import React, { useEffect, useState } from 'react';

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Haal de ingelogde gebruiker op uit localStorage
        const storedUser = localStorage.getItem('mamprofs_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <header className="flex justify-between items-center bg-[#0F2A1F] text-white w-full h-16 px-6 shadow-sm z-10 relative">
            <div className="flex items-center gap-3 text-2xl font-bold">
                <a href="/" className="flex items-center gap-2">
                    <span>Mam Urenplanner</span>
                </a>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-full">
                    {/* Profielfoto cirkel is bewust leeg gelaten */}
                    <div className="w-8 h-8 rounded-full bg-white text-[#FF7A00] font-bold flex items-center justify-center text-sm">
                        {/* Hier komt niets in */}
                    </div>
                    <div className="text-sm text-left">
                        {/* Toon de naam van de ingelogde gebruiker, of een fallback als niemand is ingelogd */}
                        <p className="font-semibold leading-tight">
                            {user ? user.naam : 'Niet ingelogd'}
                        </p>
                        {/* Toon de rol of functie */}
                        <p className="text-xs text-white/80 capitalize">
                            {user ? user.rol : 'Gast'}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}