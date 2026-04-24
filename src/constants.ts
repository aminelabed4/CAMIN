import { Guest, Translation, Language } from './types';

/**
 * ============================================================================
 * ADMIN SECTION - GUEST LIST
 * ============================================================================
 *
 * HOW TO ADD GUESTS:
 * 1. Copy a line below
 * 2. Change the name, code, group, and gender
 * 3. Share link: https://your-site.com/?guest=CODE
 *
 * GROUPS:
 * - Group "A" = Ceremony + Reception (12:30 - 18:00)
 *   Schedule: Ceremony → Catering → First Dance → Party
 *
 * - Group "B" = Reception Only (15:00 - 18:00)
 *   Schedule: First Dance → Party → Snack → Crazy Hour
 *
 * GENDER (for proper Spanish/French grammar):
 * - "f" = Female (Querida / Chère)
 * - "m" = Male (Querido / Cher)
 * - "p" = Plural/Couple (Queridos / Chers)
 *
 * CODE RULES:
 * - Use lowercase letters only
 * - Use hyphens instead of spaces (e.g., "john-sarah")
 * - Make it unique for each guest
 * - Keep it simple and memorable
 *
 * EXAMPLES:
 * { name: "María García", code: "maria", group: "A", gender: "f" },
 * { name: "Pedro López", code: "pedro", group: "B", gender: "m" },
 * { name: "Ana & Carlos", code: "ana-carlos", group: "A", gender: "p" },
 *
 * See QUICK_START.md for detailed instructions
 * ============================================================================
 */

export const GUESTS: Guest[] = [
  // ========== GROUP A - Ceremony + Reception ==========
  { name: "Anna & Marc", code: "anna-marc", group: "A", gender: "p" },
  { name: "Jean-Pierre", code: "jp", group: "A", gender: "m" },

  // ========== GROUP B - Reception Only ==========
  { name: "Sophie", code: "sophie", group: "B", gender: "f" },
  { name: "Elena", code: "elena", group: "B", gender: "f" },

  // ========== ADD YOUR GUESTS BELOW ==========
  // Copy and paste this line, then edit:
  // { name: "Guest Name", code: "guest-code", group: "A", gender: "f/m/p" },

];

