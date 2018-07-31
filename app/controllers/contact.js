import Controller from '@ember/controller';
import { match, gte, and, not } from '@ember/object/computed';

export default Controller.extend({
  
	responseMessage: '',
	emailAddress: '',
	message: '',

	isValidEmail: match('emailAddress', /^.+@.+\..+$/),
	isMessageLongEnough: gte('message.length', 5),
	
	isValid: and('isValidEmail', 'isMessageLongEnough'),
	isNotValid: not('isValid'),

    actions: {

		saveMessage() {
			// alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
			this.set('responseMessage', 
			`Thanks. We got your message and we will get in touch soon. Email: ${this.get('emailAddress')} 
			Message: ${this.get('message')}`);

			this.set('emailAddress', '');
			this.set('message', '');
		}
	}
	
});