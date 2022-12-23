members = [{
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            //we already have one data property members
            //we make new data property below
            newMember: {
                // fname: null,
                // lname: null,
                // instrument: null
                //no need to write
                //properties vuejs will do the
                //work automatically.
            }
        }
    },
    methods: {
        addMember: function() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                //for empty fields not to be added.
                this.members.push(this.newMember);
                //this keyword is used to access
                //our data properties.
                //by above newMember object is pushed 
                //to the end of the array and hence 
                //added to the array.
                this.newMember = {};
                //newMember's object becomes null or empty
                //after we make new object
                //and helps in making new object.

            } else {
                alert("PLS. FILL ALL FIELDS.")
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');