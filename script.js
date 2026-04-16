
        // Movie Data for dynamic rows (interface mockup)
        // Each movie object: title, rating, imageId (for placeholder style), year (optional)
        // We'll use attractive placeholders with text and gradient-friendly design via placeholder images.
        // Using "https://placehold.co/300x450" with custom text and colors matching streaming vibe.
        // To make it visually consistent and modern, we generate placeholder URLs with dark background, bold text.
        
        const generatePoster = (movie) => {
            // إذا كان هناك صورة محلية، استخدمها؛ وإلا استخدم placeholder
            if (movie.image) {
                return `images/${movie.image}`;
            }
            // Fallback إلى placeholder إذا لم تكن هناك صورة محلية
            let shortTitle = movie.title.length > 18 ? movie.title.substring(0, 15)+'...' : movie.title;
            return `https://placehold.co/300x450/111827/e50914?text=${encodeURIComponent(shortTitle)}&font=montserrat`;
        };

        // Categories & their respective movies
        const categories = [
            {
                name: "الأكثر مشاهدة 🔥",
                id: "trending",
                movies: [
                    { title: " Train to Busan", rating: "9.2", year: "2016", image: "train-to-busan.jpg" },
                    { title: " Interstellar", rating: "9.7", year: "2014", image: "interstellar.jpg" },
                    { title: " Unlocked", rating: "8.9", year: "2023", image: "unlocked.jpg" },
                    { title: "Lift ", rating: "8.4", year: "2024", image: "lift.jpg" },
                    { title: " Smile 2", rating: "7.9", year: "2024", image: "smile2.jpg" },
                    { title: "Rivals ", rating: "8.1", year: "2024", image: "rivals.jpg" },
                    { title: "Vigilante ", rating: "7.8", year: "2023", image: "vigilante.jpg" },
                    { title: " Moving", rating: "8.6", year: "2023", image: "moving.jpg" },
                    { title: "Crooks", rating: "9.0", year: "2024", image: "crooks.jpg" }
                ]
            },
            {
                name: "أحدث الإضافات ✨",
                id: "new",
                movies: [
                    { title: "Trigger ", rating: "7.5", year: "2025", image: "trigger.jpg" },
                    { title: "Stranger Things 5", rating: "8.2", year: "2025", image: "stranger-things-5.jpg" },
                    { title: "Adolescence", rating: "8.0", year: "2025", image: "adolescence.jpg" },
                    { title: " The Penguin", rating: "9.3", year: "2024", image: "the-penguin.jpg" },
                    { title: " Ripley", rating: "7.7", year: "2024", image: "ripley.jpg" },
                    { title: " The Pitt", rating: "8.4", year: "2025", image: "the-pitt.jpg" },
                    { title: "Shogun", rating: "7.8", year: "2024", image: "shogun.jpg" },
                    { title: " The Monkey", rating: "8.9", year: "2025", image: "the-monkey.jpg" }
                ]
            },
            {
                name: "موصى لك 🌟",
                id: "recommended",
                movies: [
                    { title: "The Walking Dead", rating: "8.8", year: "2010", image: "walking-dead.jpg" },
                    { title: "Prison Break", rating: "8.5", year: "2005", image: "prison-break.jpg" },
                    { title: "Marcella", rating: "7.9", year: "2016", image: "marcella.jpg" },
                    { title: "Breaking Bad", rating: "9.5", year: "2008", image: "breaking-bad.jpg" },
                    { title: "Seinfeld", rating: "8.3", year: "1989", image: "seinfeld.jpg" },
                    { title: "The Wire", rating: "9.3", year: "2002", image: "the-wire.jpg" }
                ]
            }
        ];

        // Function to render all rows
        function renderRows() {
            const container = document.getElementById('dynamic-rows');
            if (!container) return;
            container.innerHTML = '';

            categories.forEach((cat, idx) => {
                // create section
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'section';
                
                // header
                const headerDiv = document.createElement('div');
                headerDiv.className = 'section-header';
                headerDiv.innerHTML = `
                    <h3>${cat.name}</h3>
                    <a href="#" class="section-link">عرض الكل <i class="fas fa-arrow-left"></i></a>
                `;
                sectionDiv.appendChild(headerDiv);
                
                // row container
                const rowDiv = document.createElement('div');
                rowDiv.className = 'movies-row';
                
                // loop movies
                cat.movies.forEach((movie, mIdx) => {
                    const posterUrl = generatePoster(movie);
                    const card = document.createElement('div');
                    card.className = 'movie-card';
                    card.innerHTML = `
                        <div class="card-img">
                            <img src="${posterUrl}" alt="${movie.title}">
                            <div class="play-overlay">
                                <i class="fas fa-play-circle"></i>
                            </div>
                        </div>
                        <div class="card-info">
                            <h4>${movie.title} (${movie.year})</h4>
                            <div class="rating">
                                <i class="fas fa-star" style="color:#f5c518;"></i> ${movie.rating}
                                <span>/10</span>
                            </div>
                        </div>
                    `;
                    // add click alert for demo (just interface)
                    card.addEventListener('click', () => {
                        alert(`▶️ يتم تشغيل: ${movie.title}\n${movie.rating}/10 - استمتع بالمشاهدة على منصة شاهد`);
                    });
                    rowDiv.appendChild(card);
                });
                
                sectionDiv.appendChild(rowDiv);
                container.appendChild(sectionDiv);
            });
        }

        // Bonus: Add extra row for "مستمر بالمشاهدة" (Continue Watching) - dynamic realistic
        function addContinueWatching() {
            const container = document.getElementById('dynamic-rows');
            if (!container) return;
            
            const continueSection = document.createElement('div');
            continueSection.className = 'section';
            continueSection.innerHTML = `
                <div class="section-header">
                    <h3>مستمر بالمشاهدة <i class="fas fa-history"></i></h3>
                    <a href="#" class="section-link">استكمال <i class="fas fa-arrow-left"></i></a>
                </div>
                <div class="movies-row" id="continue-row"></div>
            `;
            container.insertBefore(continueSection, container.firstChild);
            
            const continueRow = continueSection.querySelector('#continue-row');
            const continueMovies = [
                { title: "Squid Game", rating: "9.1", progress: "45%", image: "squid-game.jpg" },
                { title: " Friends", rating: "8.3", progress: "72%", image: "friends.jpg" },
                { title: "Dark", rating: "9.7", progress: "30%", image: "dark.jpg" },
                { title: "Sherlock Holmes", rating: "9.0", progress: "88%", image: "sherlock-holmes.jpg" },
                { title: "Dr.House", rating: "8.9", progress: "15%", image: "dr-house.jpg" }
            ];
            continueMovies.forEach(m => {
                const posterUrl = generatePoster(m);
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.innerHTML = `
                    <div class="card-img">
                        <img src="${posterUrl}" alt="${m.title}">
                        <div class="play-overlay">
                            <i class="fas fa-play-circle"></i>
                        </div>
                        <div style="position:absolute; bottom:0; left:0; width:${m.progress}; height:4px; background:#e50914;"></div>
                    </div>
                    <div class="card-info">
                        <h4>${m.title}</h4>
                        <div class="rating">
                            <i class="fas fa-play-circle" style="font-size:0.7rem; color:#e50914;"></i> متبقي ${m.progress}
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => alert(`⏯️ استكمال مشاهدة: ${m.title}`));
                continueRow.appendChild(card);
            });
        }

        // Extra: Hero button interactive alerts
        function setupHeroButtons() {
            const watchBtn = document.querySelector('.btn-primary');
            const moreBtn = document.querySelector('.btn-secondary');
            if (watchBtn) {
                watchBtn.addEventListener('click', () => alert('🎬 جاري تشغيل العرض الحصري:  Game of Thrones'));
            }
            if (moreBtn) {
                moreBtn.addEventListener('click', () => alert('معلومات إضافية: دراما أكشن خيالي، بطولة نخبة من النجوم، متوفر بجودة عالية'));
            }
        }

        // Initialize All
        renderRows();
        addContinueWatching();
        setupHeroButtons();
        
        // Optional: Add any subtle hover for navbar avatar
        const userAvatar = document.querySelector('.user-avatar');
        if(userAvatar) {
            userAvatar.addEventListener('click', () => alert('حسابك: مرحباً بك في شاهد! قم بتسجيل الدخول للمزيد'));
        }
        const searchIcon = document.querySelector('.fa-search');
        if(searchIcon) {
            searchIcon.addEventListener('click', () => alert('🔍 ميزة البحث - يمكنك البحث عن الأفلام والمسلسلات'));
        }
        
        // Handle notification icon
        const bellIcon = document.querySelector('.fa-bell');
        if(bellIcon) {
            bellIcon.addEventListener('click', () => alert('🔔 إشعارات: لا توجد إشعارات جديدة'));
        }
        
        // smooth scroll for any row links (just a demo)
        const sectionLinks = document.querySelectorAll('.section-link');
        sectionLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('✨ سيتم عرض جميع المحتويات الخاصة بهذا التصنيف (واجهة تجريبية)');
            });
        });
        
        // small hover to enhance interactive feel
        console.log("واجهة شاهد جاهزة - تصميم عصري لتجربة مشاهدة فريدة");
 