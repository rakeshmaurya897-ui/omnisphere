# OmniSphere — AdSense Approval Upgrade

## Current State
OmniSphere is a Hinglish tech blog with 24+ articles, 30+ phone profiles, 15+ laptops, legal pages (Privacy Policy, Disclaimer, Terms, About, Contact), AdSense script in `<head>`, and a working chatbot. The site already has clean URLs via BrowserRouter + vercel.json, structured data, Open Graph tags, robots.txt, and sitemap.xml.

Weaknesses for AdSense approval:
- No `ads.txt` file (critical AdSense requirement)
- No Google Analytics 4 script (referenced in privacy policy but missing)
- About page lacks specific EEAT signals (expertise, authority, trustworthiness stats)
- No Editorial Policy page (Google expects publishers to have one)
- Article page author box is minimal — no credentials or bio visible
- Homepage has no social proof / stats strip
- About page team bios are generic
- Footer lacks Editorial Policy link
- PrivacyPolicyPage does not mention Google Analytics by specific tag
- Terms page may be thin
- No visible affiliate disclosure banner on articles (required by FTC/Google)

## Requested Changes (Diff)

### Add
- `src/frontend/public/ads.txt` — `google.com, pub-6595078494330613, DIRECT, f08c47fec0942fa0`
- `src/frontend/src/pages/EditorialPolicyPage.tsx` — New page at `/editorial-policy` with clear standards: independence, fact-checking process, affiliate disclosure policy, correction policy, author vetting
- Route `/editorial-policy` in `App.tsx`
- Footer link to Editorial Policy
- Homepage stats strip: "24+ Articles | 30+ Phones Reviewed | 50,000+ Monthly Readers | Since 2021"
- Google Analytics 4 snippet in `index.html` (placeholder gtag ID — user will replace)
- Article page: visible affiliate disclosure notice when article contains Amazon links
- About page: Editorial Standards box with commitment to original content, article count, founding year, reader count

### Modify
- `src/frontend/public/ads.txt` — Create (doesn't exist)
- `src/frontend/index.html` — Add GA4 gtag snippet
- `src/frontend/src/pages/AboutPage.tsx`:
  - Expand hero with stats (articles, years, readers)
  - Replace generic bios with stronger credential language
  - Add "Editorial Standards" section
  - Add "Our Promise to Readers" section
  - Add "Why We Started" founding story paragraph
- `src/frontend/src/pages/ArticlePage.tsx`:
  - Strengthen author box: show author bio excerpt, credentials badge
  - Add affiliate disclosure banner above "Buy" buttons or at top of relevant articles
  - Add "Last fact-checked" line in article meta
- `src/frontend/src/components/Footer.tsx`:
  - Add Editorial Policy link in the quick links column and bottom legal nav
- `src/frontend/src/pages/PrivacyPolicyPage.tsx`:
  - Add section on Google Analytics with GA4 tag mention
  - Update last-modified date string to March 25, 2026
- `src/frontend/src/pages/ContactUsPage.tsx`:
  - Add note: response within 24–48 hours guaranteed
  - Add team email for press/PR separately
- `src/frontend/src/pages/TermsPage.tsx`:
  - Strengthen: add intellectual property section, limitation of liability, governing law (India)
- `src/frontend/src/pages/DisclaimerPage.tsx`:
  - Fix typo domain: `omnishpere.in` → `omnisphere.in` wait — the actual live domain IS `omnishpere.in` per context. Keep as is.

### Remove
- Nothing removed

## Implementation Plan
1. Create `ads.txt` in `public/` folder
2. Add GA4 gtag script in `index.html`
3. Create `EditorialPolicyPage.tsx` — full-length editorial standards page
4. Add route in `App.tsx` for `/editorial-policy`
5. Update `Footer.tsx` to include Editorial Policy link
6. Upgrade `AboutPage.tsx` with stats, founding story, editorial standards
7. Upgrade `ArticlePage.tsx` with stronger author box + affiliate disclosure
8. Strengthen `PrivacyPolicyPage.tsx` with GA4 reference
9. Add trust stats strip to `HomePage.tsx` below hero
10. Strengthen `TermsPage.tsx` content
