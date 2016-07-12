import React, { Component, PropTypes } from 'react'
import { Link, hashHistory } from 'react-router'
import { reduxForm } from 'redux-form'
import Calendar from 'react-input-calendar'


class CreateActivity extends Component {



  render() {
    const { fields: {title, subtitle, description, activityStart, activityEnd, formattedAddress, numberRequired, tasks, uid, attendeeIds}, handleSubmit} = this.props

    return (
      <div>
        <Link to='/'><h1>Home</h1></Link>
        <form onSubmit={() => {
            handleSubmit()
            hashHistory.push('event-list')}}>
          <div>
            <label>Title: </label>
            <input type="text" placeholder="title" {...title}/>
          </div>
          <div>
            <label>Subtitle: </label>
            <input type="text" placeholder="subtitle" {...subtitle}/>
          </div>
          <div>
            <label>Description: </label>
            <textarea type="text" placeholder="description" {...description}></textarea>
          </div>
          <div>
            <label>Activity Start: </label>
            <Calendar format='DD/MM/YYYY' date={'4-12-2014'} {...activityStart} />
          </div>
          <div>
            <label>Activity End: </label>
            <input type="text" placeholder="activity end" {...activityEnd}/>
          </div>
          <div>
            <label>Address: </label>
            <input type="text" placeholder="address" {...formattedAddress}/>
          </div>
          <div>
            <label>Number of Volunteers Requested: </label>
            <input type="text" placeholder="number" {...numberRequired}/>
          </div>
          <div>
            <label>Tasks: </label>
            <input type="text" placeholder="tasks" {...tasks}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CreateActivity = reduxForm({
  form: 'createActivityForm',
  fields: ['title', 'subtitle','description', 'activityStart', 'activityEnd', 'formattedAddress', 'numberRequired', 'tasks', 'uid', 'attendeeIds'], initialValues: {uid: '1'}
})(CreateActivity)

export default CreateActivity
