class HzTableRowController {
  $onInit() {
    this.headings = this.parent.getHeadings();
    this.count = 0;
  }
  getHeadings() {
    return this.headings;
  }
  getPlaceInList() {
    return this.count++;
  }
}
export default HzTableRowController;
