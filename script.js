// ==========================================================================
// ჰედერის ავტომატური დამალვა სქროლვისას
// როგორც ჩამოწევისას, ისე ამოწევისას ჰედერი დამალულია (არ უშლის მკითხველს ხელს)
// ჰედერი ჩნდება მხოლოდ მაშინ, როცა მომხმარებელი გვერდის თავში ბრუნდება
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

        // მხოლოდ გვერდის თავში (პირველი 60px) ჩანდეს ჰედერი
        if (currentScrollY <= 60) {
            header.classList.remove('header--hidden');
        } else {
            // ნებისმიერი სქროლვისას (ჩამოწევისას თუ ამოწევისას) ჰედერი იყოს დამალული
            header.classList.add('header--hidden');
        }
    }, { passive: true });
});
