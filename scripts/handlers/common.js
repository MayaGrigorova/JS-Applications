import { NO_VALUE } from './../utils.js';
import { requester } from './../services/app-service.js';

export async function applyCommon() {
    /** 
     * Gets data about the user and adds it the context
     */
    this.email = sessionStorage.getItem('email');
    this.loggedIn = !!sessionStorage.getItem('token');


    /**
     * Applies hbs templates
     */
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

}