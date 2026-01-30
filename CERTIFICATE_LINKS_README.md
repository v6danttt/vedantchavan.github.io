# Certificate Links - Update Instructions

To add your actual certificate links and PDFs, follow these steps:

## 1. Google Advanced Data Analytics Certificate

**Option A: Using Coursera Verification Link**
- Visit: https://www.coursera.org/account/accomplishments
- Find your "Google Advanced Data Analytics" certificate
- Copy the verification link (should look like: https://coursera.org/verify/professional-cert/YOUR_ID)
- In `index.html`, find the line with Google certificate and replace the href:
```html
<a href="https://coursera.org/verify/professional-cert/YOUR_GOOGLE_ID" target="_blank" class="box cert-box cert-link">
```

**Option B: Upload PDF to Your Server**
- If you have a PDF of the certificate, upload it to a hosting service
- Replace the href with the direct link to your PDF

## 2. IBM Machine Learning Certificate

- Visit: https://www.ibm.com/training/
- Find your certificate verification link
- Replace the href in the HTML with your actual link

## 3. NPTEL Java Programming Certificate

- Visit: https://nptel.ac.in/
- Find your certificate page
- Replace the href with your actual verification link

## Current HTML Structure

The certificate section currently looks like:
```html
<a href="CERTIFICATE_LINK_HERE" target="_blank" class="box cert-box cert-link">
  <i class="fab fa-google"></i>
  <p>Certificate Name</p>
  <span class="cert-badge"><i class="fas fa-external-link-alt"></i> View Certificate</span>
</a>
```

## Features

✅ Clicking on certificate boxes opens the link in a new tab
✅ "View Certificate" badge appears on hover
✅ Beautiful 3D animations and glow effects
✅ Mobile responsive design

## Need Help?

To find your certificates online:
1. **Coursera**: coursera.org/account/accomplishments
2. **IBM**: ibm.com/training → My Learning
3. **NPTEL**: nptel.ac.in → My Courses → View Certificate

Enjoy your portfolio! 🚀
