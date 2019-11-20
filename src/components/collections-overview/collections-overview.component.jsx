import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => {
  return (
    <div className="collections-overview">
      {
        collections
          .filter( (item, idx) => idx < 4)
          .map(( { id, ...otherCollectionProps } ) => {
            return <CollectionPreview key={id} {...otherCollectionProps}/>
          })
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
