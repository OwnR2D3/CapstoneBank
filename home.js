function Home(){ 
    const ctx = React.useContext(UserContext);
    const name = ctx.users[0].name;
    const email = ctx.users[0].email;
  
    const greetMessage = "Home Page";
    const welcomeMessage = "Welcome to Fells Wargo!";
    const textMessage ="We are here with no security so it is easier for people to steal your money!";
    
  
    return (
      <div className="container">
        <Card 
          bgcolor="blue"
          txtcolor="black"
          header={greetMessage}
          title={welcomeMessage}
          text={textMessage}
          body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />  
      </div>
    );  
  }