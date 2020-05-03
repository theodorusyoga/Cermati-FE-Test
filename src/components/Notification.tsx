import React from 'react';

interface IState {
    isHidden: Boolean
}

class Notification extends React.Component {
    public state: IState = { isHidden: false };

    public onHidden = () => {
        this.setState({ isHidden: true });
    }

    render() {
        const { isHidden } = this.state;

        return (
            <div className={`notification-panel${isHidden ? " hidden" : ""}`} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 col-xs-12">
                            <p>
                                By accessing and using this website, you acknowledge that you have read and
                                understand our&nbsp;<a href="/">Cookie Policy</a>,&nbsp;<a href="/">Privacy Policy</a>,&nbsp;and our&nbsp;<a href="/">Terms of Service</a>.
                        </p>
                        </div>
                        <div className="col-md-2 col-sm-12 col-xs-12 notification-panel-button">
                            <button onClick={this.onHidden} type="button" className="btn btn-primary">Got it</button>
                        </div>
                    </div>
                </div>
            </ div>
        )
    }
}

export default Notification;