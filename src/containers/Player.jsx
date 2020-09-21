import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(()=>{
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        
        <div className= "Player">
            <Link to={ props.playing.source }>
                <button type="button" onClick="" type = "video/mp4" >
                INICIAR
                </button>
            </Link>
        </div>
    ) : <NotFound />;
};

const mapStateToProps = state =>{
    return{
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
