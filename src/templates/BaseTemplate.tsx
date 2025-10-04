'use client';
import * as React from 'react';
import Header from './Header';

export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};
