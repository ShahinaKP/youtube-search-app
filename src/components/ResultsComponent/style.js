import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    resultsWrap: {
        border: '1px solid #a9a9a9',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '40%',
        height: '100%',
        fontSize: 16,
        textAlign: 'left',
        paddingTop: 10,
        fontFamily: 'sans-serif'
    },
    title: {
        fontSize: 20,
        paddingLeft: 20
    },
    resultsList: {
        overflowY: 'auto',
        height: '87%',
        margin: '10px 0',
        listStyle: 'none',
        paddingLeft: 20
    },
    resultsListItem: {
        paddingBottom: 10,
        cursor: 'pointer',
        backgroundColor: '#dedede',
        marginBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        ':hover': {
            backgroundColor: 'grey',
            color: '#fff'
        }
    },
    active: {
        backgroundColor: 'grey',
        color: '#fff'
    }
})
