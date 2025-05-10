import Alpine from 'alpinejs';

export const navigation = () => ({
  mobileMenuOpen: false,
  knowYourHomeMenu: false,
  manageFinancesMenu: false,
  isNavFixed: false,
  isAtBottom: false,
  headerHeight: 0,
  navOffset: 0,

  init() {
    this.headerHeight = this.$refs.header.offsetHeight;
    this.navOffset = this.$refs.nav.offsetTop;
    
    this.handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      this.isAtBottom = (scrollTop + windowHeight) >= documentHeight;
      this.isNavFixed = !this.isAtBottom && scrollTop > (this.navOffset - this.headerHeight);
    };

    window.addEventListener('scroll', this.handleScroll);
  },

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
});