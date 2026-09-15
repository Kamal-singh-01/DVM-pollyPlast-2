document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    window.addEventListener("scroll", () => {
        header?.classList.toggle("scrolled", window.scrollY > 20);
    });

    toggle?.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
    });

    nav?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle?.classList.remove("open");
            toggle?.setAttribute("aria-expanded", "false");
        });
    });

    // Hero slider
    const slides = [...document.querySelectorAll(".hero-media")];
    const bars = [...document.querySelectorAll(".slider-bars span")];
    const number = document.getElementById("slideNumber");
    let current = 0;
    let timer;

    function showSlide(index) {
        if (!slides.length) return;
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
        bars.forEach((bar, i) => bar.classList.toggle("active", i === current));
        if (number) number.textContent = `0${current + 1} / 03`;
    }

    function restartSlider() {
        clearInterval(timer);
        timer = setInterval(() => showSlide(current + 1), 6000);
    }

    document.getElementById("nextSlide")?.addEventListener("click", () => {
        showSlide(current + 1); restartSlider();
    });
    document.getElementById("prevSlide")?.addEventListener("click", () => {
        showSlide(current - 1); restartSlider();
    });
    if (slides.length) restartSlider();

    // Reveal on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // Product modal
    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const close = document.getElementById("modalClose");

    document.querySelectorAll(".catalog-card").forEach(card => {
        card.addEventListener("click", () => {
            if (!modal) return;
            modalTitle.textContent = card.dataset.product || "Product";
            modalDescription.textContent = card.dataset.description || "";
            modal.classList.add("show");
            modal.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
        });
    });

    function closeModal() {
        modal?.classList.remove("show");
        modal?.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }

    close?.addEventListener("click", closeModal);
    modal?.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

    // Static contact form -> email client
    document.getElementById("enquiryForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`DVM polyPlast Enquiry - ${form.get("requirement")}`);
        const body = encodeURIComponent(
`Name: ${form.get("name")}
Company: ${form.get("company")}
Email: ${form.get("email")}
Phone: ${form.get("phone")}
Requirement: ${form.get("requirement")}

Message:
${form.get("message")}`
        );
        window.location.href = `mailto:info@dvm-polyplast.com?subject=${subject}&body=${body}`;
    });
});
