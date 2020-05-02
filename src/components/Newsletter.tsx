import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

import { addMinutes } from '../helpers';

interface IState {
    isHidden: Boolean,
    documentHeight: number
}

class Newsletter extends React.Component {
    public state: IState = { isHidden: true, documentHeight: 0 };

    public setHidden = (isHidden: Boolean): void => {
        this.setState({ isHidden });
    }

    public detectScrollPosition = (): void => {
        const { documentHeight } = this.state;
        const currentScrollPos: number = window.pageYOffset;
        // check cookie if exists
        const isHiddenTemporary = Cookies.get('newsletter_hidden');
        if (!isHiddenTemporary) {
            // if scroll position is more than one-third of page height
            // then show the newsletter and remove scroll event listener
            if (currentScrollPos >= (documentHeight / 3)) {
                this.setHidden(false);
                window.removeEventListener('scroll', this.detectScrollPosition);
            }
        }
    }

    public setNewsletterHidden = (): void => {
        // add 10 minutes to current date time
        const currentDate = new Date();
        const expires = addMinutes(currentDate, 10);

        // set cookie for 10 minutes
        Cookies.set('newsletter_hidden', '1', {
            expires
        })
        this.setHidden(true);
    }

    componentDidMount() {
        this.setState({
            documentHeight: document.body.clientHeight
        }, () => {
            window.addEventListener('scroll', this.detectScrollPosition);
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.detectScrollPosition);
    }

    render() {
        const { isHidden } = this.state;
        return (
            <div className={`newsletter${isHidden ? ' hidden' : ''}`}>
                <div className="close">
                    <FontAwesomeIcon icon={faTimes} onClick={this.setNewsletterHidden} />
                </div>
                <div className="content">
                    <h1>Get latest updates in web technologies</h1>
                    <p>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</p>
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <input className="form-control" id="email" placeholder="Email address" />
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <button className="btn btn-warning">Count me in!</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Newsletter;