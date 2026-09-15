# DVM polyPlast — Static ASP.NET Core Website

A modern, responsive company website inspired by the visual language of the supplied UCMPL reference, rebuilt with original layout/content for DVM polyPlast.

## Stack
- ASP.NET Core Razor Pages
- HTML / CSS / JavaScript
- No database
- No external backend/API required

## Run

1. Install the .NET 8 SDK.
2. Open this folder in VS Code.
3. Run:

```bash
dotnet restore
dotnet run
```

4. Open the HTTPS/HTTP URL shown in the terminal.

## Main files

- `Pages/Index.cshtml` — homepage
- `Pages/About.cshtml` — company page
- `Pages/Products.cshtml` — products
- `Pages/Infrastructure.cshtml` — machines/capabilities
- `Pages/Contact.cshtml` — enquiry/contact page
- `Pages/Shared/_Layout.cshtml` — common header/footer
- `wwwroot/css/site.css` — complete styling
- `wwwroot/js/site.js` — slider, menu, modal, reveal animations

## Images

The supplied DVM polyPlast logo is already included at:

`wwwroot/images/dvm-logo.png`

The demo product/industrial photography uses remote Unsplash image URLs. Replace those URLs with your own company photographs when available.

## Contact form

Because this is intentionally a static/no-database project, the form currently opens the visitor's email client using `mailto:`. For real server-side email delivery, connect an email provider/API later.
