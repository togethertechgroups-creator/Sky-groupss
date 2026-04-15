# SKY A Groups - Website SEO & Hosting

## Hosting Note — HTTP/2 Required
When deploying, ensure the hosting provider supports HTTP/2.
- Vercel: HTTP/2 enabled by default ✅
- Netlify: HTTP/2 enabled by default ✅  
- Apache shared hosting: add to .htaccess:
  `Protocols h2 h2c http/1.1`
- Nginx: add to server block:
  `listen 443 ssl http2;`

## DNS Records Required
Add these DNS records in your domain registrar:

### SPF Record (TXT):
- **Name**: `@`
- **Value**: `v=spf1 include:_spf.google.com ~all`
*(Adjust for your email provider if not using Google Workspace)*

### DMARC Record (TXT):
- **Name**: `_dmarc`
- **Value**: `v=DMARC1; p=none; rua=mailto:ponskygroups@gmail.com`

**Note**: These are DNS-level fixes, not code fixes. Set them in your domain registrar (GoDaddy, Namecheap, BigRock, etc.) DNS panel.
