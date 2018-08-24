
export const styles = theme =>  {
  return ({
    icon: {
      color: 'transparent',
      background: 'linear-gradient(80deg, #F79533,#F37055)',
    },
    divider: {
      margin: '50px 0 40px 0',

      // backgroundColor: 'blue',
      [theme.breakpoints.down('sm')]: {
        // margin: '20%, 0 20% 0',
        margin: '50px 0 40px 0',
      },
      [theme.breakpoints.down('lg')]: {
        margin: '20%, 0 20% 0',
        // margin: '10px 0 10px 0',
      },
    }
  })
}