'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';

/* ============================================================
   TOAST CONTEXT
   ------------------------------------------------------------
   Menyediakan fungsi showToast() dan fireConfetti() ke semua
   komponen child via hook useToast().
============================================================ */

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
    const [msg, setMsg]     = useState('');
    const [show, setShow]   = useState(false);
    const timeoutRef        = useRef(null);

    // Tampilkan toast selama 2.2 detik
    const showToast = useCallback((message) => {
        setMsg('✓ ' + message);
        setShow(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShow(false), 2200);
    }, []);

    // Hamburkan confetti gold/red/green
    const fireConfetti = useCallback((n = 50) => {
        const colors = ['#facc15', '#fbbf24', '#dc2626', '#16a34a', '#ffffff'];

        for (let i = 0; i < n; i++) {
            const el = document.createElement('div');
            el.className = 'confetti';
            el.style.background = colors[Math.floor(Math.random() * colors.length)];
            el.style.left       = Math.random() * 100 + 'vw';
            el.style.animation  = `fall ${2 + Math.random() * 2}s linear forwards`;
            el.style.transform  = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, fireConfetti }}>
            {children}
            <div className={`toast ${show ? 'show' : ''}`}>{msg}</div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast harus dipakai di dalam <ToastProvider>');
    return ctx;
}
