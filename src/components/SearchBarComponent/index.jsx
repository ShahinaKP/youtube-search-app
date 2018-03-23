import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { css } from 'aphrodite';
import styles from './style';

import { listSearchResult, listSearchFailure } from './actions'
import { getVideoDataFailure } from '../ResultsComponent/actions'

const mapStateToProps = state => ({
    list: state.SearchListReducer.searchList,
    metaData: state.VideoMetaReducer.metaData
});

const mapDispatchToProps = dispatch => ({
    listSearchResult: searchText => dispatch(listSearchResult(searchText)),
    listSearchFailure: () => dispatch(listSearchFailure()),
    clearMetaDetails: () => dispatch(getVideoDataFailure())
})

class SearchBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    searchByText(event) {
        this.setState({ searchText: event.target.value });
        if (event.target.value.length > 2) {
            this.props.listSearchResult(event.target.value);
        } else {
            this.props.listSearchFailure();
            this.props.clearMetaDetails();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value={this.state.searchText}
                    onChange={(e) => { this.searchByText(e) }}
                    placeholder="Search Videos..."
                    className={css(styles.searchBar)}
                />
            </div>
        );
    }
}

SearchBarComponent.propTypes = {
    listSearchResult: PropTypes.func,
    listSearchFailure: PropTypes.func,
    clearMetaDetails: PropTypes.func
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBarComponent)
