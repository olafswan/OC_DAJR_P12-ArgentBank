import AccountOverview from "./AccountOverview";

export default function Dashboard() {


  const mockedAccounts = [
		{
			title: 'Checking (x8349)',
			amount: '2,082.79',
			description: 'Available'
		},
		{
			title: 'Savings (x6712)',
			amount: '10,928.42',
			description: 'Available'
		},
		{
			title: 'Checking (x8349)',
			amount: '184.30',
			description: 'Current'
		}
	]

  return (
    <main className="main dashboard bg-grey">

      <h1>Welcome back</h1>

      <div className="accounts-wrapper">
        {mockedAccounts.map((account, i) => (<AccountOverview account={account} key={i}/>))}
      </div>

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