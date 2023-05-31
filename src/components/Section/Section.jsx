import React from "react";
import PropTypes from 'prop-types';

const Section = (title) => {
  return (
    <section>
        <h2>{title}</h2>
    </section>
  )
}

Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  }

export default Section;