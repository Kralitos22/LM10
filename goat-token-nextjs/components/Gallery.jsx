'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

/* ============================================================
   MESSI GALLERY — USER IMAGES
   wc = World Cup | aw = Awards | bc = Barcelona | sk = Skills | ic = Icon
============================================================ */

const GALLERY_PHOTOS = [
    // WORLD CUP
    { id: 1,  src: '/wc1-full.jpg',   thumb: '/wc1-thumb.jpg',   title: 'World Cup Glory',          caption: 'Qatar 2022 — Dream realized',        category: 'World Cup',    year: '2022', span: 'col-span-2 row-span-2' },
    { id: 2,  src: '/wc2-full.jpg',   thumb: '/wc2-thumb.jpg',   title: 'Copa America Champion',   caption: 'First major trophy as captain',      category: 'World Cup',    year: '2021', span: '' },
    { id: 3,  src: '/wc3-full.jpg',   thumb: '/wc3-thumb.jpg',   title: 'Final Whistle',           caption: 'End of an era — world champion',     category: 'World Cup',    year: '2022', span: '' },
    { id: 4,  src: '/wc4-full.jpg',   thumb: '/wc4-thumb.jpg',   title: 'Trophy Lift',            caption: 'Holding the golden trophy',          category: 'World Cup',    year: '2022', span: '' },
    { id: 5,  src: '/wc5-full.jpg',   thumb: '/wc5-thumb.jpg',   title: 'Golden Ball',            caption: 'Best player of the tournament',      category: 'World Cup',    year: '2022', span: '' },
    { id: 6,  src: '/wc6-full.jpg',   thumb: '/wc6-thumb.jpg',   title: 'Argentina Celebration',   caption: 'La Albiceleste united',              category: 'World Cup',    year: '2022', span: '' },
    { id: 7,  src: '/wc7-full.jpg',   thumb: '/wc7-thumb.jpg',   title: 'The Dream Fulfilled',    caption: 'From Rosario to the world',          category: 'World Cup',    year: '2022', span: '' },
    { id: 8,  src: '/wc8-full.jpg',   thumb: '/wc8-thumb.jpg',   title: 'World Cup Journey',      caption: 'Path to glory',                      category: 'World Cup',    year: '2022', span: '' },
    { id: 9,  src: '/wc9-full.jpg',   thumb: '/wc9-thumb.jpg',   title: 'Messi Magic',            caption: 'Unforgettable tournament',           category: 'World Cup',    year: '2022', span: '' },

    // AWARDS
    { id: 10, src: '/aw1-full.jpg',   thumb: '/aw1-thumb.jpg',   title: 'Ballon d\'Or Legend',     caption: '8x Ballon d\'Or winner',             category: 'Awards',       year: '2023', span: '' },
    { id: 11, src: '/aw2-full.jpg',   thumb: '/aw2-thumb.jpg',   title: 'Record Breaker',         caption: 'Most Ballon d\'Or wins ever',        category: 'Awards',       year: '2023', span: 'col-span-2' },
    { id: 12, src: '/aw3-full.jpg',   thumb: '/aw3-thumb.jpg',   title: 'Award Night',            caption: 'Standing ovation at ceremony',       category: 'Awards',       year: '2023', span: '' },
    { id: 13, src: '/aw4-full.jpg',   thumb: '/aw4-thumb.jpg',   title: 'GOAT Recognition',       caption: 'The greatest of all time',           category: 'Awards',       year: '2023', span: '' },
    { id: 14, src: '/aw5-full.jpg',   thumb: '/aw5-thumb.jpg',   title: 'Golden Foot Award',      caption: 'Prestigious football honor',         category: 'Awards',       year: '2023', span: '' },
    { id: 15, src: '/aw6-full.jpg',   thumb: '/aw6-thumb.jpg',   title: 'FIFA World Cup',        caption: 'Best player of the tournament',     category: 'Awards',       year: '2022', span: '' },
    { id: 16, src: '/aw7-full.jpg',   thumb: '/aw7-thumb.jpg',   title: 'The Best FIFA Award',   caption: 'World Player of the Year',           category: 'Awards',       year: '2023', span: '' },

    // BARCELONA
    { id: 17, src: '/bc1-full.jpg',   thumb: '/bc1-thumb.jpg',   title: 'Barcelona Legend',       caption: '20 years at Camp Nou',               category: 'FC Barcelona', year: '2021', span: '' },
    { id: 18, src: '/bc2-full.jpg',   thumb: '/bc2-thumb.jpg',   title: 'Camp Nou Hero',          caption: 'Home of the GOAT',                   category: 'FC Barcelona', year: '2021', span: '' },
    { id: 19, src: '/bc3-full.jpg',   thumb: '/bc3-thumb.jpg',   title: 'Barcelona Era',         caption: 'The golden years',                   category: 'FC Barcelona', year: '2021', span: '' },
    { id: 20, src: '/bc4-full.jpg',   thumb: '/bc4-thumb.jpg',   title: 'La Masia Product',      caption: 'Born and raised a Barcelona star',   category: 'FC Barcelona', year: '2021', span: '' },
    { id: 21, src: '/bc5-full.jpg',   thumb: '/bc5-thumb.jpg',   title: 'Blaugrana Pride',        caption: 'Forever a Barcelona icon',           category: 'FC Barcelona', year: '2021', span: '' },
    { id: 22, src: '/bc6-full.jpg',   thumb: '/bc6-thumb.jpg',   title: 'Barça Champion',        caption: 'Countless titles for the club',      category: 'FC Barcelona', year: '2021', span: '' },
    { id: 23, src: '/bc7-full.jpg',   thumb: '/bc7-thumb.jpg',   title: 'Camp Nou Magic',        caption: 'Creating memories at home',          category: 'FC Barcelona', year: '2021', span: '' },

    // SKILLS
    { id: 24, src: '/sk1-full.jpg',   thumb: '/sk1-thumb.jpg',   title: 'Dribbling Master',       caption: 'Unplayable at his peak',              category: 'Skills',       year: '2020', span: 'col-span-2' },
    { id: 25, src: '/sk2-full.jpg',   thumb: '/sk2-thumb.jpg',   title: 'Free Kick Specialist',   caption: 'Unstoppable from distance',          category: 'Skills',       year: '2020', span: '' },
    { id: 26, src: '/sk3-full.jpg',   thumb: '/sk3-thumb.jpg',   title: 'The Playmaker',          caption: 'Vision beyond compare',              category: 'Skills',       year: '2020', span: '' },
    { id: 27, src: '/sk4-full.jpg',   thumb: '/sk4-thumb.jpg',   title: 'Goal Machine',           caption: '800+ career goals',                  category: 'Skills',       year: '2020', span: '' },
    { id: 28, src: '/sk5-full.jpg',   thumb: '/sk5-thumb.jpg',   title: 'La Pulga',               caption: 'The Flea — unstoppable',              category: 'Skills',       year: '2020', span: '' },
    { id: 34, src: '/sk6-full.jpg',   thumb: '/sk6-thumb.jpg',   title: 'Speed & Skill',          caption: 'Unmatched pace and technique',       category: 'Skills',       year: '2020', span: '' },
    { id: 35, src: '/sk7-full.jpg',   thumb: '/sk7-thumb.jpg',   title: 'Ball Control',           caption: 'Perfection with the ball at feet',    category: 'Skills',       year: '2020', span: '' },

    // ICON
    { id: 29, src: '/ic1-full.jpg',   thumb: '/ic1-thumb.jpg',   title: 'GOAT Icon',              caption: 'The face of football',               category: 'Icon',         year: '2023', span: '' },
    { id: 30, src: '/ic2-full.jpg',   thumb: '/ic2-thumb.jpg',   title: 'Argentina Captain',      caption: 'Leading La Albiceleste',             category: 'Icon',         year: '2022', span: '' },
    { id: 31, src: '/ic3-full.jpg',   thumb: '/ic3-thumb.jpg',   title: 'The People\'s Champion', caption: 'Loved by millions worldwide',        category: 'Icon',         year: '2023', span: '' },
    { id: 32, src: '/ic4-full.jpg',   thumb: '/ic4-thumb.jpg',   title: 'Global Icon',            caption: 'Recognized everywhere',              category: 'Icon',         year: '2023', span: '' },
    { id: 33, src: '/ic5-full.jpg',   thumb: '/ic5-thumb.jpg',   title: 'Living Legend',         caption: 'Football immortality achieved',      category: 'Icon',         year: '2023', span: '' },
    { id: 36, src: '/ic6-full.jpg',   thumb: '/ic6-thumb.jpg',   title: 'World\'s Best',         caption: 'The greatest player of all time',     category: 'Icon',         year: '2023', span: '' },
    { id: 37, src: '/ic7-full.jpg',   thumb: '/ic7-thumb.jpg',   title: 'Football Royalty',      caption: 'An icon transcending the sport',      category: 'Icon',         year: '2023', span: '' },
    { id: 38, src: '/ic8-full.jpg',   thumb: '/ic8-thumb.jpg',   title: 'The Ultimate GOAT',     caption: 'Legend written in gold',               category: 'Icon',         year: '2023', span: '' },
];

