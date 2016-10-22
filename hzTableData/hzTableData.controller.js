class HzTableDataController {
  $onInit() {
    this.headings = this.parent.getHeadings();
    this.dynamicClass = 'hz-table-data--col-' + this.headings.length;

    this.placeInList = this.parent.getPlaceInList();
  }
}
export default HzTableDataController;
