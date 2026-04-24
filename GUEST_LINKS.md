# Guest Links Generator

Use this file to track your guests and their personalized links.

## Your Website URL
**Base URL:** `https://your-deployed-site.com`  
*(Update this with your actual deployed URL)*

---

## Guest List & Links

### Group A - Ceremony + Reception (12:30 PM)

| Guest Name | Code | Gender | Personalized Link | Sent? |
|------------|------|--------|-------------------|-------|
| Anna & Marc | anna-marc | p | https://your-site.com/?guest=anna-marc | ☐ |
| Jean-Pierre | jp | m | https://your-site.com/?guest=jp | ☐ |
|  |  | f/m/p | https://your-site.com/?guest= | ☐ |
|  |  | f/m/p | https://your-site.com/?guest= | ☐ |
|  |  | f/m/p | https://your-site.com/?guest= | ☐ |

**Gender:** f=female (Querida/Chère), m=male (Querido/Cher), p=plural (Queridos/Chers)

### Group B - Reception Only (3:00 PM)

| Guest Name | Code | Gender | Personalized Link | Sent? |
|------------|------|--------|-------------------|-------|
| Sophie | sophie | f | https://your-site.com/?guest=sophie | ☐ |
| Elena | elena | f | https://your-site.com/?guest=elena | ☐ |
|  |  | f/m/p | https://your-site.com/?guest= | ☐ |
|  |  | f/m/p | https://your-site.com/?guest= | ☐ |
|  |  | f/m/p | https://your-site.com/?guest= | ☐ |

---

## Generic Link (No Personalization)
For general sharing or social media:
```
https://your-site.com
```
Shows "Amigos y Familia" / "Friends & Family"

---

## Testing Checklist

Before sending links to guests, test each one:

- [ ] Open link in browser
- [ ] Check guest name appears in opening letter
- [ ] Verify correct program schedule (Group A or B)
- [ ] Test language switching (ES → EN → FR)
- [ ] Check RSVP form has pre-filled name
- [ ] Test on mobile and desktop

---

## Message Template

### Spanish
```
¡Hola [Nombre]!

Nos encantaría que nos acompañes en nuestra boda 💕

Aquí está tu invitación personalizada:
[LINK]

Con cariño,
Camila & Amin
```

### English
```
Hi [Name]!

We would love for you to join us at our wedding 💕

Here's your personalized invitation:
[LINK]

With love,
Camila & Amin
```

### French
```
Salut [Nom]!

Nous serions ravis de vous avoir à notre mariage 💕

Voici votre invitation personnalisée:
[LINK]

Avec amour,
Camila & Amin
```

---

## RSVP Tracking

| Guest Name | Link Sent | Opened | RSVP Status | Notes |
|------------|-----------|--------|-------------|-------|
| Anna & Marc | ☐ | ☐ | Pending | |
| Sophie | ☐ | ☐ | Pending | |
| Jean-Pierre | ☐ | ☐ | Pending | |
| Elena | ☐ | ☐ | Pending | |

---

## Quick Link Format

```
https://your-site.com/?guest=GUEST-CODE
```

Replace `GUEST-CODE` with the unique code from `src/constants.ts`
