import React, { Component } from "react";
import Youtube from "../../API/Youtube";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchWord: "",
    value: "",
  };
  constructor(props) {
    super(props);
    if (this.props.value) {
      this.state.value = this.props.value;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ searchWord: this.props.value });
    }
  }

  handleChange = (event) => {
    this.setState({ searchWord: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchWord } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchWord);
    event.preventDefault();
    document.querySelector('.outerWrap').style.display = 'none';
    document.querySelector('.sidebar-contain').style.display= 'none';
  };

  render() {
    return (
      <form className="Searchbar" onSubmit={this.handleSubmit}>
        <label className="Search-contain">
          <input
            className="Search"
            type="text"
            name="name"
            value={this.state.searchWord}
            placeholder="Search..."
            onChange={this.handleChange}
            
          />
          <button className="Search-button">
            <SearchIcon />
          </button>
        </label>
        {/* <input className="Sbutton" type="submit" value="Search" /> */}
      </form>
    );
  }
}

export default SearchBar;
