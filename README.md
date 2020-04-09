<h1>stickyBar</h1>
<p>Sticky sidebar using css property "position:sticky" and jQuery</p>

<h3>Install</h3>
<ol>
 <li>Add in header jquery: <code><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script></code></li>
 <li>Next step is connect of stickyBar.js <code><script src="min.stickyBar.js"></script></code></li>
</ol>
<h3>Init</h3>
<pre>
 <script>
 $(document).ready(function() {
  $('#sidebar').stickyBar({
     view: '.popup', // default is "window"
     modClass: "my-class", //default is sticky
     offset: {
       // offset top and bottom = 0 as default
       top: 5,
       bottom: 5
     }
   });
 });
 </script>
</pre>

Look for example: https://wolflirik.github.io
