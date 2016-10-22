class HzTableController {
  $onInit() {
    this.dynamicClass = 'hz-table__heading--col-' + this.headings.length;
  }
  getHeadings() {
    return this.headings;
  }
}
export default HzTableController;
