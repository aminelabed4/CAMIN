# Quick Start - Adding Guests

## 5-Minute Setup Guide

### Step 1: Open the Guest List
Open file: `src/constants.ts`

### Step 2: Find the GUESTS Array
Look for this section near the top:

```typescript
export const GUESTS: Guest[] = [
  { name: "Anna & Marc", code: "anna-marc", group: "A" },
  { name: "Sophie", code: "sophie", group: "B" },
  // Add your guests here
];
```

### Step 3: Add Your Guests

**Format:**
```typescript
{ name: "Display Name", code: "url-code", group: "A", gender: "f/m/p" },
```

**Group A** = Ceremony + Reception (starts 12:30)  
**Group B** = Reception only (starts 15:00)

**Gender** (for Spanish/French grammar):
- **"f"** = Female (Querida / Chère)
- **"m"** = Male (Querido / Cher)
- **"p"** = Plural/Couple (Queridos / Chers)

**Example:**
```typescript
export const GUESTS: Guest[] = [
  // Ceremony guests
  { name: "María García", code: "maria", group: "A", gender: "f" },
  { name: "John & Sarah", code: "john-sarah", group: "A", gender: "p" },
  
  // Reception only guests  
  { name: "Carlos Mendez", code: "carlos", group: "B", gender: "m" },
  { name: "Sophie Dubois", code: "sophie", group: "B", gender: "f" },
];
```

### Step 4: Generate Links

For each guest, create a link:
```
YOUR-WEBSITE-URL/?guest=GUEST-CODE
```

**Examples:**
- `https://your-site.com/?guest=maria`
- `https://your-site.com/?guest=john-sarah`
- `https://your-site.com/?guest=carlos`

### Step 5: Test Locally

Before sending links, test them:
```
http://localhost:3000/?guest=maria
http://localhost:3000/?guest=john-sarah
```

Check:
- ✅ Correct name appears in the letter
- ✅ Correct schedule shows (Group A or B)
- ✅ Works in all 3 languages

### Step 6: Deploy

After adding all guests:
```bash
npm run build
```

Then deploy to your hosting service.

---

## Quick Reference

**Code Rules:**
- ✅ lowercase
- ✅ hyphens-for-spaces
- ✅ unique per guest
- ❌ no spaces or special characters

**Groups:**
- **A** = Full event (ceremony at 12:30)
- **B** = Reception only (starts at 15:00)

**Gender:**
- **f** = Female (Querida/Chère)
- **m** = Male (Querido/Cher)
- **p** = Plural (Queridos/Chers)

---

## Need More Details?

See `ADMIN_GUIDE.md` for complete documentation.
