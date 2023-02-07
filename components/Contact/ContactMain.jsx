import React, { Component } from 'react';
import GetInTouch from './GetInTouchSection';
import Knowledge from './KnowledgeSection';


class ContactMain extends Component {

    render() {

        return (
            <main>
	        

                {/* Getintouch-start */}
				<GetInTouch />
				{/* Getintouch-end */}

                {/* Getintouch-start */}
				<Knowledge />
				{/* Getintouch-end */}

        	</main>
        );
    }
}

export default ContactMain;