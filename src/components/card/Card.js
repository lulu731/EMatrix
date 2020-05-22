import React from 'react';
import 'tachyons';

const Card = () => {
  return (
    <div className="flex items-center vh-100">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l
        bg-white mw5 center">
        <h1 className="f4 bold center mw5">Cats</h1>
        <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
          <li className="ph3 pv2 bb b--light-silver">What ?</li>
          <li className="ph3 pv2 bb b--light-silver">Who ?</li>
          <li className="ph3 pv2 bb b--light-silver">When ?</li>
          <li className="red ph3 pv2 bb b--light-silver">not Urgent & Important</li>
        </ul>
      </article>
    </div>
  )
};

export default Card
