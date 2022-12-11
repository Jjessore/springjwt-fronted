import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService.js';

const INSTRUCTOR = 'in28minutes'

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: '',
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    this.setState({ courses: response.data })
                }
            )
    }


    render() {
        return (
            <div>
                <h1> {this.state.courses} </h1>
            </div>

        )
    }
}

export default ListCoursesComponent
