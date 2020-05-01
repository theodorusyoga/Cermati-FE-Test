import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { IRootState } from '../store';
import { Actions } from '../store/types';
import * as actions from '../actions';

const mapStateToProps = ({ main }: IRootState) => {
    const { highlights } = main;
    return { highlights };
}

const mapDispatcherToProps = (dispatch: Dispatch<Actions>) => {
    return {
        getHighlights: () => dispatch(actions.getHighlights())
    }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

class Hero extends React.Component<ReduxType> {
    componentDidMount() {
        const { getHighlights } = this.props;
        getHighlights();
    }

    render() {
        const { highlights } = this.props;
        return (
            <div className="highlights">
                <div className="title container">
                    <h1>How Can I Help You?</h1>
                    <p>Our work then targeted, best practices outcomes social innovation synergy. Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
                </div>
                <div className="content container">
                    <div className="row">
                        {
                            _.map(highlights, (highlight) => (
                                <div key={highlight.title} className="content-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="content-box">
                                        <FontAwesomeIcon icon={highlight.icon} />
                                        <h3>{highlight.title}</h3>
                                        <p>{highlight.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Hero);