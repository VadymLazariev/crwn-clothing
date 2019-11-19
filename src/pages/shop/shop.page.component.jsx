import React, {Component} from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/preview-collection.component";

import './shop.styles.scss';

class ShopPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const {collections} = this.state;

    return (
      <div className='shop-page'>
        {
          collections
            .filter( (item, idx) => idx < 4)
            .map(( { id, ...otherCollectionProps } ) => {
            return <CollectionPreview key={id} {...otherCollectionProps}/>
          })
        }
      </div>
    );
  }
}

export default ShopPage;
