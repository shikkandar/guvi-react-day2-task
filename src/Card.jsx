import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Card = (props) => {
  // Destructuring subscription data from props
  const {
    subscriptionType,
    monthlyCost,
    singleUser,
    storage,
    publicProjects,
    privateProjects,
    communityAccess,
    phoneSupport,
    freeSubdomain,
    monthlyStatusReport,
  } = props.subscriptionData;

  // Function to render list items with check (✓) or cross (X) based on access
  const renderListItem = (value, hasAccess = true) => (
    <li className='pt-2' style={{ opacity: hasAccess ? 1 : 0.5 }}>
      {hasAccess ? '✓' : 'X'} {value}
    </li>
  );

  // Array of list items to be rendered
  const listItems = [
    renderListItem(singleUser.value, singleUser.hasAccess),
    renderListItem(storage.size, storage.hasAccess),
    renderListItem(publicProjects.limit, publicProjects.hasAccess),
    renderListItem(communityAccess.value, communityAccess.hasAccess),
    renderListItem(privateProjects.limit, privateProjects.hasAccess),
    renderListItem(phoneSupport.type, phoneSupport.hasAccess),
    renderListItem(freeSubdomain.value, freeSubdomain.hasAccess),
    renderListItem(monthlyStatusReport.description, monthlyStatusReport.hasAccess),
  ];

  return (
    <div>
      {/* Container for the card */}
      <div className='m-5 bg-white px-5 py-3 rounded'>
        {/* Subscription type */}
        <h6 className='text-center'>{subscriptionType.name}</h6>
        {/* Monthly cost */}
        <h1 className='text-center h2'>{monthlyCost.amount}</h1>
        <hr />
        {/* List of features with check (✓) or cross (X) */}
        <ul className='m-0 p-0'>{listItems}</ul>
        {/* Button */}
        <Button className='m-2 w-100 '>BUTTON </Button>
      </div>
    </div>
  );
};

export default Card;
