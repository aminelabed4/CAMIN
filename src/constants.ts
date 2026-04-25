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
  { name: "Viviana Jaramillo & Gonzalo Meza", code: "viviana-gonzalo-meza", group: "A", gender: "p" },
  { name: "Gonzalo Meza Jaramillo", code: "gonzalo-meza-jaramillo", group: "A", gender: "m" },
  { name: "Mateo Meza", code: "mateo-meza", group: "A", gender: "m" },
  { name: "Elisa Jarrin", code: "elisa-jarrin", group: "A", gender: "f" },
  { name: "Jenny Paredes & Gonzalo Meza", code: "jenny-gonzalo-meza", group: "A", gender: "p" },
  { name: "Andrea Meza & Jorge Luis Parra", code: "andrea-jorge-parra", group: "A", gender: "p" },
  { name: "Lucia Ochoa & Eduardo Oviedo", code: "lucia-eduardo", group: "A", gender: "p" },
  { name: "Daniel Jaramillo & Sol Rubio", code: "daniel-sol", group: "A", gender: "p" },
  { name: "Daniela Jaramillo", code: "daniela-jaramillo", group: "A", gender: "f" },
  { name: "Essia Bougdar & Anuar El Abed", code: "essia-anuar", group: "A", gender: "p" },
  { name: "Nesrine El Abed & Elias Negra", code: "nesrine-elias", group: "A", gender: "p" },
  { name: "Cecilia Utreras", code: "cecilia-utreras", group: "A", gender: "f" },
  { name: "Yolanda Hernandez", code: "yolanda-hernandez", group: "A", gender: "f" },
  { name: "Daniela Olmedo", code: "daniela-olmedo", group: "A", gender: "f" },
  { name: "Natalia Paredes", code: "natalia-paredes", group: "A", gender: "f" },
  { name: "Anton Dünnerbier", code: "anton-dunnerbier", group: "A", gender: "m" },
  { name: "Christian Parra", code: "christian-parra", group: "A", gender: "m" },
  { name: "Franchesca Parra", code: "franchesca-parra", group: "A", gender: "f" },
  { name: "María Laura Ochoa", code: "maria-laura-ochoa", group: "A", gender: "f" },
  { name: "Paula Martínez", code: "paula-martinez", group: "A", gender: "f" },

  // ========== GROUP B - Reception Only ==========
  { name: "María Laura Cueva", code: "maria-laura-cueva", group: "B", gender: "f" },
  { name: "Sofía Manosalvas", code: "sofia-manosalvas", group: "B", gender: "f" },
  { name: "María Beatriz Cueva & Jorge Cueva", code: "maria-beatriz-jorge-cueva", group: "B", gender: "p" },
  { name: "Nicolás Abumohor & María José Vinueza", code: "nicolas-maria-jose", group: "B", gender: "p" },
  { name: "Estefanía Abumohor & Julio Álvarez", code: "estefania-julio", group: "B", gender: "p" },
  { name: "Beatriz Ochoa & Cristian Abumohor", code: "beatriz-cristian-abumohor", group: "B", gender: "p" },
  { name: "Valentina Contreras & Matías Estrada", code: "valentina-matias", group: "B", gender: "p" },
  { name: "Francisca Bravo", code: "francisca-bravo", group: "B", gender: "f" },
  { name: "Andrea Thiel & Fernando Bravo", code: "andrea-fernando-bravo", group: "B", gender: "p" },
  { name: "Merce Cardenas, Carlos Olmedo & Rafa Guillén", code: "merce-carlos-rafa", group: "B", gender: "p" },
  { name: "Ariana Salazar", code: "ariana-salazar", group: "B", gender: "f" },
  { name: "Alexa Celi", code: "alexa-celi", group: "B", gender: "f" },
  { name: "Jesús López & Mayra", code: "jesus-mayra", group: "B", gender: "p" },
  { name: "Marco Quilumba & Señora", code: "marco-quilumba", group: "B", gender: "p" },
  { name: "Cristina Vela", code: "cristina-vela", group: "B", gender: "f" },
  { name: "Sebastián Díaz", code: "sebastian-diaz", group: "B", gender: "m" },
  { name: "Hugo Tamayo & Ana López", code: "hugo-ana-lopez", group: "B", gender: "p" },
  { name: "María Agusta Olmedo & Christian Gavilanes", code: "maria-agusta-christian", group: "B", gender: "p" },
  { name: "Jonathan Reyes & Daniela Fontana", code: "jonathan-daniela", group: "B", gender: "p" },
  { name: "Emilia Carrión", code: "emilia-carrion", group: "B", gender: "f" },
  { name: "Alegría Aguirre", code: "alegria-aguirre", group: "B", gender: "f" },
  { name: "Kevin Montero & Veronica Caraguay", code: "kevin-veronica", group: "B", gender: "p" },
  { name: "Jenny Baca & esposo", code: "jenny-baca", group: "B", gender: "p" },
  { name: "Gabriela Valarezo & Andrés Guerrero", code: "gabriela-andres", group: "B", gender: "p" },
  { name: "Daniela Gonzalez & Martin Salerni", code: "daniela-martin", group: "B", gender: "p" },
  { name: "Cynthia Ordóñez", code: "cynthia-ordonez", group: "B", gender: "f" },
  { name: "Cristian Gudiño & Gabriela", code: "cristian-gabriela-gudino", group: "B", gender: "p" },
  { name: "Jaime González", code: "jaime-gonzalez", group: "B", gender: "m" },
  { name: "Ivan Aguirre & Micaela Montalvo", code: "ivan-micaela", group: "B", gender: "p" },
  { name: "Camila Chávez", code: "camila-chavez", group: "B", gender: "f" },
  { name: "Alma Löfgren", code: "alma-lofgren", group: "B", gender: "f" },
  { name: "Yoandra García & Duniel Camejo", code: "yoandra-duniel", group: "B", gender: "p" },
  { name: "Andrea López & Juan Ignacio Gallego", code: "andrea-juan-ignacio", group: "B", gender: "p" },
  { name: "Juliana Naranjo", code: "juliana-naranjo", group: "B", gender: "f" },
  { name: "Cristian Cruz", code: "cristian-cruz", group: "B", gender: "m" },
  { name: "Carlos Tello & Daniela Yokens", code: "carlos-daniela-yokens", group: "B", gender: "p" },
  { name: "Claudia Lasso", code: "claudia-lasso", group: "B", gender: "f" },
  { name: "Cristian Lasprilla & Faby García", code: "cristian-faby", group: "B", gender: "p" },
  { name: "Alejandra Romero & Esposo", code: "alejandra-romero", group: "B", gender: "p" },
  { name: "Ariel Lasprilla", code: "ariel-lasprilla", group: "B", gender: "f" },
  { name: "Carlos Mosquera & Esposa", code: "carlos-mosquera", group: "B", gender: "p" },
  { name: "Christian Ruales & Malena Malo", code: "christian-malena", group: "B", gender: "p" },
  { name: "Pedro Klaic", code: "pedro-klaic", group: "B", gender: "m" },
  { name: "Fernando Romero & Gabriela Herrera", code: "fernando-gabriela-herrera", group: "B", gender: "p" },
  { name: "Edwin Yepez & Karen Sandoval", code: "edwin-karen", group: "B", gender: "p" },
  { name: "Sonia Meza", code: "sonia-meza", group: "B", gender: "f" },
  { name: "Ruth Meza", code: "ruth-meza", group: "B", gender: "f" },
  { name: "Sandra Meza & Rodrigo Serna", code: "sandra-rodrigo", group: "B", gender: "p" },
  { name: "René Meza & Señora", code: "rene-meza", group: "B", gender: "p" },
  { name: "Manolo Meza & María Elena", code: "manolo-maria-elena", group: "B", gender: "p" },
  { name: "Ralf Jaramillo & María Paz Bravo", code: "ralf-maria-paz", group: "B", gender: "p" },
  { name: "Marcelo & Paola Hidalgo", code: "marcelo-paola", group: "B", gender: "p" },
  { name: "Alex Zabala & Lenin Martínez", code: "alex-lenin", group: "B", gender: "p" },
  { name: "Ana Rosa Dávalos & Freddy López", code: "ana-rosa-freddy", group: "B", gender: "p" },
  { name: "Daniela López", code: "daniela-lopez", group: "B", gender: "f" },
  { name: "Ana María López", code: "ana-maria-lopez", group: "B", gender: "f" },
  { name: "Fernanda Carvajal & esposo", code: "fernanda-carvajal", group: "B", gender: "p" },
  { name: "Javier Dávila & Claudia González", code: "javier-claudia", group: "B", gender: "p" },
  { name: "Alexander Chala", code: "alexander-chala", group: "B", gender: "m" },
  { name: "Diego Bedon & Señora", code: "diego-bedon", group: "B", gender: "p" },
  { name: "Karina Harbst", code: "karina-harbst", group: "B", gender: "f" },
  { name: "Juan Oviedo", code: "juan-oviedo", group: "B", gender: "m" },
  { name: "Mary Fürer", code: "mary-furer", group: "B", gender: "f" },
  { name: "Hassan Zeroual & his wife", code: "hassan-zeroual", group: "B", gender: "p" },
  { name: "Patrick Wagner", code: "patrick-wagner", group: "B", gender: "m" },
  { name: "Margulan Otanuly", code: "margulan-otanuly", group: "B", gender: "m" },
  { name: "Mohammed & Amina", code: "mohammed-amina", group: "B", gender: "p" },
  { name: "Michelle Oviedo", code: "michelle-oviedo", group: "B", gender: "f" },
  { name: "Misheel", code: "misheel", group: "B", gender: "f" },
  { name: "Gustavo Egüez & Gabriela Carrión", code: "gustavo-gabriela-carrion", group: "B", gender: "p" },
  { name: "Lía Galarza", code: "lia-galarza", group: "B", gender: "f" },
  { name: "Gabriela Bedoya", code: "gabriela-bedoya", group: "B", gender: "f" },
  { name: "Julio Palacios", code: "julio-palacios", group: "B", gender: "m" },
  { name: "François Abumohor", code: "francois-abumohor", group: "B", gender: "m" },
  { name: "Sisa Cueva", code: "sisa-cueva", group: "B", gender: "f" },
  { name: "Sara Cueva", code: "sara-cueva", group: "B", gender: "f" },
  { name: "Pau Abumohor", code: "pau-abumohor", group: "B", gender: "f" },
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
      date: "August 29, 2026 • Quito, Ecuador",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      readMore: "Read more"
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
      note: "Note: White is reserved for the bride. Light blue is reserved for the groom."
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
      dietaryPlaceholder: "If you have any allergies or dietary restrictions, please let us know here",
      submit: "Send Response",
      thankYou: "Thank you for your response!",
      thankYouPlural: "Thank you for your response!",
      thankYouPersonal: "Thank you, {name}!",
      addToCalendar: "Add to Calendar"
    },
    faq: {
      title: "Details & FAQ",
      questions: [
        { q: "Are children invited?", a: "While we love the little ones, we have decided that our wedding and reception will be an adults-only event. We hope you understand and enjoy a night off!" },
        { q: "Can I bring someone else?", a: "Due to venue capacity limitations, we can only accommodate guests formally named on your invitation." },
        { q: "Is there parking?", a: "Yes, there is ample free parking available at the venue." }
      ]
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
      date: "29 août 2026 • Quito, Équateur",
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes",
      readMore: "Lire la suite"
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
      note: "Note : Le blanc est réservé à la mariée. Le bleu clair est réservé au marié."
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
      dietaryPlaceholder: "Si vous avez des allergies ou des restrictions alimentaires, veuillez nous en informer ici",
      submit: "Envoyer la réponse",
      thankYou: "Merci pour ta réponse !",
      thankYouPlural: "Merci pour votre réponse !",
      thankYouPersonal: "Merci, {name} !",
      addToCalendar: "Ajouter au calendrier"
    },
    faq: {
      title: "Détails & FAQ",
      questions: [
        { q: "Les enfants sont-ils invités ?", a: "Bien que nous adorions les plus jeunes, nous avons décidé que notre mariage et notre réception seraient un événement réservé aux adultes. Nous espérons que vous comprendrez et profiterez d'une soirée libre !" },
        { q: "Puis-je amener quelqu'un d'autre ?", a: "En raison des limitations de capacité du lieu, nous ne pouvons accueillir que les invités formellement nommés sur votre invitation." },
        { q: "Y a-t-il un parking ?", a: "Oui, un grand parking gratuit est disponible sur place." }
      ]
    }
  },
  es: {
    letter: {
      dear: "Queridos",
      message: "Estamos encantados de invitarlos a celebrar nuestro día especial en el corazón de Ecuador. Su presencia significaría mucho para nosotros.",
      open: "Abrir Invitación"
    },
    hero: {
      countdown: "Cuenta atrás para nuestro gran día",
      date: "29 de agosto de 2026 • Quito, Ecuador",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
      readMore: "Leer más"
    },
    story: {
      title: "Nuestra Historia",
      content: "Nos conocimos a finales de 2020, ambos comenzando de nuevo en Bremen—Camila llegando desde Ecuador y Amin iniciando un nuevo capítulo en una ciudad diferente. Lo que comenzó como dos personas lejos de casa se convirtió en algo real—una conexión que se sentía como hogar en sí misma.\n\nHemos sido el apoyo del otro en los momentos difíciles y celebrado los más felices, desde las graduaciones de Amin hasta el día que decidimos crecer nuestra familia adoptando a Zina, nuestra gata rescatada.\n\nEn enero de 2026, con una certeza que sentíamos desde hace tiempo, Amin le pidió a Camila que se casara con él. No fue una pregunta simple—pero fue la respuesta más fácil: sí, para el resto de nuestras vidas."
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
      description: "Traje Formal. Sugerimos atuendos elegantes adecuados para una celebración en la tarde.",
      note: "Nota: El blanco está reservado para la novia. El azul claro está reservado para el novio."
    },
    gift: {
      title: "Regalo para nuestro viaje",
      message: "Su presencia es el mejor regalo. Sin embargo, si deseas darnos un regalo de boda, podrías contribuir a nuestro viaje de luna de miel. Estaríamos profundamente agradecidos.",
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
      dietaryPlaceholder: "Si tienes alguna alergia o restricción alimentaria, por favor indícala aquí",
      submit: "Enviar respuesta",
      thankYou: "¡Gracias por tu respuesta!",
      thankYouPlural: "¡Gracias por su respuesta!",
      thankYouPersonal: "¡Gracias, {name}!",
      addToCalendar: "Añadir al calendario"
    },
    faq: {
      title: "Detalles y Preguntas Frecuentes",
      questions: [
        { q: "¿Están invitados los niños?", a: "Aunque amamos a los más pequeños, hemos decidido que nuestra boda y recepción sean un evento solo para adultos. ¡Esperamos que lo entiendan y disfruten de una noche libre!" },
        { q: "¿Puedo llevar a alguien más?", a: "Debido a las limitaciones de capacidad del lugar, solo podemos acomodar a los invitados nombrados formalmente en su invitación." },
        { q: "¿Hay estacionamiento?", a: "Sí, hay un amplio estacionamiento gratuito disponible en el lugar." }
      ]
    }
  }
};
