// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
//   subheader: {
//     width: '100%',
//   },
// });

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     cols: 2,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */

// const logos = [
//   {
//     title: 'HTML 5',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/html.svg',
//     cols: 1,
//   },
//   {
//     title: 'CSS',
//     // img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/css.svg',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/css.png',
//     // img: 'https://s3-us-west-2.amazonaws.com/tvc-events/IMG_20180604_114209837.jpg',
//     cols: 1,
//   },
//   {
//     title: 'JavaScript',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/javascript.svg',
//     cols: 1,
//   },
//   {
//     title: 'React',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/react.svg',
//     cols: 1,
//   },
//   {
//     title: 'Node',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/nodejs.svg',
//     cols: 1,
//   },
//   {
//     title: 'MongoDB',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/mongodb.svg',
//     cols: 1,
//   },
//   {
//     title: 'Express',
//     img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/express.svg',
//     cols: 1,
//   },
// ]


// function ImageGridList(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {logos.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// ImageGridList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ImageGridList);