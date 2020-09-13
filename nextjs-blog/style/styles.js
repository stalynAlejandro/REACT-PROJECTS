import { StyleSheet } from 'aphrodite';

const breakpoints = {
    small: '@media (max-width: 639px)',
    medium: '@media (max-width: 1047px)',
    large: '@media (min-width: 1048px)',
  };

const styles = StyleSheet.create({
    
    container:{
        minHeight:'100vh',
        paddingTop: 0,
        paddingBottom: '0.5rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },

    nav_Container:{
        display:'flex',
        displayDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        maxWidth: 1240,
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    title:{
        color:'#1A5276'
    }
})

export default styles

