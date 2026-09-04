document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Project Filtering Logic (untuk projects.html)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update Active Button Style
                filterBtns.forEach(b => {
                    b.classList.remove('bg-indigo-600', 'text-white');
                    b.classList.add('bg-slate-800', 'text-slate-300');
                });
                btn.classList.remove('bg-slate-800', 'text-slate-300');
                btn.classList.add('bg-indigo-600', 'text-white');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 3. Contact Form Submission Handling (untuk contact.html)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulasi Pengiriman
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...`;
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                if (formStatus) {
                    formStatus.classList.remove('hidden');
                    formStatus.className = "mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-sm text-center";
                    formStatus.innerText = "Pesan Anda berhasil terkirim! Saya akan membalas secepatnya.";
                }
                
                contactForm.reset();
            }, 1500);
        });
    }
});