import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    detailsWrap: {
        border: '1px solid #a9a9a9',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '55%',
        height: '100%',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: '5%',
        fontFamily: 'sans-serif',
        paddingTop: 10
    },
    title: {
        fontSize: 20,
        paddingLeft: 20
    },
    detailsDiv: {
        display: 'flex',
        margin: '40px 20px'
    },
    detailsImg: {
        width: '35%',
        height: 120,
        maxHeight: '80%',
    },
    detailsTextWrap: {
        width: '60%',
        marginLeft: '5%',
        fontWeight: 600
    },
    detailsDesc: {
        fontWeight: 'normal',
        wordBreak: 'break-word'
    }
})

