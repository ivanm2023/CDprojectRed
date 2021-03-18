import React from 'react';
import img1 from '../img/atrium.jpg'
import img2 from '../img/kitchenconcrete.jpg'
import img3 from '../img/diningroom.jpg'
import img4 from '../img/bedroom.jpg'
import img5 from '../img/livingroom.jpg'
import img6 from '../img/livingroom2.jpg'
function Show(){
 	return(
 		<>
 		<div id="Showcase">
			<h2>Showcase</h2>
			<hr/>
			<img src={img1}/>
			<img src={img2}/>
			<img src={img3}/>
			<img src={img4}/>
			<img src={img5}/>
			<img src={img6}/>
		</div>
 		</>
 	)
}


export default Show