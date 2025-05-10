import './style.css';
import Alpine from 'alpinejs';
import Chart from 'chart.js/auto';
import { readMore } from './components/ReadMore.js';
import { navigation } from './components/Navigation.js';

window.Alpine = Alpine;

Alpine.data('readMore', readMore);
Alpine.data('navigation', navigation);

Alpine.store('app', {
  activePage: 'home',
  setActivePage(page) {
    this.activePage = page;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the donut chart
  const ctx = document.getElementById('monthlyExpensesChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Mortgage', 'Insurance', 'Property Taxes', 'Maintenance Fees'],
        datasets: [{
          data: [3500, 520, 1000, 450],
          backgroundColor: [
            '#FF603F',
            '#FF8F75',
            '#8B2E14',
            '#FFBFAF'
          ],
          borderWidth: 0,
          cutout: '60%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        layout: {
          padding: 20
        }
      },
      plugins: [{
        id: 'centerText',
        beforeDraw(chart) {
          const { ctx, chartArea } = chart;
          ctx.save();
          
          // Draw "Total" text
          ctx.font = '16px Albert Sans';
          ctx.fillStyle = '#949494';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Total', chartArea.left + chartArea.width / 2, chartArea.top + chartArea.height / 2 - 15);
          
          // Draw amount
          ctx.font = 'bold 24px Albert Sans';
          ctx.fillStyle = '#1F1F1F';
          ctx.fillText('$5,470', chartArea.left + chartArea.width / 2, chartArea.top + chartArea.height / 2 + 15);
          
          ctx.restore();
        }
      }, {
        id: 'percentageLabels',
        afterDraw(chart) {
          const { ctx, data, chartArea } = chart;
          
          // Calculate total for percentages
          const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
          
          // Get chart center and radius
          const meta = chart.getDatasetMeta(0);
          const arc = meta.data[0];
          const centerX = arc.x;
          const centerY = arc.y;
          const radius = arc.outerRadius;
          
          ctx.save();
          ctx.font = 'bold 16px Albert Sans';
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Draw percentage for each segment
          meta.data.forEach((arc, i) => {
            const value = data.datasets[0].data[i];
            const percentage = Math.round((value / total) * 100);
            
            // Calculate angle for text placement
            const startAngle = arc.startAngle;
            const endAngle = arc.endAngle;
            const midAngle = startAngle + (endAngle - startAngle) / 2;
            
            // Position text closer to the center for better visibility
            const x = centerX + Math.cos(midAngle) * (radius * 0.75);
            const y = centerY + Math.sin(midAngle) * (radius * 0.75);
            
            // Draw percentage text
            ctx.fillText(`${percentage}%`, x, y);
          });
          
          ctx.restore();
        }
      }]
    });
  }
  // Initialize the donut chart

  /*Nav scroll*/
  const el = document.querySelector('.scroll-nav-container');
  el.addEventListener('wheel', e => {
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  }, { passive: false });
  /*Nav scroll*/
});

Alpine.start();

//Manage Finances Slider
let manageFinancesSlider = null;

function toggleManageFinancesSlider() {
  const breakpoint = 1024;

  if (window.innerWidth >= breakpoint) {
    if (!manageFinancesSlider) {
      manageFinancesSlider = new Swiper('.manage-finances', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
          nextEl: '.manage-finances-next',
          prevEl: '.manage-finances-prev',
        },
      });
    }
  } else {
    if (manageFinancesSlider) {
      manageFinancesSlider.destroy(true, true);
      manageFinancesSlider = null;
    }
  }
}

window.addEventListener('DOMContentLoaded', toggleManageFinancesSlider);
window.addEventListener('resize', toggleManageFinancesSlider);


// Mortgage Management Slider
let mortgageManagementSlider = null;

function toggleMortgageManagementSlider() {
  const breakpoint = 1024;

  if (window.innerWidth < breakpoint) {
    if (!mortgageManagementSlider) {
      mortgageManagementSlider = new Swiper('.mortgage-management', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (mortgageManagementSlider) {
      mortgageManagementSlider.destroy(true, true);
      mortgageManagementSlider = null;
    }
  }
}

window.addEventListener('DOMContentLoaded', toggleMortgageManagementSlider);
window.addEventListener('resize', toggleMortgageManagementSlider);
