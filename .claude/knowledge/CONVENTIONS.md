---
summary: MVM email-signature project decisions: logo hosting, font stack, chosen direction, domain as one variable
kind: decisions
tier: advisory
last_verified: 2026-11-10
review_by: 2027-05-10
---

# CONVENTIONS — MVM email signatures

> Our own decisions. When a rule here contradicts the KB, this one wins and the reason is written down.

## Images
<!-- tags: topic=imagery,logo; platform=email; concern=compatibility; keywords=logo hosting, base64, alojamiento del logo -->
- **Host the signature logo on MVM's own domain, never base64 and never a third-party free host.** Reason: Litmus says host, not embed; Gmail counts images toward the 10,000-character limit; the old imghippo host returned 403 and earlier hosts were lost. Use PNG at 2x with explicit width/height. 2026-11-10

## Typography
<!-- tags: topic=typography; platform=email; concern=compatibility,consistency; keywords=fallback, font stack, helvetica, arial, roboto, fuentes de respaldo -->
- **Font stack: `Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif`. No Roboto.** Reason: fallbacks are chosen per OS ecosystem (Apple → Helvetica Neue/Helvetica; Windows → Arial; Google → Arial, then the generic `sans-serif`). Gmail web does not load web fonts but renders the reader's installed system fonts. Archivo Black lives only inside the logo image. 2026-11-10
- **Direction: the "Sobria" signature (small symbol, brand rule, live text).** Reason: most robust with images off and in dark mode; chosen over "Con placa" and "Con trama" in round 1 of #5. 2026-11-10

## Domain
<!-- tags: topic=branding; platform=email; concern=consistency; keywords=domain, dominio, mvialmeta -->
- **The domain is a single variable in the generator (email, website, logo URL).** Reason: today it is `mvialmeta.com`; a new domain may be bought and `mvialmeta.com` kept as secondary. Keep old logo URLs alive while old signatures circulate. 2026-11-10
