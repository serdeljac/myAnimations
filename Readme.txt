----------------------------------------------------------------------------------------------------------------------------------
All Animations are created by Stjepan Erdeljac (2016)
----------------------------------------------------------------------------------------------------------------------------------

What are these animations?

These animations are used to animate titles of various websites as part of an introduction. Though
they are not set in stone, I have made a guideline on how to implement and edit the CSS/JS scripts
for your conveience.

What do I need?

Not much, just the Zip file you can download from GitHub containing my animation and jquery
added above the stj_animations.js script.

How to I add these to my site?

Easily, just follow these instructions:
	1) Copy the "stj.animation.css" and "stj.animation.js" info your web folder
	2) Add the following links to the web page"
		a) <link rel="stylesheet" href="stj_animation.css" media="all"/>
		b)	<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.2.min.js"></script>
		c) <script src="stj_animation.js"></script>
	3) Next add the class to the div tag, "display-title"
		EX. <div class="stj-title">YOUR TITLE HERE</div>
	4) Then add your animation to the addClass property in line 18 in the stj.animation.js file
