import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';


export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: this.props.data.filters[0]}
    this.selectFilter = this.selectFilter.bind(this)
    this.projectsList = this.props.data.projects
    this.filters = this.props.data.filters
  }


  selectFilter(event) {
    try {
      document.querySelector('.active_filter').classList.toggle('active_filter')
    }
    catch {}
    this.setState(state => ({
      selected: event.target.textContent
    }))


    event.target.classList.toggle('active_filter')
  }

  render() {
    const projects = this.state.selected === this.filters[0] ? this.projectsList : this.projectsList.filter(item => item.category === this.state.selected);
    return (
      <div className='main'>
          {this.state.selected}
          <Toolbar
            filters={this.props.data.filters}
            selected={this.state.selected}
            onSelectFilter={(filter) => this.selectFilter(filter)}/>
          <ProjectList projects = {projects}/>
      </div>
    )
  }
}
