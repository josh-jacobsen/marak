import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div>
    <Link to='/'><h1>Home</h1></Link>
    <Link to='event-list'><button>Event List</button></Link>
    <Link to='new-event'><button>New Event </button></Link>
    <Link to='event-details'><button>Event details</button></Link>

    <div id='reducer-test-div'>

    </div>
  </div>
)
