import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const CardRecipe = ({recipe}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));
    

    const classes = useStyles();
      const [expanded, setExpanded] = React.useState(false);
    

    return (
        <div>
             <Card className={classes.root} style={{backgroundColor:'#E8E8E8'}}>
                    <CardHeader
                      color="primary"
                      title={recipe.name}
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {recipe.id}
                        </Avatar>
                      }
                    />
                    <CardMedia
                    className={classes.media}
                    image={recipe.image}
                    />
                    <CardContent>
                     <Typography paragraph>
                       Category: {recipe.category}
                     </Typography>
                    </CardContent>
                    <CardContent>
                     <Typography paragraph>
                       Label: {recipe.label}
                     </Typography>
                    </CardContent>
                    <CardContent>
                     <Typography paragraph>
                       Price: {recipe.price}$
                     </Typography>
                    </CardContent>
                    <CardContent>
                     <Typography paragraph >
                       Description: {recipe.description}
                     </Typography>
                    </CardContent>
                    <CardContent>
                            <Link to={`recipe/${recipe.id}`}><Button className="btn btn-block" color="green">View</Button></Link>
                    </CardContent>
                </Card>
        </div>
    )
}
export default CardRecipe