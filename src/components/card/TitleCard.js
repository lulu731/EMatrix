import React from 'react';
import 'tachyons';

const TitleCard = (props) => {
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h6 className="f6 bg-near-white br3 br black-60 mv0 pv2 ph3">
        {props.title}
      </h6>
    </article>
  )
};

export default TitleCard
