import React from 'react';
import img_1 from '../img/team3.jpg'
import img_2 from '../img/team2.jpg'
import img_3 from '../img/team1.jpg'

function Designers(){
	return(
	<>
	<div id="designers">
		<h2>Designers</h2>
		<hr/>
		<p>The best team in the world.</p>
        <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="class">Our designers are thoughtfully chosen</p>
    	<div class="people">
      
			<div class="team">
				<img src={img_3}/>
				<div class="description">
					<h3 class="name">
						Jane Doe
					</h3>
					<p class="dolzhnost">
						Designer
					</p>
					<p>
						rem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt dhav ut labore. 
		    		</p>
		    	</div>
			</div>
			<div class="team">
				<img src={img_2}/>
	        	<div class="description">
	        		<h3 class="name">
	        		John Doe
	        		</h3>
	        		<p class="dolzhnost">
	        		CEO & Founder
	        		</p>
	        		<p>
	        		rem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ffdg ut labore.
	        		</p>
        		</div>
			</div>
			<div class="team">
				<img src={img_1}/>
				<div class="description">
					<h3 class="name">
						Mike Ross
					</h3>
					<p class="dolzhnost">
						Architect
					</p>
					<p>
						rem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt fga ut labore.
					</p>
				</div>
			</div>
		</div>
	</div>
	</>
		)
}


export default Designers





