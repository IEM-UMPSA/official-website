import React, { Component } from 'react';

class PaginationSection extends Component {

    render() {
        const { pageCount } = this.props;
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(
                <li key={i} className={i === 2 ? 'active' : ''}>
                    <a href="#">
                        <span>{i}</span>
                    </a>
                </li>
            );
        }

        return (
            <div className="row">
                <div className="col-xxl-12">
                    <div className="basic-pagination wow fadeInUp mt-30" data-wow-delay=".2s">
                        <ul className="d-flex align-items-center"> 
                            <li className="prev">
                                <a href="#" className="link-btn link-prev">
                                Prev
                                <i className="fas fa-arrow-left"></i>
                                <i className="fas fa-arrow-left"></i>
                                </a>
                            </li>
                            {pages}
                            <li className="next">
                                <a href="#" className="link-btn">
                                Next
                                <i className="fas fa-arrow-right"></i>
                                <i className="fas fa-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaginationSection;
