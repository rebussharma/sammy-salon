import axios from 'axios';

const URL = "http://localhost:8080/api/employees"

const REST = () => {
    function getEmployees(){
        return axios.get(URL).then(response=>response.data);
    }
}

export default REST