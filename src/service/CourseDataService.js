import axios from 'axios'
import AuthenticationService, { ATTRIBUTE_SESSION_TOKEN } from './AuthenticationService';

const INSTRUCTOR = 'in28minutes'
const PASSWORD = 'dummy'
const COURSE_API_URL = 'http://localhost:8080'
//const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        
        return axios.get(`${COURSE_API_URL}/hello`
        
        ).then((response) => {console.log(response.data)});

    }
}

export default new CourseDataService()
