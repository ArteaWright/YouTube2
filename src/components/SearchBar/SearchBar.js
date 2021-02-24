import React, {Component} from 'react';
import Youtube from '../../API/Youtube';
import SearchIcon from '@material-ui/icons/Search';
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
          <label className="Search-contain">
            <input className="Search" type="text" name="name" placeholder="Search..." onChange={this.handleChange}/>
              <button className="Search-button">
              <SearchIcon/> 
              </button>
          </label>

          </form>
        );
    }
}

export default SearchBar;