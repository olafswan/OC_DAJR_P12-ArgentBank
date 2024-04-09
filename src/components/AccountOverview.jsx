export default function AccountOverview({account}) {

  console.log("📋", account );

  return (

      

      <div className="account">
        <div className="account-content-wrapper">
          <p className="account-title">{`Argent Bank ${account.title}`}</p>
          <p className="account-amount">{`$ ${account.amount}`}</p>
          <p className="account-amount-description">{`${account.description} Balance`}</p>
        </div>
        <button className="transaction-button">View transactions</button>


      </div>

     

  );
}
