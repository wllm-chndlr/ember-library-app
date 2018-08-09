import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('contact');
    },

    actions: {
        saveNewMessage(newMessage) {
            newMessage.save().then(() => this.transitionTo('contact'));
        },
        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
