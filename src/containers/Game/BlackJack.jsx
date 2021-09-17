import React, { useEffect } from 'react';
// import { useAuth } from '../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Unity, { UnityContent, UnityContext } from 'react-unity-webgl';
// import './Bingo_unity.css'

// const unityContext = new UnityContext({
//     loaderUrl: "build/myunityapp.loader.js",
//     dataUrl: "build/myunityapp.data",
//     frameworkUrl: "build/myunityapp.framework.js",
//     codeUrl: "build/myunityapp.wasm",
//   });

function BlackJack() {

    // const { users } = useAuth();


    const history = useHistory();

    // make sure you the this this black of code for each game with their respective paths
        const unityContent = new UnityContent(
            '../../blackjack/WebGLversion.json',
            '../../blackjack/UnityLoader.js'
        )
    // make sure you the this this black of code for each game with their respective paths


    const PushTogames = () => {
        history.push('./games')
    }


    unityContent.on("quitted", () => {
        PushTogames();
        console.log('Game quit')
      })

      

    // this block of code is EXTREMELY important
    const onLoaded = () => {
        // e.preventDefault()
        unityContent.send(
          "MainCamera",
          "ReactToUnity",
          JSON.stringify({
          "id": `6101e719e9d3e60022b86a05`,
          }),
        )}

        unityContent.on("GameLoaded", (params) => {
            onLoaded();
        })
    // this block of code is EXTREMELY important

    return (
        <>
        <div className="bingo">
                    {/* updated black jack */}
                    <div className="game_container">
                        <Unity className="canvas" unityContent={unityContent} width="100%" height="100%" /> 
                    
                    </div>
                     {/* updated black jack */}
        </div>
        </>
    )
}

export default BlackJack;
