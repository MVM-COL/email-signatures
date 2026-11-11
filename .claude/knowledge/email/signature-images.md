---
summary: Images in HTML email signatures: hosting vs base64, Gmail signature limits, size and retina, formats, alt text and image blocking, dark mode logos
tier: advisory
last_verified: 2026-11-10
review_by: 2027-05-10
sources:
  - publisher: Litmus
    url: https://www.litmus.com/blog/how-to-write-and-design-a-great-email-signature
  - publisher: Litmus
    url: https://www.litmus.com/blog/the-102-of-email-code-working-with-images
  - publisher: Litmus
    url: https://www.litmus.com/blog/coding-emails-for-dark-mode
  - publisher: Google Gmail Help
    url: https://support.google.com/mail/answer/8395
  - publisher: Google Gmail Help
    url: https://support.google.com/mail/answer/11468381
  - publisher: Can I Email
    url: https://www.caniemail.com/features/image-base64/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/image-svg/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/image-webp/
  - publisher: Can I Email
    url: https://www.caniemail.com/features/html-img/
---

# Images in email signatures

> Litmus signature and images posts are from 2016 and 2020; Can I Email base64 data was last
> tested 2020-02. Re-check client behaviour in the QA pass before relying on dated rules.

## Hosting vs embedding
<!-- tags: topic=imagery,logo; platform=email; concern=compatibility,performance; keywords=base64, data uri, embedded image, cid, attachment, hosted image, image hosting, alojamiento, firma de correo -->
- Do not embed signature images; host them on a web server and reference them by URL so they never arrive as attachments. [Litmus: https://www.litmus.com/blog/how-to-write-and-design-a-great-email-signature]
- Point the image `src` straight at the image file (ending in .png, .jpg or .gif); a folder or HTML page link will not render. [Litmus: https://www.litmus.com/blog/the-102-of-email-code-working-with-images]
- Without email-platform hosting, serve images from your own website's server or a storage service such as AWS. [Litmus: https://www.litmus.com/blog/the-102-of-email-code-working-with-images]
- Base64 images render in Apple Mail and Gmail when received, but Outlook for Windows does not render base64 GIFs, and this data was last tested in 2020. [Can I Email: https://www.caniemail.com/features/image-base64/]
- In a Gmail signature the image counts toward the 10,000-character limit; if saving shows an error, resize the image. [Google Gmail Help: https://support.google.com/mail/answer/8395]

## Gmail signature editor
<!-- tags: topic=imagery; platform=email; concern=compatibility,usability; keywords=gmail signature, character limit, google drive, upload image, firma gmail -->
- Keep a Gmail signature under 10,000 characters, images included. [Google Gmail Help: https://support.google.com/mail/answer/8395]
- Gmail adds signature images by public web URL, by a public Google Drive image, or by uploading a file from the device. [Google Gmail Help: https://support.google.com/mail/answer/11468381]
- A Google Drive signature image must be shared as "Anyone with the link · Viewer"; on Workspace accounts the admin may need to allow public sharing first. [Google Gmail Help: https://support.google.com/mail/answer/11468381]
- If the Drive image, or the Doc that contains it, is deleted, the image disappears from every signature that uses it. [Google Gmail Help: https://support.google.com/mail/answer/11468381]
- Size Gmail signature images at 70–100 px high by 300–400 px wide; the maximum is 100 px high by 1000 px wide. [Google Gmail Help: https://support.google.com/mail/answer/11468381]
- An oversized signature image can make the signature text display incorrectly; resize it to the recommended size. [Google Gmail Help: https://support.google.com/mail/answer/11468381]
- On iPhone and iPad, if no mobile signature is set in the Gmail app, new messages use the signature set on the computer. [Google Gmail Help: https://support.google.com/mail/answer/8395?hl=en&co=GENIE.Platform%3DiOS]

## Size, resolution and weight
<!-- tags: topic=imagery,responsive-design; platform=email; concern=legibility,performance; keywords=retina, 2x, hidpi, width attribute, height attribute, file size, peso, resolución -->
- Export images at about twice the size of the space they fill so they stay sharp on high-density (retina) screens. [Litmus: https://www.litmus.com/blog/the-102-of-email-code-working-with-images]
- Set `width` and `height` attributes on every `<img>` (for example `width="400" height="100"`) at the display size, not the file size. [Litmus: https://www.litmus.com/blog/the-102-of-email-code-working-with-images]
- Keep image files well under 1 MB; smaller is better. [Litmus: https://www.litmus.com/blog/the-102-of-email-code-working-with-images]

## Formats
<!-- tags: topic=image-formats,logo; platform=email; concern=compatibility; keywords=png, jpg, gif, svg, webp, formato de imagen -->
- Use PNG for signature icons and logos, with one uniform size for all social icons. [Litmus: https://www.litmus.com/blog/how-to-write-and-design-a-great-email-signature]
- Do not rely on SVG for a logo in Gmail: it rasterizes linked SVG to PNG, and the Gmail iOS and Android apps show it only for non-Google accounts. [Can I Email: https://www.caniemail.com/features/image-svg/]
- Do not rely on WebP in Gmail: every Gmail client converts it to JPG and drops animation. [Can I Email: https://www.caniemail.com/features/image-webp/]
- The plain `<img>` element is supported without caveats in Apple Mail, every Gmail client and every Outlook client. [Can I Email: https://www.caniemail.com/features/html-img/]

## Alt text and image blocking
<!-- tags: topic=imagery; platform=email; concern=a11y,compatibility; keywords=alt text, image blocking, images off, texto alternativo, bloqueo de imágenes -->
- Give every signature image descriptive, succinct alt text that matches its intent, so recipients still get the information with images off. [Litmus: https://www.litmus.com/blog/how-to-write-and-design-a-great-email-signature]
- Test the signature with images blocked and keep key details (name, phone, email, website) as live text, not inside images. [Litmus: https://www.litmus.com/blog/how-to-write-and-design-a-great-email-signature]
- Never make the signature image-only; keep the content as live text. [Litmus: https://www.litmus.com/blog/the-102-of-email-code-working-with-images]

## Dark mode logos
<!-- tags: topic=logo,theming; platform=email; concern=legibility,compatibility; keywords=dark mode, transparent png, glow, stroke, image swap, prefers-color-scheme, modo oscuro -->
- Expect each client to treat dark mode differently (no change, partial inversion or full inversion), and design the logo to survive all three. [Litmus: https://www.litmus.com/blog/coding-emails-for-dark-mode]
- Prefer midtone logo colours that keep enough contrast on both white and black backgrounds. [Litmus: https://www.litmus.com/blog/coding-emails-for-dark-mode]
- Add a subtle glow, stroke or solid shape behind a transparent PNG logo with dark artwork so it stays visible on dark backgrounds. [Litmus: https://www.litmus.com/blog/coding-emails-for-dark-mode]
- Swap light and dark logo files with `@media (prefers-color-scheme: dark)` only where supported, and make the default logo work alone where swapping fails. [Litmus: https://www.litmus.com/blog/coding-emails-for-dark-mode]
