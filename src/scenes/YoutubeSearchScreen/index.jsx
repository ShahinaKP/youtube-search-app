import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './style';

import SearchBarComponent from '../../components/SearchBarComponent';
import ResultsComponent from '../../components/ResultsComponent';
import DetailsComponent from '../../components/DetailsComponent';

const mapStateToProps = state => ({
    list: state.SearchListReducer.searchList
});

class YoutubeSearchScreen extends Component {
    render() {
        return (
            <div className={css(styles.appWrap)}>
                <SearchBarComponent />
                <div className={css(styles.mainWrap)}>
                    <ResultsComponent />
                    <DetailsComponent />
                </div>
            </div>
        );
    }
}

YoutubeSearchScreen.propTypes = {
    list: PropTypes.object
}

export default connect(mapStateToProps)(YoutubeSearchScreen);
