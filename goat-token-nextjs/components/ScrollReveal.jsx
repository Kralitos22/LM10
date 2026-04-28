'use client';

import { useEffect, useRef, useState } from 'react';

/* ============================================================
   SCROLL REVEAL
   Wrapper yang menambahkan class .visible saat elemen masuk viewport.
   Supports delay prop for staggered animations.
============================================================ */

export default function ScrollReveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
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
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'visible' : ''} ${className}`}
            style={delay && visible ? { transitionDelay: `${delay}ms` } : {}}
        >
            {children}
        </Tag>
    );
}