// Helper function to get gendered greeting
export const getGreeting = (lang: Language, gender: 'f' | 'm' | 'p' | undefined): string => {
  if (lang === 'es') {
    if (gender === 'f') return 'Querida';
    if (gender === 'm') return 'Querido';
    return 'Queridos'; // plural or default
  }
  if (lang === 'fr') {
    if (gender === 'f') return 'Chère';
    if (gender === 'm') return 'Cher';
    return 'Chers'; // plural or default
  }
  return 'Dear'; // English doesn't change
};

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    letter: {
      dear: "Dear",
      message: "We are overjoyed to invite you to celebrate our special day in the heart of Ecuador. Your presence would mean the world to us.",
      open: "Open Invitation"
    },
    hero: {
      countdown: "Counting down to our big day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds"
    },
    story: {
      title: "Our Story",
      content: "We met at the end of 2020, both starting over in Bremen—Camila arriving from Ecuador and Amin beginning a new chapter in a different city. What began as two people far from home grew into something real—a connection that felt like home in itself.\n\nWe've been each other's support through the difficult moments and celebrated the happiest ones, from Amin's graduations to the day we adopted Zina, our rescue cat.\n\nIn January 2026, with a certainty we had long felt, Amin asked Camila to marry him. It wasn't a simple question—but it was the easiest answer: yes, for the rest of our lives."
    },
    program: {
      title: "Your Schedule",
      ceremony: "Ceremony",
      catering: "Catering",
      firstDance: "First Dance",
      party: "Dance Party",
      snack: "Tentempié",
      crazyHour: "Crazy Hour"
    },
    place: {
      title: "The Venue",
      address: "L'Hacienda Ecuestre, Pifo, Ecuador",
      viewMap: "View on Map"
    },
    dressCode: {
      title: "Dress Code",
      description: "Formal Attire. We suggest elegant outfits suitable for an evening celebration in the Ecuadorian highlands.",
      note: "Note: White is reserved for the bride."
    },
    gift: {
      title: "Gift for Our Journey",
      message: "Your presence is the greatest gift. However, if you wish to contribute to our honeymoon journey, we would be deeply grateful.",
      copy: "Copy",
      copied: "Copied!"
    },
    rsvp: {
      title: "RSVP",
      name: "Your Name",
      attendance: "Will you attend?",
      attending: "Yes, I'll be there",
      notAttending: "Regretfully, I can't make it",
      guests: "Number of Guests",
      dietary: "Dietary Restrictions",
      submit: "Send Response",
      thankYou: "Thank you for your response!"
    },
    faq: {
      title: "Details & FAQ"
    }
  },
  fr: {
    letter: {
      dear: "Chers",
      message: "Nous sommes ravis de vous inviter à célébrer notre journée spéciale au cœur de l'Équateur. Votre présence compterait énormément pour nous.",
      open: "Ouvrir l'invitation"
    },
    hero: {
      countdown: "Compte à rebours jusqu'au grand jour",
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes"
    },
    story: {
      title: "Notre Histoire",
      content: "Nous nous sommes rencontrés fin 2020, tous deux recommençant à zéro à Brême—Camila arrivant d'Équateur et Amin commençant un nouveau chapitre dans une autre ville. Ce qui a commencé comme deux personnes loin de chez elles est devenu quelque chose de réel—une connexion qui ressemblait à un foyer en elle-même.\n\nNous avons été le soutien l'un de l'autre dans les moments difficiles et avons célébré les plus heureux, des diplômes d'Amin au jour où nous avons adopté Zina, notre chatte rescapée.\n\nEn janvier 2026, avec une certitude que nous ressentions depuis longtemps, Amin a demandé Camila en mariage. Ce n'était pas une question simple—mais c'était la réponse la plus facile : oui, pour le reste de nos vies."
    },
    program: {
      title: "Votre Programme",
      ceremony: "Cérémonie",
      catering: "Cocktail & Dîner",
      firstDance: "Ouverture de bal",
      party: "Soirée Dansante",
      snack: "En-cas",
      crazyHour: "Heure de Folie"
    },
    place: {
      title: "Le Lieu",
      address: "L'Hacienda Ecuestre, Pifo, Équateur",
      viewMap: "Voir sur la carte"
    },
    dressCode: {
      title: "Code Vestimentaire",
      description: "Tenue de soirée. Nous suggérons des tenues élégantes adaptées à une célébration en soirée dans les hautes terres équatoriennes.",
      note: "Note : Le blanc est réservé à la mariée."
    },
    gift: {
      title: "Cadeau pour notre voyage",
      message: "Votre présence est le plus beau des cadeaux. Cependant, si vous souhaitez contribuer à notre voyage de noces, nous vous en serions profondément reconnaissants.",
      copy: "Copier",
      copied: "Copié !"
    },
    rsvp: {
      title: "Réponse",
      name: "Votre Nom",
      attendance: "Serez-vous présent ?",
      attending: "Oui, je serai là",
      notAttending: "Malheureusement, je ne pourrai pas venir",
      guests: "Nombre d'invités",
      dietary: "Restrictions alimentaires",
      submit: "Envoyer la réponse",
      thankYou: "Merci pour votre réponse !"
    },
    faq: {
      title: "Détails & FAQ"
    }
  },
  es: {
    letter: {
      dear: "Queridos",
      message: "Estamos encantados de invitaros a celebrar nuestro día especial en el corazón de Ecuador. Vuestra presencia significaría mucho para nosotros.",
      open: "Abrir Invitación"
    },
    hero: {
      countdown: "Cuenta atrás para nuestro gran día",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos"
    },
    story: {
      title: "Nuestra Historia",
      content: "Nos conocimos a finales de 2020, ambos comenzando de nuevo en Bremen—Camila llegando desde Ecuador y Amin iniciando un nuevo capítulo en una ciudad diferente. Lo que comenzó como dos personas lejos de casa se convirtió en algo real—una conexión que se sentía como hogar en sí misma.\n\nHemos sido el apoyo del otro en los momentos difíciles y celebrado los más felices, desde las graduaciones de Amin hasta el día en que adoptamos a Zina, nuestra gata rescatada.\n\nEn enero de 2026, con una certeza que sentíamos desde hace tiempo, Amin le pidió a Camila que se casara con él. No fue una pregunta simple—pero fue la respuesta más fácil: sí, para el resto de nuestras vidas."
    },
    program: {
      title: "Tu Horario",
      ceremony: "Ceremonia",
      catering: "Banquete",
      firstDance: "Primer Baile",
      party: "Fiesta",
      snack: "Tentempié",
      crazyHour: "Hora Loca"
    },
    place: {
      title: "El Lugar",
      address: "L'Hacienda Ecuestre, Pifo, Ecuador",
      viewMap: "Ver en el mapa"
    },
    dressCode: {
      title: "Código de Vestimenta",
      description: "Traje Formal. Sugerimos atuendos elegantes adecuados para una celebración nocturna en las tierras altas ecuatorianas.",
      note: "Nota: El blanco está reservado para la novia."
    },
    gift: {
      title: "Regalo para nuestro viaje",
      message: "Vuestra presencia es el mejor regalo. Sin embargo, si deseáis contribuir a nuestro viaje de luna de miel, os estaríamos profundamente agradecidos.",
      copy: "Copiar",
      copied: "¡Copiado!"
    },
    rsvp: {
      title: "Confirmación",
      name: "Tu Nombre",
      attendance: "¿Asistirás?",
      attending: "Sí, allí estaré",
      notAttending: "Lamentablemente, no puedo ir",
      guests: "Número de invitados",
      dietary: "Restricciones alimentarias",
      submit: "Enviar respuesta",
      thankYou: "¡Gracias por tu respuesta!"
    },
    faq: {
      title: "Detalles y Preguntas Frecuentes"
    }
  }
};
