                    </div><!-- /.post-contents -->
                </article><!-- /.post -->

	    </div><!-- /.l-container -->
    </main>
    <div class="echo-sub" role="complementary">
        <div class="l-container">

<?php
$echo_dir = dirname($_SERVER["SCRIPT_NAME"]);

if( preg_match( '/styleguide/', $echo_dir ) ) {
    echo '<h2 class="echo-sub-title">Style guide</h2>';
    include('../doc_include/sitemap_styleguide.inc');
}

?>

	    </div><!-- /.l-container -->
    </div><!-- /.echo-sub -->

    <footer class="echo-footer" role="contentinfo">
		<p class="echo-footer-notice">echo.css : Code licensed <a href="https://github.com/webbingstudio/echo-css/blob/master/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</p>
        <p class="echo-footer-copyright"><small>&copy; 2018 <a href="https://webbingstudio.com/" target="_blank">WebbingStudio</a></small></p>
    </footer>

</div><!-- /.l-document -->
</body>
</html>
