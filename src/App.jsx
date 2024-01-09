import React from 'react';
import { Container } from 'react-bootstrap';
import Card from './Card'; // Importing the Card component
import './App.css';

const App = () => {
  // Subscription data for three different plans
  const subscriptionData1 = {
    subscriptionType: { name: 'FREE', hasAccess: true },
    monthlyCost: { amount: "$0/month", hasAccess: true },
    singleUser: { value: "single user", hasAccess: true },
    storage: { size: '50GB Storage', hasAccess: true },
    publicProjects: { limit: 'Unlimited public Projects', hasAccess: true },
    communityAccess: { value: "community Access", hasAccess: true },
    privateProjects: { limit: 'Unlimited private Projects', hasAccess: false },
    phoneSupport: { type: 'Dedicated Phone support', hasAccess: false },
    freeSubdomain: { value: "free Subdomain", hasAccess: false },
    monthlyStatusReport: { description: 'Monthly status report', hasAccess: false },
  };

  const subscriptionData2 = {
    subscriptionType: { name: 'PLUS', hasAccess: true },
    monthlyCost: { amount: "$9/month", hasAccess: true },
    singleUser: { value: "5 user", hasAccess: true },
    storage: { size: '50GB', hasAccess: true },
    publicProjects: { limit: 'Unlimited public Projects', hasAccess: true },
    communityAccess: { value: "community Access", hasAccess: true },
    privateProjects: { limit: 'Unlimited private Projects', hasAccess: true },
    phoneSupport: { type: 'Dedicated Phone support', hasAccess: true },
    freeSubdomain: { value: "free Subdomain", hasAccess: true },
    monthlyStatusReport: { description: 'Monthly status report', hasAccess: false },
  };

  const subscriptionData3 = {
    subscriptionType: { name: 'PRO', hasAccess: true },
    monthlyCost: { amount: "$49/month", hasAccess: true },
    singleUser: { value: "Unlimited user", hasAccess: true },
    storage: { size: '50GB', hasAccess: true },
    publicProjects: { limit: 'Unlimited public Projects', hasAccess: true },
    communityAccess: { value: "community Access", hasAccess: true },
    privateProjects: { limit: 'Unlimited private Projects', hasAccess: true },
    phoneSupport: { type: 'Dedicated Phone support', hasAccess: true },
    freeSubdomain: { value: "free Subdomain", hasAccess: true },
    monthlyStatusReport: { description: 'Monthly status report', hasAccess: true },
  };

  return (
    <div className='mt-5'>
      <Container>
        {/* Heading for the React Price Card Task */}
        <h1 className='text-center h2'>React Price Card Task</h1>
        {/* Subheading with instructions */}
        <h6>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</h6>
      </Container>

      {/* Container for displaying subscription cards */}
      <Container className='bg-primary d-flex justify-content-around w-100 h-100vh align-items-center flex-wrap'>
        {/* Displaying subscription cards using the Card component */}
        <Card subscriptionData={subscriptionData1} />
        <Card subscriptionData={subscriptionData2} />
        <Card subscriptionData={subscriptionData3} />
      </Container>
    </div>
  );
};

export default App; // Exporting the App component
