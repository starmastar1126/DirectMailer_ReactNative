import { IndicatorViewPager } from 'rn-viewpager';

class TabNavigator extends IndicatorViewPager {

  constructor(props) {
    super(props);

    this._setPage = this.setPage;
    this.setPage = this._overrideSetPage.bind(this);
  }

  _overrideSetPage(selectedPage) {
    if (this.props.selectable && this.props.selectable(selectedPage) === false) {
      return;
    }
    this._setPage(selectedPage);
  }
}

export default TabNavigator;
