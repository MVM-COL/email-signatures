# Can I Email — raw capture (2026-11-10)

- image-base64 (tested 2020-02-06, ~81%): Apple Mail macOS/iOS yes; Gmail all yes; Outlook Windows 2007–2019 partial (no base64 GIF); other Outlook clients yes.
- image-svg linked (tested 2026-09-16, ~98%): Apple Mail yes; Gmail desktop/mobile web partial (rasterized to PNG, 2026-09); Gmail iOS/Android partial (non-Google accounts only, plus rasterized); Outlook all yes. Embedded SVG is on /features/html-svg (not read).
- image-webp (tested 2021-02-06): Apple Mail yes; Gmail all partial (converted to JPG, no animation); Outlook Windows/macOS/iOS/Android yes; Windows Mail partial (no animation); Outlook.com partial (depends on browser).
- html-img (tested 2023-12-16, ~81%): supported with no notes in Apple Mail, all Gmail clients and all Outlook clients.

## Round 2 (2026-11-10): CSS for signatures
- html-style (tested 2023-07-27): Gmail desktop partial (not in <body>, 16 KB cap); Gmail iOS/Android partial (not in <body>, not for non-Google accounts); Apple Mail yes; Outlook Windows buggy (style before use); Outlook Mac and .com yes.
- css-at-font-face (tested 2023-12-19): Gmail desktop no (only Roboto and Google Sans); Gmail iOS/Android yes; Apple Mail yes; Outlook Windows partial (remote fonts ignored; mso-generic-font-family / mso-font-alt); Outlook Mac and .com yes.
- css-at-media (tested 2023-12-13): Gmail partial (no nested, no height; apps not for non-Google accounts); Apple Mail yes; Outlook Windows yes; Outlook Mac partial (nested removed); Outlook.com partial (no nested).
- prefers-color-scheme (tested 2023-03-08): yes in Gmail, Apple Mail, Outlook Windows/Mac/.com; Outlook Mac and .com add data-og* attributes.
- css-max-width (tested 2019-08-02): yes except Outlook Windows (tables only).
- css-padding (tested 2019-07-25): yes except Outlook Windows (td only; largest vertical padding across the row).
- html-div (tested 2020-05-08): yes everywhere; notes still recommend tables for Outlook 2007–2019 Windows.
- css-border-radius (tested 2021-03-09): yes except Outlook Windows (VML RoundRect).
- Caveat: the support icons were not in the fetched text; status was inferred from footnotes.
