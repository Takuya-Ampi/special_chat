import React from 'react';

interface HeadlineProps {
  pageTitle: string;
};

export const Headline: React.FC<HeadlineProps> = props => {
  return (
    <h1>{props.pageTitle}</h1>
  )
}
