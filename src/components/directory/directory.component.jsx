import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {
        sections.map( ({id, ...otherSectionProps} ) => {
          return <MenuItem key={id} {...otherSectionProps}/>
        })
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
