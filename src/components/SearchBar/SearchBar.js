import React, {Component} from 'react';
import Youtube from '../../API/Youtube';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
 
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
              <SearchIcon className="Search-button"/>
            </label>
            {/* <input className="Sbutton" type="submit" value="Search"/> */}
           
            < MicNoneOutlinedIcon/>
          </form>
        );
    }
}

export default SearchBar;