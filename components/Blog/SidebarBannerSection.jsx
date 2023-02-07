import React, { Component } from 'react';

class SidebarBanner extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-55">
          
                <div className="sidebar__banner w-img mb-10">
                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/9kxxRWZoBE1ZaTYM7">
                    <img src="http://www.kaisermagazine.com/wp-content/uploads/2020/02/Submit-an-article.jpg" width="300" />
                </a>                
                </div>

                <div className="sidebar__banner w-img">
                <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/hovahyii">
                    <img src="https://github.com/appcraftstudio/buymeacoffee/raw/master/Images/snapshot-bmc-button.png" width="300" />
                </a>                
                </div>
            </div>
        );
    }
}

export default SidebarBanner;