import FeatureItem from "./FeatureItem";

export default function Features() {

  const featList = 
  [
    {
    title: "You are our #1 priority", 
    img: "icon-chat", 
    alt: "Chat Icon", 
    text: `Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`
    },
    {
    title: "More savings means higher rates", 
    img: "icon-money", 
    alt: "Money Icon", 
    text: `The more you save with us, the higher your interest rate will be!`
    },
    {
    title: "Security you can trust", 
    img: "icon-security", 
    alt: "Security Icon", 
    text: `We use top of the line encryption to make sure your data and money is always safe.`
    },
  ]

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featList.map(feat => (<FeatureItem feat={feat} key={feat.title}/>))}

      </section>
  );
}

// import chat from "../assets/img/icon-chat.png";
// import money from "../assets/img/icon-money.png";
// import security from "../assets/img/icon-security.png";


// export default function Features() {

//   return (
//     <section className="features">
//         <h2 className="sr-only">Features</h2>
//         <div className="feature-item">
//         <img src={chat} alt="Chat Icon" className="feature-icon" />
//           <h3 className="feature-item-title">You are our #1 priority</h3>
//           <p>
//             Need to talk to a representative? You can get in touch through our
//             24/7 chat or through a phone call in less than 5 minutes.
//           </p>
//         </div>
//         <div className="feature-item">
//         <img src={money}
//             alt="Money Icon"
//             className="feature-icon"
//           />
//           <h3 className="feature-item-title">More savings means higher rates</h3>
//           <p>
//             The more you save with us, the higher your interest rate will be!
//           </p>
//         </div>
//         <div className="feature-item">
//           <img src={security}
//             alt="Security Icon"
//             className="feature-icon"
//           />
//           <h3 className="feature-item-title">Security you can trust</h3>
//           <p>
//             We use top of the line encryption to make sure your data and money
//             is always safe.
//           </p>
//         </div>
//       </section>
//   );
// }