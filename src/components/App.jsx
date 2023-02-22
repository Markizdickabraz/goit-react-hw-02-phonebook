
import React ,{Component} from "react";
import ContactForm from "./form";


class App extends Component {

  state = {
    contacts: []
  }

  formSubmitHandler = (data) => {
    console.log(data)
    this.setState(prevState =>{
      return {
        contacts: [...prevState.contacts, {...data},],
    }

    })
  }

 
  
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
};

export default App;