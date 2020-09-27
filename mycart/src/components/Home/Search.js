import React from 'react'

class Search extends React.Component {

    state = {
      searchTerm: ""
    }

    onChange = (e) => {
      e.persist()
      this.setState(() => ({
        searchTerm: e.target.value
      }))
    };

    submitHandler = (e) => {
      e.preventDefault()
      this.props.submitHandler(this.state)
    }
    
    render() {
    
      return (
        <form className="search" onSubmit={this.submitHandler}>
             <input
                type="text"
                placeholder="search"
                value={this.state.searchValue}
                onChange={this.onChange}
             ></input>
        </form>
      );
    }
}

export default Search