---
summary: Coding HTML email signatures: where CSS lives (inline vs style), tables vs divs, web fonts and fallbacks, responsive, dark mode, accessibility, installing in macOS Mail
tier: advisory
status: ambiguous   # Gmail app web fonts: Can I Email says yes (2023), Litmus says no; settle in QA (#7)
last_verified: 2026-11-10
review_by: 2027-05-10
sources:
  - publisher: Can I Email
    url: https://www.caniemail.com/features/html-style/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/css-at-font-face/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/css-at-media/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/css-at-media-prefers-color-scheme/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/css-max-width/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/css-padding/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/html-div/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/css-border-radius/
  - publisher: Google Developers
    url: https://developers.google.com/workspace/gmail/design/css
  - publisher: Litmus
    url: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts
  - publisher: Litmus
    url: https://www.litmus.com/blog/7-simple-tricks-to-make-your-email-code-more-accessible
  - publisher: Apple Support
    url: https://support.apple.com/guide/mail/create-and-use-email-signatures-mail11943/mac
---

# Coding email signatures

> A pasted signature lives inside the `<body>` of each message, so rules about `<style>` in
> `<head>` apply to full emails, not to signatures. Can I Email data was tested 2019–2023;
> Litmus pages carry a "2+ years old" note. Re-check in the QA pass.

