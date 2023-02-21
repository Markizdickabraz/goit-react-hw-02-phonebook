import React ,{Component} from "react";



class App extends Component{

state = {
  contacts: [],
  name: ''
}

  addTocontacts(e) {
    e.preventDefault();
    
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.addTocontacts}>
          <label>Name
             <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </label>
          <button type='submit'>Add contact</button>
        </form>
      </div>
    );
  }
};

export default App;