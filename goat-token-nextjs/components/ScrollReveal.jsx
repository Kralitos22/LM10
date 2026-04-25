'use client';

import { useEffect, useRef, useState } from 'react';

/* ============================================================
   SCROLL REVEAL
   ------------------------------------------------------------
   Wrapper yang menambahkan class .visible saat elemen masuk
   viewport. Pakai seperti:
     <ScrollReveal className="...">...</ScrollReveal>
============================================================ */

export default function ScrollReveal({ children, className = '', as: Tag = 'div' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
            {children}
        </Tag>
    );
}
