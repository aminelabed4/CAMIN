/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, ReactNode, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  Music, 
  Utensils, 
  Gift, 
  CheckCircle2, 
  Copy, 
  ChevronDown,
  Globe,
  Camera
} from 'lucide-react';
import { GUESTS, TRANSLATIONS, getGreeting } from './constants';
import { Guest, Language } from './types';

// --- Components ---

const LanguageToggle = ({ current, onChange }: { current: Language, onChange: (l: Language) => void }) => (
  <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white/80 backdrop-blur-sm p-1 rounded-full border border-med-blue/20 shadow-sm">
    {(['es', 'en', 'fr'] as Language[]).map((lang) => (
      <button
        key={lang}
        onClick={() => onChange(lang)}
        className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
          current === lang ? 'bg-med-blue text-white shadow-md' : 'text-med-blue hover:bg-med-blue/10'
        }`}
      >
        {lang.toUpperCase()}
      </button>
    ))}
  </div>
);

const Countdown = ({ lang }: { lang: Language }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const t = TRANSLATIONS[lang].hero;

  useEffect(() => {
    const targetDate = new Date('2026-08-29T12:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-8">
      {[
        { label: t.days, value: timeLeft.days },
        { label: t.hours, value: timeLeft.hours },
        { label: t.minutes, value: timeLeft.minutes },
        { label: t.seconds, value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-5xl font-serif font-light text-med-blue">{item.value.toString().padStart(2, '0')}</div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-soft-blue mt-1 font-sans">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

const Section = ({ title, children, id, className = "" }: { title?: string, children: ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-20 px-6 max-w-4xl mx-auto relative ${className}`}>
    {title && (
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-med-blue mb-4">{title}</h2>
        <div className="w-24 h-px bg-accent-blue mx-auto opacity-50" />
      </div>
    )}
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`bg-white p-8 md:p-12 shadow-xl rounded-sm border border-soft-blue/10 paper-texture relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 tile-pattern pointer-events-none" />
    <div className="relative z-10">{children}</div>
    <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none">
      <MonogramBadge className="scale-150" />
    </div>
  </div>
);

const CallaLily = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none opacity-40 ${className}`}>
    <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 150C60 150 40 120 40 80C40 40 60 10 60 10C60 10 80 40 80 80C80 120 60 150 60 150Z" fill="white" stroke="#A7C7E7" strokeWidth="0.5"/>
      <path d="M60 140C60 140 50 110 50 80C50 50 60 20 60 20C60 20 70 50 70 80C70 110 60 140 60 140Z" fill="#F4F7FB" opacity="0.5"/>
      <circle cx="60" cy="80" r="2" fill="#FFD700" opacity="0.6"/>
    </svg>
  </div>
);

const MonogramBadge = ({ className = "" }: { className?: string }) => (
  <div className={`w-20 h-20 rounded-full border border-med-blue/20 flex items-center justify-center font-serif text-med-blue text-2xl tracking-tighter bg-white shadow-sm ${className}`}>
    <span className="relative -left-1">C</span>
    <span className="text-soft-blue opacity-50">&</span>
    <span className="relative -right-1">A</span>
  </div>
);

