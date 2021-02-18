import React, {Component} from 'react';
import Youtube from '../../API/Youtube';
import './SearchBar.css';
 
class SearchBar extends Component {  
state = {
  searchWord: ''
}

handleChange = (event) => {
this.setState({ searchWord: event.target.value })}

handleSubmit = (event) => {
  const {searchWord} = this.state;
  const {onFormSubmit} = this.props;

  onFormSubmit(searchWord);
  event.preventDefault();
}

render() {
        return(
            <form className="Searchbar" onSubmit={this.handleSubmit}>
            <label>
              <input className="Search" type="text" name="name" placeholder="Search..." onChange={this.handleChange}/>
            </label>
            <input className="Sbutton" type="submit" value="Search"/>
          </form>
        );
    }
}

export default SearchBar;