const CATEGORIES = ['ALL', 'World Cup', 'Awards', 'FC Barcelona', 'Skills', 'Icon'];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [lightbox, setLightbox] = useState(null);

    const filtered = activeCategory === 'ALL'
        ? GALLERY_PHOTOS
        : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

    return (
        <>
            <section id="gallery" className="py-24 px-5 section-blue-glow">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <ScrollReveal className="text-center mb-12">
                        <p className="text-gold font-bold tracking-[0.5em] text-sm mb-4">THE LEGEND</p>
                        <h2 className="font-display text-5xl md:text-8xl gradient-gold mb-5 headline-shadow">
                            GALLERY
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Relive the greatest moments of Lionel Messi — the GOAT of football.
                        </p>
                    </ScrollReveal>

                    {/* Category filter */}
                    <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300
                                    ${activeCategory === cat
                                        ? 'btn-gold'
                                        : 'glass text-gray-400 hover:text-gold hover:border-gold/40'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </ScrollReveal>

                    {/* Photo grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                        {filtered.map((photo, i) => (
                            <ScrollReveal
                                key={photo.id}
                                delay={i * 40}
                                className={`gallery-item ${photo.span} rounded-2xl group cursor-pointer`}
                                style={{ gridRowEnd: photo.span?.includes('row-span-2') ? 'span 3' : undefined }}
                                onClick={() => setLightbox(photo)}
                            >
                                <img
                                    src={photo.thumb}
                                    alt={photo.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                    loading="lazy"
                                />
                                <div className="gallery-overlay rounded-2xl" />
                                <div className="gallery-info absolute bottom-0 left-0 right-0 p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="messi-badge text-[10px]">{photo.category}</span>
                                        <span className="text-xs text-gray-500">{photo.year}</span>
                                    </div>
                                    <p className="text-white font-bold text-sm md:text-base">{photo.title}</p>
                                    <p className="text-gray-400 text-xs mt-1">{photo.caption}</p>
                                </div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Stats strip */}
                    <ScrollReveal className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { value: '8',     label: 'Ballon d\'Or',  icon: '🏆' },
                            { value: '1',     label: 'World Cup',     icon: '🌍' },
                            { value: '4',     label: 'Champions Lg',   icon: '⭐' },
                            { value: '800+', label: 'Career Goals',  icon: '⚽' },
                        ].map(stat => (
                            <div key={stat.label} className="glass-gold rounded-2xl p-5 text-center border-glow">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="font-display text-3xl md:text-4xl gradient-gold">{stat.value}</div>
                                <div className="text-[11px] text-gray-500 tracking-widest mt-2 uppercase font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="lightbox fade-in-scale"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={lightbox.src}
                        alt={lightbox.title}
                        className="fade-in-scale"
                        onClick={e => e.stopPropagation()}
                    />
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-3 flex items-center gap-4 text-center">
                        <span className="text-2xl">🏆</span>
                        <div>
                            <p className="text-white font-bold">{lightbox.title}</p>
                            <p className="text-gray-400 text-sm">{lightbox.caption} · {lightbox.year}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}