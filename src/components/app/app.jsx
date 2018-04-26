import React,{Component} from 'react';
import styles from './app.scss';
import image  from '../../images/deadpool.jpeg'
import image2  from '../../images/deadpool2.jpeg'




class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h2>Sup</h2>
                <div><img src={image}/></div>
                  <div><img src={image2}/></div>
            </div>
        );
    }
}

export default App;
