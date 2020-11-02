import { render } from '@testing-library/react';
//adding bootstrap
import'bootstrap/dist/css/bootstrap.min.css';
//react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import blue from './images/among_us_blue.png';
import purple from './images/among_us_purple.png';
import red from './images/among_us_red.png';

//Object contenant les infos profils

const profils = [
    {
        prenom: "Arthur", nom: "Jaillard", ddn: "03/03/03", pp: blue, tweet: "Yooooo",
     },
    {
        prenom: "Nabil", nom: "Chebili", ddn: "05/05/05", pp: purple, tweet: "Faut jamais twitter toutes ses pensées sur twitter",
    },
    {
        prenom: "Akram", nom: "Sahraoui", ddn: "08/08/08", pp: red, tweet: "Salut Elon Muskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
    }
];

//Couleurs pour le background profil
const colors=['white', 'blue', 'red'];

//Partie principale d'affichage

class Main extends React.Component {
     //constructor
     constructor(props){
        super(props);
        this.state = { numero: 0, numColor: 0 };
        
    }

    handleClick(i) {
        this.setState({numero: i});
    }

    //Bouton intéractif
    Button(i) {
        return (
            <button className = "boutonProfil" type="button" onClick={ () => this.handleClick(i)}>
                {profils[i].prenom}
             </button>
        );
    }

    handleClick2() {
        if (this.state.numColor>1) {
            this.setState({numColor: 0}); 
        }
        else {
            this.setState({numColor: this.state.numColor+1});
        }
        

    }

    //Affiche profil
    Profil() {
        return(
        <div className = "UnProfil" style={{ backgroundColor: colors[this.state.numColor]}}>
        <img className ="imageProfil" src={profils[this.state.numero].pp}></img>
        <h2>{profils[this.state.numero].prenom}</h2>
        <h2>{profils[this.state.numero].nom}</h2>
        <h2>{profils[this.state.numero].ddn}</h2>
        <button className="boutonCouleur" type="button" onClick={ () => this.handleClick2()}> Change style </button>
        </div>
        );
    }

    render() {
        return(
            <div className = "container App">
                <div className="d-flex flex-row-reverse">
                    {this.Button(0)}
                    {this.Button(1)}
                    {this.Button(2)}
                </div>
                {this.Profil()}
                <Tweeter value = {profils[this.state.numero].tweet}></Tweeter>
            </div>
        );
    }
}

class Tweeter extends React.Component{
    //Affiche tweet
    render() {
        return(
            <div className = "UnTweet"> 
                <p>{this.props.value}</p>
            </div>
        )
    }
}




ReactDOM.render( 
    <Main />,
    document.getElementById('root')
)