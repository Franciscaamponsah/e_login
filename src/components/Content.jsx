import React from 'react'
import Card from './Card';

const Content = () => {
  return (
    <div className=" border border-bg-[#D0D5DD] grid px-[0.938rem] pt-[3.938rem] overflow-auto">
      <Card
        name="Share holder"
        percentage="100%"
        number="2,000"
        icon="/icons/sprite.svg#icon-dots"
      />
      <Card
        name="Authorized shares"
        percentage="100%"
        number="2,000"
        icon="/icons/sprite.svg#icon-dots"
      />
      <Card
        name="Share price"
        percentage="100%"
        number="2,000"
        icon="/icons/sprite.svg#icon-dots"
      />
      <Card
        name="Issueed shares"
        percentage="100%"
        number="2,000"
        icon="/icons/sprite.svg#icon-dots"
      />
      <Card
        name="Expected market value"
        percentage="100%"
        number="2,000"
        icon="/icons/sprite.svg#icon-dots"
      />
      <Card
        name="Total transaction value"
        percentage="100%"
        number="2,000"
        icon="/icons/sprite.svg#icon-dots"
      />
    </div>
  );
}

export default Content