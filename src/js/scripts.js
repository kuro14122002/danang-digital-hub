// Custom JavaScript for DZESA site

// Initialize SwiperJS for sliders
export function initializeSwiper() {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper-container', {
      // Default parameters for banner slider
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Additional Swiper instances for other sliders like news, industrial zones, partners, etc.
    const newsSwiper = new Swiper('.news-swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
}

// Initialize Fancybox for image/video viewing
export function initializeFancybox() {
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox]', {
      // Custom options if needed
    });
  }
}

// Initialize Chart.js for data visualization from JSON
export function initializeCharts() {
  if (typeof Chart !== 'undefined' && document.getElementById('investmentChart')) {
    // Example chart for investment results
    fetch('/data/LayKetQuaThuHutDauTu.json')
      .then(response => response.json())
      .then(data => {
        const ctx = document.getElementById('investmentChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.map(item => item.year),
            datasets: [{
              label: 'Investment (Million USD)',
              data: data.map(item => item.amount),
              backgroundColor: 'rgba(0, 78, 140, 0.6)',
              borderColor: 'rgba(0, 78, 140, 1)',
              borderWidth: 1,
            }],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      })
      .catch(error => console.error('Error loading chart data:', error));
  }
}

// Initialize Select2 for enhanced dropdowns
export function initializeSelect2() {
  if (typeof $ !== 'undefined' && $.fn.select2) {
    $('#language-select').select2({
      minimumResultsForSearch: Infinity,
      width: 'auto',
      dropdownAutoWidth: true,
    });

    // Update flag icon on language change
    $('#language-select').on('change', function() {
      const selectedOption = $(this).find('option:selected');
      const flagUrl = selectedOption.data('flag');
      $('#curFlagLang').attr('src', flagUrl);
    });
  }
}

// Navbar shrink on scroll
export function handleNavbarShrink() {
  const navbarCollapsible = document.body.querySelector('#mainNav');
  if (!navbarCollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove('navbar-shrink');
  } else {
    navbarCollapsible.classList.add('navbar-shrink');
  }
}

// Search functionality
export function performSearch() {
  const searchTerm = document.getElementById('ip-search').value.trim();
  const searchLink = document.getElementById('ket-qua-tim-kiem-link').value;
  if (searchTerm) {
    window.location.href = `${searchLink}?q=${encodeURIComponent(searchTerm)}`;
  }
}

export function performSearchOnMobi() {
  const searchTerm = document.getElementById('ip-search-mobi').value.trim();
  const searchLink = document.getElementById('ket-qua-tim-kiem-link').value;
  if (searchTerm) {
    window.location.href = `${searchLink}?q=${encodeURIComponent(searchTerm)}`;
  }
}

// Language switch
export function switchLanguage(url, lang) {
  window.location.href = url;
}

// Clock functionality
export function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Optimize performance by debouncing scroll events
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Function to initialize event listeners and other functionalities
export function initializeApp() {
  // Navbar shrink
  handleNavbarShrink();
  window.addEventListener('scroll', debounce(handleNavbarShrink, 50));

  // Swiper
  initializeSwiper();

  // Fancybox
  initializeFancybox();

  // Chart.js
  initializeCharts();

  // Select2
  initializeSelect2();

  // Clock
  setInterval(updateClock, 1000);
  updateClock();

  // Search input event listeners
  const searchInput = document.getElementById('ip-search');
  const searchInputMobi = document.getElementById('ip-search-mobi');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  if (searchInputMobi) {
    searchInputMobi.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearchOnMobi();
      }
    });
  }
} 