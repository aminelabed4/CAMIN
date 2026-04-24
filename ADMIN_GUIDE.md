# Admin Guide - Personalized Wedding Invitation System

## Overview
This wedding invitation supports **personalized invitations** for each guest with **different program schedules** based on their group assignment.

---

## How It Works

### 1. Guest Management

**Location:** `src/constants.ts`

Each guest has:
- **Name**: Display name (e.g., "Anna & Marc", "Sophie")
- **Code**: Unique URL-friendly identifier (e.g., "anna-marc", "sophie")
- **Group**: Either "A" or "B" (determines which program they see)
- **Gender**: "f" (female), "m" (male), or "p" (plural) - for Spanish/French grammar

#### Group Differences:

**Group A** (Full Event - Ceremony + Reception):
- 12:30 - Ceremony
- 13:30 - Catering
- 15:00 - First Dance
- 15:30 - Dance Party

**Group B** (Reception Only):
- 15:00 - First Dance
- 15:30 - Dance Party
- 17:00 - Tentempié (Snack)
- 18:00 - Crazy Hour

---

## Adding Guests

### Step 1: Open `src/constants.ts`

Find the `GUESTS` array at the top of the file.

### Step 2: Add Guest Entry

```typescript
{ name: "Guest Full Name", code: "unique-code", group: "A", gender: "f/m/p" }
```

**Gender Options:**
- **"f"** = Female → Spanish: "Querida", French: "Chère"
- **"m"** = Male → Spanish: "Querido", French: "Cher"
- **"p"** = Plural/Couple → Spanish: "Queridos", French: "Chers"

**Examples:**
```typescript
// Group A (Ceremony + Reception)
{ name: "María García", code: "maria-garcia", group: "A", gender: "f" },
{ name: "John & Sarah Smith", code: "john-sarah", group: "A", gender: "p" },

// Group B (Reception Only)
{ name: "Carlos Mendez", code: "carlos", group: "B", gender: "m" },
{ name: "The Johnson Family", code: "johnson-family", group: "B", gender: "p" },
```

### Step 3: Generate Unique Codes

**Rules for codes:**
- Use lowercase letters
- Use hyphens instead of spaces
- Keep it URL-friendly (no special characters)
- Make it unique for each guest

**Good codes:**
- `anna-marc`
- `maria-lopez`
- `the-smith-family`

**Bad codes:**
- `Anna Marc` (has space and capitals)
- `maría@lópez` (has special characters)
- `guest1` (not descriptive)

---

## Sharing Personalized Links

### Link Format:
```
https://your-website.com/?guest=GUEST-CODE
```

### Examples:
```
https://your-website.com/?guest=anna-marc
https://your-website.com/?guest=sophie
https://your-website.com/?guest=maria-garcia
```

### How to Send:
1. Copy the base URL of your deployed site
2. Add `/?guest=` at the end
3. Add the guest's unique code
4. Send via email, WhatsApp, or any messaging platform

---

## What Gets Personalized

### 1. **Opening Letter**
- Without link: "Dear Friends & Family" / "Queridos Amigos y Familia"
- With link (female): "Querida María" / "Chère Sophie"
- With link (male): "Querido Carlos" / "Cher Jean-Pierre"
- With link (plural): "Queridos Anna & Marc" / "Chers Anna & Marc"
- English always uses: "Dear [Name]"

### 2. **Program Schedule**
- Group A sees: Ceremony + Full Reception (4 events)
- Group B sees: Reception Only (4 events, starting at 3pm)

### 3. **RSVP Form**
- Guest name is pre-filled
- Easier for guests to respond

### 4. **Language Support**
- Personalization works in Spanish, English, and French
- Guest can switch languages without losing personalization

---

## Testing

### Test Your Guest Links:

1. **Local Testing** (before deployment):
   ```
   http://localhost:3000/?guest=anna-marc
   http://localhost:3000/?guest=sophie
   ```

2. **Check Each Guest:**
   - Does the correct name appear in the letter?
   - Does the correct program show (Group A vs B)?
   - Does it work in all 3 languages?

3. **Test Without Code:**
   ```
   http://localhost:3000/
   ```
   Should show generic "Amigos y Familia"

---

## Guest List Template

Use this template to organize your guests before adding them to the code:

```
NAME                    | CODE              | GROUP | LINK
------------------------|-------------------|-------|----------------------------------
Anna & Marc             | anna-marc         | A     | ?guest=anna-marc
Sophie Dubois           | sophie            | B     | ?guest=sophie
María González          | maria-gonzalez    | A     | ?guest=maria-gonzalez
The Johnson Family      | johnson-family    | B     | ?guest=johnson-family
```

---

## Common Issues

### Issue: Guest name doesn't show
**Solution:** Check that:
- The code in the URL matches exactly (case-sensitive in code, but URL should be lowercase)
- The guest exists in `src/constants.ts`
- You saved the file after adding the guest

### Issue: Wrong program showing
**Solution:** 
- Check the guest's `group` property
- Group "A" = Ceremony + Reception
- Group "B" = Reception Only

### Issue: Link doesn't work after deployment
**Solution:**
- Make sure you rebuilt and redeployed after adding guests
- Run `npm run build` before deploying

---

## Quick Reference

### File Locations:
- **Guest List**: `src/constants.ts` (GUESTS array)
- **Translations**: `src/constants.ts` (TRANSLATIONS object)
- **Program Logic**: `src/App.tsx` (line ~359)

### Guest Object Structure:
```typescript
{
  name: string,        // Display name
  code: string,        // URL parameter
  group: "A" | "B",    // Program group
  gender: "f"|"m"|"p"  // For Spanish/French grammar
}
```

---

## Best Practices

1. **Keep codes simple**: Use first names when possible
2. **Test before sending**: Always test the link before sending to guests
3. **Keep a backup**: Save your guest list in a spreadsheet
4. **Track RSVPs**: Note which guests have received their link
5. **Update carefully**: Be cautious when editing existing guest codes (links will break)

---

## Example Complete Guest List

```typescript
export const GUESTS: Guest[] = [
  // Ceremony + Reception (Group A)
  { name: "Los Padres de Camila", code: "padres-camila", group: "A", gender: "p" },
  { name: "Los Padres de Amin", code: "padres-amin", group: "A", gender: "p" },
  { name: "María García", code: "maria", group: "A", gender: "f" },
  { name: "Pedro García", code: "pedro", group: "A", gender: "m" },
  { name: "Anna Schmidt", code: "anna", group: "A", gender: "f" },
  
  // Reception Only (Group B)
  { name: "Sophie Dubois", code: "sophie", group: "B", gender: "f" },
  { name: "Carlos Mendez", code: "carlos", group: "B", gender: "m" },
  { name: "The Johnson Family", code: "johnson-family", group: "B", gender: "p" },
  { name: "Lisa & Tom", code: "lisa-tom", group: "B", gender: "p" },
];
```

---

## Need Help?

If you need to make changes or have questions:
1. Read this guide carefully
2. Test changes locally first
3. Keep backups before making major changes
4. Rebuild and redeploy after any changes

**Remember:** Every change to `src/constants.ts` requires a rebuild (`npm run build`) and redeployment!
