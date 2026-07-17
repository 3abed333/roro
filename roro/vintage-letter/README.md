# Vintage Letter Gift

A 1800s-style sealed envelope. Tapping the wax seal opens the flap, the envelope fades away, and a letter slides into view while "I Found Her" plays.

## Before you upload to Netlify

1. **Add the song**
   Put your MP3 file at `assets/song.mp3` (exact name/path). If you want a different filename, update the `src` on the `<audio>` tag at the bottom of `index.html`.

2. **Add her letter text**
   Open `index.html` and find the `<!-- LETTER TEXT -->` comment. Replace the paragraphs inside `.letter-body` with your own words. You can add as many `<p>...</p>` lines as you like.

3. **Optional tweaks**
   - `To My Dearest` / the address on the envelope — edit `.addr-to` / `.addr-sub` text in `index.html`.
   - Signature name — edit `.letter-signature` text ("— Abed").
   - Colors — CSS variables at the top of `style.css` (`--wax`, `--paper`, `--gold`, etc).

## Deploy to Netlify

Just drag the whole `vintage-letter` folder onto Netlify's deploy page (or connect it as a site from a repo). No build step needed — it's plain HTML/CSS/JS.
