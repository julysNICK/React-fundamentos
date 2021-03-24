import P from 'prop-types';
import React from 'react';

export const PostCard = ({ cover, title, id, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div key={id} className="post-content">
        <h1>
          {' '}
          {title} {id}
        </h1>{' '}
        <p> {body} </p>
      </div>
    </div>
  );
};
PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
