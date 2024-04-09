// import AccountOverview from "./AccountOverview";

export default function AccountHistory({Account}) {


  const mockedAccount =
		{
			informations: {
        title: 'Checking (x8349)',
        amount: '2,082.79',
        description: 'Available'
      },
			history: [{
        date: 'June 20th, 2020',
        description: 'Golden Sun Bakery',
        amount: '55.00',
        transactionType: 'electronic',
        category: 'food',
        notes: ''
      },
      {
        date: 'June 20th, 2020',
        description: 'Sofitel',
        amount: '2291.00',
        transactionType: 'electronic',
        category: 'hotel',
        notes: ''
      },
      {
        date: 'June 20th, 2020',
        description: 'Cappucino',
        amount: '27.00',
        transactionType: 'electronic',
        category: 'food',
        notes: ''
      }]
		}



  return (
    <main className="main dashboard bg-grey">

      <div className="account account-history">
        <div className="account-content-wrapper">
          <p className="account-title center">{`Argent Bank ${mockedAccount.informations.title}`}</p>
          <p className="account-amount center">{`$ ${mockedAccount.informations.amount}`}</p>
          <p className="account-amount-description center">{`${mockedAccount.informations.description} Balance`}</p>
        </div>
      </div>



      {/* <div className="accounts-wrapper">
        {mockedAccount.map((account, i) => (<AccountOverview account={account} key={i}/>))}
      </div> */}

      {/* <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div> */}

    </main>
  );
}