const CopyButton = ({ text, label, copiedLabel }: { text: string, label: string, copiedLabel: string }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="flex items-center gap-2 text-soft-blue hover:text-med-blue transition-colors text-xs uppercase tracking-widest font-sans"
    >
      {copied ? (
        <>
          <CheckCircle2 size={14} className="text-green-500" />
          <span className="text-green-600">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

// --- Main App ---

export default function App() {
  const [step, setStep] = useState<'closed' | 'opening' | 'opened' | 'content'>('closed');
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('wedding-lang');
    return (saved as Language) || 'es';
  });
  const [guest, setGuest] = useState<Guest | null>(null);
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('guest');
    if (code) {
      const found = GUESTS.find(g => g.code === code);
      if (found) setGuest(found);
    }
    localStorage.setItem('wedding-lang', lang);

    // Update page title based on language
    const titles = {
      es: 'CAMIN Invitación de Boda',
      en: 'CAMIN Wedding Invitation',
      fr: 'CAMIN Invitation de Mariage'
    };
    document.title = titles[lang];
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang];
  const guestName = guest ? guest.name : (lang === 'es' ? "Amigos y Familia" : lang === 'en' ? "Friends & Family" : "Amis & Famille");

  // Get gendered greeting based on guest gender and language
  const greeting = guest ? getGreeting(lang, guest.gender) : t.letter.dear;

  const handleOpen = () => {
    setStep('opening');
    setTimeout(() => setStep('opened'), 1500);
    setTimeout(() => setStep('content'), 7000);
  };

  const handleRsvp = (e: FormEvent) => {
    e.preventDefault();
    setRsvpStatus('submitting');
    setTimeout(() => setRsvpStatus('success'), 1500);
  };

  if (step !== 'content') {
    return (
      <div className="fixed inset-0 hero-bg flex items-center justify-center overflow-hidden p-4 z-[1000]">
        <div className="absolute inset-0 bg-overlay-dim backdrop-blur-[2px]" />
        <LanguageToggle current={lang} onChange={setLang} />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-[85%] max-w-[480px] sm:max-w-[520px] envelope-container flex items-center justify-center z-20"
        >
          {/* Envelope Body (Real Image) */}
          <motion.div 
            className="absolute inset-0 z-10 flex items-center justify-center"
            animate={step === 'opened' ? { y: 300, opacity: 0, scale: 0.8 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/images/envelope.jpg"
                alt="Envelope"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              
              {/* Wax Seal */}
              <motion.div
                className="absolute top-[58%] sm:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer w-[17%]"
                animate={step !== 'closed' ? { y: -120, opacity: 0, scale: 1.3 } : {}}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleOpen}
              >
                <img
                  src="/images/logo.png"
                  alt="Wax Seal"
                  className="w-full h-auto object-contain wax-seal-shadow rounded-full"
                />
              </motion.div>

              {/* Address Label Overlay */}
              <motion.div
                className="absolute top-[10%] sm:top-[-10%] left-1/2 -translate-x-1/2 text-center z-40 w-full"
                animate={step !== 'closed' ? { opacity: 0 } : {}}
              >
                <p className="font-serif italic text-med-blue text-lg md:text-xl drop-shadow-sm tracking-[0.05em]">
                  {greeting} {guestName}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* The Letter that slides out */}
          <AnimatePresence>
            {(step === 'opening' || step === 'opened') && (
              <motion.div
                initial={{ y: 50, scale: 0.9, opacity: 0 }}
                animate={{ y: -30, scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-2 sm:inset-0 sm:-translate-y-8 z-40 bg-white p-6 sm:p-8 md:p-12 shadow-2xl rounded-sm paper-texture flex flex-col items-center justify-center text-center border border-soft-blue/10"
              >
                <div className="absolute inset-0 tile-pattern opacity-5 pointer-events-none" />
                <Heart className="text-med-blue w-10 h-10 mb-6 opacity-40" />
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-3xl md:text-4xl font-serif text-med-blue mb-4"
                >
                  {greeting} {guestName}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-lg md:text-xl text-soft-blue leading-relaxed max-w-md italic font-serif"
                >
                  {t.letter.message}
                </motion.p>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 1.7, duration: 0.8 }}
                  className="h-px bg-accent-blue mt-8 opacity-30"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen main-bg selection:bg-accent-blue/30 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-overlay-white pointer-events-none" />
      <div className="relative z-10">
        <LanguageToggle current={lang} onChange={setLang} />
        <header className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-med-blue opacity-30" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-soft-blue">Save the Date</span>
            <div className="w-12 h-px bg-med-blue opacity-30" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-med-blue mb-4">Camila & Amin</h1>
          <p className="text-xl md:text-2xl font-serif italic text-soft-blue">August 29, 2026 • Quito, Ecuador</p>
          <Countdown lang={lang} />
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-med-blue opacity-30"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </header>

      {/* Our Story */}
      <Section title={t.story.title} id="story">
        <CallaLily className="-top-10 -left-10 rotate-12 opacity-20" />
        <Card className="text-center">
          <div className="text-base md:text-lg leading-relaxed text-soft-blue font-serif max-w-2xl mx-auto text-left space-y-4">
            {t.story.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-sm shadow-lg aspect-[4/5]">
              <img
                src="/images/paris.jpeg"
                alt="Paris"
                className="w-full h-full object-cover transition-all duration-700"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <div className="relative overflow-hidden rounded-sm shadow-lg aspect-[4/5] mt-8">
              <img
                src="/images/proposal.jpg"
                alt="Proposal"
                className="w-full h-full object-cover transition-all duration-700"
                style={{ objectPosition: '35% center' }}
              />
            </div>
          </div>
        </Card>
      </Section>

      {/* Program */}
      <Section title={t.program.title} id="program">
        <CallaLily className="top-1/2 -right-10 -rotate-45 opacity-20" />
        <div className="space-y-6">
          {(guest?.group === 'B' ? [
            { time: "15:00", event: t.program.firstDance, icon: Music },
            { time: "15:30", event: t.program.party, icon: Heart },
            { time: "17:00", event: t.program.snack, icon: Utensils },
            { time: "18:00", event: t.program.crazyHour, icon: Music },
          ] : [
            { time: "12:30", event: t.program.ceremony, icon: Heart },
            { time: "13:30", event: t.program.catering, icon: Utensils },
            { time: "15:00", event: t.program.firstDance, icon: Music },
            { time: "15:30", event: t.program.party, icon: Music },
          ]).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 rounded-sm border-l-2 border-med-blue shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              style={{
                backgroundImage: 'url(/images/schedule.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
              <div className="text-2xl font-serif text-med-blue w-20 relative z-10">{item.time}</div>
              <div className="w-px h-8 bg-accent-blue opacity-30 relative z-10" />
              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-serif text-ink">{item.event}</h3>
              </div>
              <item.icon className="text-soft-blue opacity-40 relative z-10" size={20} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Place */}
      <Section title={t.place.title} id="place">
        <div
          className="p-8 md:p-12 shadow-xl rounded-sm border border-soft-blue/10 relative overflow-hidden text-center"
          style={{
            backgroundImage: 'url(/images/schedule.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10">
            <MapPin className="mx-auto text-med-blue mb-6 opacity-50" size={40} />
            <h3 className="text-2xl font-serif text-ink mb-2">L'Hacienda Ecuestre</h3>
            <p className="text-soft-blue mb-8 font-serif italic">{t.place.address}</p>
          </div>
          <div className="aspect-video bg-accent-blue/10 rounded-sm overflow-hidden mb-8 relative z-10">
             <img
              src="/images/hacienda.png"
              alt="L'Hacienda Ecuestre"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <a
                 href="https://maps.app.goo.gl/3aixR56aD6SBwfi66"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-6 py-2 bg-white/90 backdrop-blur-sm text-med-blue border border-med-blue/20 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-med-blue hover:text-white transition-all"
               >
                {t.place.viewMap}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Dress Code */}
      <Section title={t.dressCode.title} id="dresscode">
        <Card className="text-center">
          <p className="text-lg text-soft-blue mb-8 font-serif italic">{t.dressCode.description}</p>
          <div className="flex justify-center gap-4 mb-8">
            {['#FFFFFF', '#A7C7E7', '#6FA3D2', '#2F5D8C', '#F4F7FB'].map((color) => (
              <div 
                key={color} 
                className="w-10 h-10 rounded-full shadow-inner border border-black/5"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-sm text-med-blue/60 font-sans uppercase tracking-widest">{t.dressCode.note}</p>
        </Card>
      </Section>

      {/* Honeymoon */}
      <Section title={t.gift.title} id="gift">
        <Card className="text-center">
          <Gift className="mx-auto text-med-blue mb-6 opacity-50" size={40} />
          <p className="text-lg text-soft-blue mb-10 font-serif italic max-w-md mx-auto">{t.gift.message}</p>
          
          <div className="space-y-6 max-w-md mx-auto">
            <div className="p-4 bg-paper/50 rounded-sm border border-soft-blue/10 text-left">
              <p className="text-[10px] uppercase tracking-widest text-soft-blue mb-1 font-sans">Germany (Sparkasse)</p>
              <p className="font-serif text-ink mb-1">Amin El Abed</p>
              <div className="space-y-2">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-soft-blue/70 font-sans">BIC</p>
                  <code className="text-xs sm:text-sm font-mono text-med-blue">SBREDE22XXX</code>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] uppercase tracking-wider text-soft-blue/70 font-sans">IBAN</p>
                    <code className="text-[10px] sm:text-sm font-mono text-med-blue block whitespace-nowrap overflow-hidden text-ellipsis">DE53 2905 0101 0083 6691 50</code>
                  </div>
                  <div className="flex-shrink-0">
                    <CopyButton text="DE53290501010083669150" label={t.gift.copy} copiedLabel={t.gift.copied} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-paper/50 rounded-sm border border-soft-blue/10 text-left">
              <p className="text-[10px] uppercase tracking-widest text-soft-blue mb-1 font-sans">Ecuador (Banco Pichincha)</p>
              <p className="font-serif text-ink mb-1">Camila Meza</p>
              <div className="space-y-2">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-soft-blue/70 font-sans">Cuenta de ahorro</p>
                  <div className="flex items-center justify-between mt-1">
                    <code className="text-xs font-mono text-med-blue">2202037549</code>
                    <CopyButton text="2202037549" label={t.gift.copy} copiedLabel={t.gift.copied} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* RSVP */}
      <Section title={t.rsvp.title} id="rsvp">
        <Card>
          <AnimatePresence mode="wait">
            {rsvpStatus === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="mx-auto text-green-500 mb-6" size={64} />
                <h3 className="text-3xl font-serif text-med-blue mb-4">{t.rsvp.thankYou}</h3>
                <Heart className="mx-auto text-med-blue opacity-30" />
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-6" 
                onSubmit={handleRsvp}
              >
                <div>
                  <label className="block text-xs uppercase tracking-widest text-soft-blue mb-2 font-sans">{t.rsvp.name}</label>
                  <input 
                    type="text" 
                    required
                    defaultValue={guestName}
                    className="w-full bg-paper/30 border-b border-soft-blue/30 py-2 px-0 focus:outline-none focus:border-med-blue transition-colors font-serif text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-soft-blue mb-2 font-sans">{t.rsvp.attendance}</label>
                  <select className="w-full bg-paper/30 border-b border-soft-blue/30 py-2 px-0 focus:outline-none focus:border-med-blue transition-colors font-serif text-lg appearance-none">
                    <option>{t.rsvp.attending}</option>
                    <option>{t.rsvp.notAttending}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-soft-blue mb-2 font-sans">{t.rsvp.dietary}</label>
                  <textarea 
                    rows={2}
                    className="w-full bg-paper/30 border-b border-soft-blue/30 py-2 px-0 focus:outline-none focus:border-med-blue transition-colors font-serif text-lg resize-none"
                  />
                </div>

                <button 
                  disabled={rsvpStatus === 'submitting'}
                  className="w-full py-4 bg-med-blue text-white rounded-full font-sans text-sm tracking-widest uppercase hover:bg-soft-blue transition-colors shadow-lg mt-8 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {rsvpStatus === 'submitting' ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : t.rsvp.submit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Card>
      </Section>

      {/* FAQ */}
      <Section title={t.faq.title} id="faq">
        <div className="space-y-4">
          {[
            { q: "Is there a shuttle?", a: "Yes, shuttles will run from Oia center starting at 11:30 AM." },
            { q: "Can I bring a plus one?", a: "Please refer to your invitation for the number of seats reserved in your honor." },
            { q: "What's the weather like?", a: "Santorini in June is warm and sunny, typically around 25-28°C." }
          ].map((item, i) => (
            <details key={i} className="group bg-white/50 backdrop-blur-sm border border-soft-blue/10 rounded-sm overflow-hidden">
              <summary className="p-6 flex items-center justify-between cursor-pointer list-none">
                <span className="font-serif text-xl text-med-blue">{item.q}</span>
                <ChevronDown size={20} className="text-soft-blue group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-soft-blue font-serif italic">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-soft-blue/10">
        <Heart className="mx-auto text-med-blue mb-4 opacity-30" size={24} />
        <p className="font-serif text-soft-blue italic">C & A • 2026</p>
      </footer>
      </div>
    </div>
  );
}
