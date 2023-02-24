
import React ,{Component} from "react";
import ContactForm from "./form";
import ContactList from "./contactList";
import Filter from "./filter";
import GlobalStyle from "./globalStyled";

class App extends Component {

  state = {
   contacts: [],
    filter: ''
  }
  
deleteClick = (name) => {
      this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }
    ));
  }



  formSubmitHandler = (data) => {
    const filterdContacts = this.state.contacts.map(contact => contact.name);
    const someName = filterdContacts.some(name => name === data.name)
    console.log(someName)
    if (someName) {
      return alert('aaaaa');
    } 
    else {
          this.setState(prevState => {
        return {
        contacts: [...prevState.contacts, {...data},],
      }
}
      )
}
  }

  chengeFilter = e => {
     this.setState({ filter: e.currentTarget.value })
  }
  
  render() {
    const {filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredComponents = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <ContactList items={filtredComponents} onDeleteClick={this.deleteClick} />
      </div>
    );
  }
};

export default App;