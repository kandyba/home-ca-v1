import Alpine from 'alpinejs';

export const readMore = (maxLength = 100) => ({
  isExpanded: false,
  originalText: '',
  displayText: '',
  showButton: false,

  init() {
    this.originalText = this.$el.textContent.trim();
    this.showButton = this.originalText.length > maxLength;
    this.updateDisplayText();
  },

  updateDisplayText() {
    if (!this.isExpanded && this.showButton) {
      this.displayText = this.originalText.substring(0, maxLength) + '...';
    } else {
      this.displayText = this.originalText;
    }
  },

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.updateDisplayText();
  }
});