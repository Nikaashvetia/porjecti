// ==========================================================================
// Burger Menu (მობილური მენიუს ფუნქციონალი JavaScript-ით)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconBars = document.getElementById('icon-bars');
    const iconClose = document.getElementById('icon-close');

    if (!burgerBtn || !mobileMenu) return;

    // მენიუს გაღება/დაკეტვა ღილაკზე დაჭერისას
    burgerBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            if (iconBars) iconBars.classList.add('hidden');
            if (iconClose) iconClose.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            if (iconBars) iconBars.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
        }
    });

    // რომელიმე ლინკზე დაჭერისას მენიუ ავტომატურად დაიხუროს
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            if (iconBars) iconBars.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
        });
    });

    // ეკრანზე სხვაგან დაკლიკებისას მენიუს დახურვა
    document.addEventListener('click', (event) => {
        if (!burgerBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            if (iconBars) iconBars.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
        }
    });

    // ==========================================================================
    // Fetch API: მომხმარებლების წამოღება JSONPlaceholder-იდან, დალოგვა და HTML-ში გამოტანა
    // ==========================================================================
    const usersContainer = document.getElementById('users-list');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP შეცდომა! სტატუსი: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            console.log('--- მომხმარებლების სახელები და Email ---');
            users.forEach(user => {
                console.log(`${user.name} - ${user.email}`);
            });

            // HTML-ში გამოტანა
            if (usersContainer) {
                usersContainer.innerHTML = ''; // "იტვირთება..." ტექსტის გასუფთავება

                users.forEach(user => {
                    const userCard = document.createElement('div');
                    userCard.className = 'bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3.5';
                    userCard.innerHTML = `
                        <div class="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                            ${user.name.charAt(0)}
                        </div>
                        <div class="min-w-0 flex-1">
                            <h4 class="font-bold text-slate-800 text-sm sm:text-base truncate">${user.name}</h4>
                            <a href="mailto:${user.email}" class="text-xs sm:text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 truncate mt-0.5">
                                <span>📧</span> ${user.email}
                            </a>
                        </div>
                    `;
                    usersContainer.appendChild(userCard);
                });
            }
        })
        .catch(error => {
            console.error('მონაცემების წამოღების შეცდომა:', error);
            if (usersContainer) {
                usersContainer.innerHTML = `
                    <div class="col-span-full text-center py-6 text-red-500 text-sm">
                        შეცდომა მონაცემების ჩატვირთვისას: ${error.message}
                    </div>
                `;
            }
        });

    // ==========================================================================
    // Fetch API: 5 კომენტარის წამოღება JSONPlaceholder-იდან და HTML-ში გამოტანა
    // ==========================================================================
    const commentsContainer = document.getElementById('comments-list');

    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP შეცდომა! სტატუსი: ${response.status}`);
            }
            return response.json();
        })
        .then(comments => {
            console.log('--- 5 კომენტარი ---');
            comments.forEach(comment => {
                console.log(`[${comment.email}]: ${comment.name}`);
            });

            if (commentsContainer) {
                commentsContainer.innerHTML = ''; // გასუფთავება

                comments.forEach((comment, index) => {
                    const commentCard = document.createElement('div');
                    commentCard.className = 'bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200';
                    commentCard.innerHTML = `
                        <div class="flex items-start justify-between gap-3 mb-2">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                                    #${index + 1}
                                </div>
                                <div class="min-w-0">
                                    <h4 class="font-bold text-slate-900 text-sm sm:text-base capitalize truncate">${comment.name}</h4>
                                    <a href="mailto:${comment.email}" class="text-xs text-slate-500 hover:text-blue-600 truncate block">
                                        ${comment.email}
                                    </a>
                                </div>
                            </div>
                            <span class="text-xs text-slate-400 font-mono hidden sm:inline-block">ID: ${comment.id}</span>
                        </div>
                        <p class="text-slate-600 text-sm leading-relaxed pl-10 border-l-2 border-amber-200 mt-2">
                            "${comment.body}"
                        </p>
                    `;
                    commentsContainer.appendChild(commentCard);
                });
            }
        })
        .catch(error => {
            console.error('კომენტარების წამოღების შეცდომა:', error);
            if (commentsContainer) {
                commentsContainer.innerHTML = `
                    <div class="text-center py-6 text-red-500 text-sm">
                        შეცდომა კომენტარების ჩატვირთვისას: ${error.message}
                    </div>
                `;
            }
        });
});

