import { actions } from '../helpers/actions';

export enum SortOptions {
  NAME_AZ = 'Name (A to Z)',
  NAME_ZA = 'Name (Z to A)',
  PRICE_LOW_HIGH = 'Price (low to high)',
  PRICE_HIGH_LOW = 'Price (high to low)',
}

export class SortView {
  get sortOptionsContainer(): ChainablePromiseElement {
    return $('~Selector container');
  }

  getFilterOptionByText(optionText: string): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="${optionText}"]`);
  }

  async selectSortOption(option: SortOptions): Promise<void> {
    await actions.click(this.getFilterOptionByText(option));
    await actions.waitUntilHidden(this.getFilterOptionByText(option));
  }
}