## Where the CSS lives
<!-- tags: topic=layout; platform=email; concern=compatibility; keywords=inline styles, style element, style block, head, body, css inline, estilos en línea -->
- Gmail (desktop, iOS and Android) does not support `<style>` inside `<body>`, so a signature, which sits in the body, needs its styles inline on each element. [Can I Email: https://www.caniemail.com/features/html-style/]
- Gmail desktop caps a `<style>` block at 16 KB, and the Gmail apps ignore `<style>` for non-Google accounts. [Can I Email: https://www.caniemail.com/features/html-style/]
- Gmail may ignore unsupported CSS properties and selectors; check each property against Google's supported list before relying on it. [Google Developers: https://developers.google.com/workspace/gmail/design/css]
- Do not count on `position`, `transform`, `box-shadow`, `text-shadow`, `flex` or `grid` in Gmail: they are not in its supported property list. [Google Developers: https://developers.google.com/workspace/gmail/design/css]

## Layout: tables, width and padding
<!-- tags: topic=layout; platform=email; concern=compatibility; keywords=table layout, div, max-width, padding, td, outlook, tablas, ancho máximo -->
- Lay out the signature with tables rather than `<div>`s so it holds in Outlook 2007–2019 for Windows. [Can I Email: https://www.caniemail.com/features/html-div/]
- Put `max-width` on the `<table>`, not on a `<div>`: Outlook for Windows applies it only to tables. [Can I Email: https://www.caniemail.com/features/css-max-width/]
- Put padding on `<td>` cells, not on other elements; Outlook for Windows ignores it elsewhere and uses the largest vertical padding in a row for every cell. [Can I Email: https://www.caniemail.com/features/css-padding/]
- `border-radius` works in Gmail, Apple Mail, Outlook.com and Outlook for Mac but not natively in Outlook for Windows, so keep rounded corners decorative. [Can I Email: https://www.caniemail.com/features/css-border-radius/]

## Typography and web fonts
<!-- tags: topic=typography; platform=email; concern=compatibility,legibility; keywords=web fonts, font-face, fallback, font stack, roboto, google sans, mso-font-alt, fuente de marca, fallbacks -->
- Do not expect a brand web font in Gmail desktop: it renders only Roboto and Google Sans, so most recipients will see the fallback. [Can I Email: https://www.caniemail.com/features/css-at-font-face/]
- Web fonts load in Apple Mail, Outlook for Mac and iOS, but not in Outlook for Windows, Outlook.com, Gmail or the Gmail app (Can I Email lists the Gmail apps as supporting @font-face; verify in QA). [Litmus: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts]
- List several fonts in every `font-family` stack; otherwise the email client picks the fallback for you. [Litmus: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts]
- Choose a readable sans-serif fallback with an x-height close to the brand font, and avoid script or ornate faces. [Litmus: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts]
- Load web fonts with `@font-face` (woff/woff2), not `<link>` or `@import`, which make Outlook show Times New Roman; add `mso-font-alt` to control Outlook's fallback. [Litmus: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts]
- Declare one `@font-face` per weight and style under one family name instead of putting the weight in the name, so fallbacks keep the bold or italic. [Litmus: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts]

## Responsive
<!-- tags: topic=responsive-design; platform=email; concern=compatibility; keywords=media queries, mobile, max-width, stacking, apilar -->
- Do not nest `@media` queries or query by height: Gmail and Outlook.com drop them and Outlook for Mac removes nested ones. [Can I Email: https://www.caniemail.com/features/css-at-media/]
- Gmail supports media queries on `screen` or `all` with width, orientation and resolution features only. [Google Developers: https://developers.google.com/workspace/gmail/design/css]
- Because media queries need a `<style>` block, which a pasted signature cannot rely on, make the signature fit narrow screens without them (fixed `max-width` table, content that wraps). [Can I Email: https://www.caniemail.com/features/html-style/]

## Dark mode
<!-- tags: topic=theming; platform=email; concern=legibility,compatibility; keywords=dark mode, prefers-color-scheme, data-ogsc, outlook dark mode, modo oscuro -->
- `@media (prefers-color-scheme: dark)` is supported in Apple Mail, Gmail, Outlook for Windows, Outlook for Mac and Outlook.com. [Can I Email: https://www.caniemail.com/features/css-at-media-prefers-color-scheme/]
- Outlook.com and Outlook for Mac add `data-ogsc`, `data-ogac`, `data-ogsb` and `data-ogab` attributes in dark mode; target them for Outlook dark styles. [Can I Email: https://www.caniemail.com/features/css-at-media-prefers-color-scheme/]
- Check text and background contrast in both light and dark mode with a contrast tool. [Litmus: https://www.litmus.com/blog/7-simple-tricks-to-make-your-email-code-more-accessible]

## Accessibility
<!-- tags: topic=assistive-technology; platform=email; concern=a11y; keywords=screen reader, role presentation, alt, lang, live text, lector de pantalla -->
- Add `role="presentation"` to every layout table so screen readers do not announce it as a data table. [Litmus: https://www.litmus.com/blog/7-simple-tricks-to-make-your-email-code-more-accessible]
- Give every `<img>` an `alt`: descriptive text, or `alt=""` for decorative images; a missing alt makes screen readers read the URL. [Litmus: https://www.litmus.com/blog/7-simple-tricks-to-make-your-email-code-more-accessible]
- Keep the content as live text, never an image, so screen-reader users and people with images off can read it. [Litmus: https://www.litmus.com/blog/the-ultimate-guide-to-web-fonts]
- Left-align text longer than two lines. [Litmus: https://www.litmus.com/blog/7-simple-tricks-to-make-your-email-code-more-accessible]

## Installing in macOS Mail
<!-- tags: topic=content-strategy; platform=macos; concern=usability; keywords=apple mail signature, mail settings, signatures, instalar firma, mail de mac -->
- In Mail on Mac, open Mail > Settings > Signatures, select the account first, then click Add; a signature created under "All Signatures" must be dragged onto an account before it can be used. [Apple Support: https://support.apple.com/guide/mail/create-and-use-email-signatures-mail11943/mac]
- Mac Mail signatures accept formatted text, links and images dragged into the preview. [Apple Support: https://support.apple.com/guide/mail/create-and-use-email-signatures-mail11943/mac]
- To show the signature below quoted text in replies and forwards, deselect "Place signature above quoted text". [Apple Support: https://support.apple.com/guide/mail/create-and-use-email-signatures-mail11943/mac]
