import axios from 'axios';
import mockCustomerContact from '../mock/mockCustomerContact';

export const loadContacts = ({companyId=1, customerId=1}) => {
    console.log(companyId, customerId)
    return axios.get(`http://localhost/api/c/${companyId}/customer/${customerId}/contact`)
    .then(function(response) {
        return response.data
    });
}