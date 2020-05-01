import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../store';

const mapStateToProps = ({ main }: IRootState) => {
    const { name } = main;
    return { name };
}

type ReduxType = ReturnType<typeof mapStateToProps>

class Footer extends React.Component<ReduxType> {
    render() {
        const { name } = this.props;
        return (
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2020 {name}. All rights reserved.</p>
                </div>
            </footer>
        )
    }
}

export default connect(mapStateToProps)(Footer);