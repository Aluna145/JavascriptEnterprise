import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

const styles = {

	gridBoard: {
		borderRadius: '3px',
		minHeight: '82vh',
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 16,
		marginTop: 20,
		padding:20,
		background: 'white'
	},
	gridBack: {
		// objectFit: 'cover',
		backgroundSize: 'cover',
		// filter: blur(100),
		marginBottom: 10,
		// background: 'linear-gradient(to top, #66ccff 0%, #ff99cc 100%)'
		backgroundImage: `url('https://www.vactualpapers.com/wallpapers/a-beautiful-sunset-by-the-beach-nature-landscape-4k-wallpaper/download/5120x2880.jpg')`,

		// background: 'linear-gradient(to top, #66ccff 0%, #ff99cc 100%)'
	},
};
export const About = () => (
	<Grid container spacing={0}
	      alignItems="center"
	      justify="center" style={styles.gridBack}
	>
		<Grid container spacing={24}
		      alignItems="center"
		      justify="center" style={styles.gridBoard}
			// style={{ minHeight: '100vh' }}
		>
			<Grid>
				<Typography component="h2" variant="h1" gutterBottom>
					TIBO
				</Typography>
				<Typography variant="h3" gutterBottom>
					Travel Inspiration BOard
				</Typography>
				<Typography variant="h6" gutterBottom>
					Here you can add (follow) cities that you plan to visit,
					see and compare information from different cities to decide your next trip. Not enought inspiration
					to visit this or that city? Go and see pictures.
				</Typography>
				<Typography variant="h3" gutterBottom>
					What you can do now?
				</Typography>

					<Typography variant="h5" gutterBottom>
						For now you can add (follow) city card and see next information:
					</Typography>
				<Typography variant="h6" gutterBottom>
					•   picture with views of city<br/>
					•   country<br/>
					•   monthly weather<br/>
					•   current weather<br/>
					•   currency<br/>
					•   official language<br/>
					•   current date and time<br/>
					•   approximate flight cost from your location to desired city and dates for this cost<br/>
					Also, if you don't like city anymore, you can unfollow (delete from your board)
					<br/>
				</Typography>
					<Typography variant="h5" gutterBottom>For future you will</Typography>
				<Typography variant="h6" gutterBottom>
					•   see weather monthly graph to plan your farther trips<br/>
					•   see more city pictures, life videos<br/>
					•   see upcoming events<br/>
					•   see unsafe places (which will be highlighted in red), recommended places (which will be highlighted in blue; "recommendedness" based on system data: cost, weather, city traffic, etc.)<br/>
					•   compose your travel history (we plan to add worldwide map)<br/>
					•   choose date "TO FROM" yourself<br/>
					•   filter ticket cost: "the cheapest flight ticket", "flight ticket with luggage"<br/>
					•   change design themes<br/>
					•   for the distant future you will:<br/>
					•   add the information you consider necessary to the city cards; Perhaps your card will be the most
					informative and will be liked by other users.
				</Typography>

			</Grid>
		</Grid>
	</Grid>

);

About.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
	news: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	theme: PropTypes.oneOf(['dark', 'light'])
};

About.defaultProps = {
	title: 'News app'
};